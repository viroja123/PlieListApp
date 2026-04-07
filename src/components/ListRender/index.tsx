import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './styles';
import { toggleFavorite } from '../../store/favourite';

const EventCard = ({ item }: any) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: any) => state.favorites);

    const eventName = item.event_name || item.title || 'Event';
    const eventImage =
        item.event_profile_img ||
        item.image;
    const startDate = item.readable_from_date || item.start_date || 'Date N/A';
    const endDate = item.readable_to_date || '';
    const dateText = endDate ? `${startDate} - ${endDate}` : startDate;
    const locationText = `${item.city || ''}, ${item.country || ''}`.replace(/^, /, '');
    const priceText = item.event_price_from ? `€${item.event_price_from} - €${item.event_price_to || item.event_price_from}` : (item.price || 'Price N/A');
    const tags = item.keywords || item.tags || ['Event'];

    const isFav = favorites.some(
        (f: any) => (f.event_id || f.id) === (item.event_id || item.id)
    );

    const handleFavourite = () => {
        dispatch(toggleFavorite(item));
    };

    return (
        <View style={styles.card}>
            <Image style={styles.eventImage} source={{ uri: eventImage }} resizeMode="cover" />
            <View style={styles.cardContent}>
                <View style={styles.cardHeaderRow}>
                    <Text style={styles.titleText} numberOfLines={1}>{eventName}</Text>
                    <Icon name="arrow-right" size={20} color="#000" />
                </View>

                <View style={styles.dateTimeRow}>
                    <Text style={styles.dateText}>{dateText}</Text>
                    <Text style={styles.locationText}>{locationText}</Text>
                </View>

                <Text style={styles.priceText}>{priceText}</Text>

                <View style={styles.footerRow}>
                    <View style={styles.tagsContainer}>
                        {tags.slice(0, 3).map((tag: string, index: number) => (
                            <View key={index} style={styles.tagBadge}>
                                <Text style={styles.tagText}>{tag}</Text>
                            </View>
                        ))}
                    </View>

                    <View style={styles.actionsRow}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Icon name="upload" size={20} color="#000" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton} onPress={() => handleFavourite(item)}>
                            <Icon name="heart" size={20} color={isFav ? "#4CAF50" : "#000"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default EventCard;