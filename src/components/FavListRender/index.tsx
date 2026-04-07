import { Image, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../store/favourite";
import { styles } from "./styles";

const FavListRender = ({ item }: { item: any }) => {

    const dispatch = useDispatch();

    const handleRemove = (item: any) => {
        dispatch(toggleFavorite(item));
    };

    const eventName = item.event_name || item.title || 'Event';
    const eventImage =
        item.event_profile_img ||
        item.image;
    const date = item.readable_from_date || item.date || 'Date N/A';

    return (
        <View style={styles.card}>
            <Image
                source={{ uri: eventImage }}
                style={styles.image}
                resizeMode="cover"
            />

            <View style={styles.content}>
                <Text style={styles.title}>{eventName}</Text>
                <Text style={styles.date}>{date}</Text>

                <TouchableOpacity
                    style={styles.removeBtn}
                    onPress={() => handleRemove(item)}
                >
                    <Icon name="heart" size={20} color="red" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default FavListRender;