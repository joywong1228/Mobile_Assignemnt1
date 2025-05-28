import React from 'react';
import { View, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Feather } from '@expo/vector-icons';

type IconType = 'grid';

interface ProfileIconProps {
    type: IconType;
    active?: boolean;
    onPress?: () => void;
    style?: ViewStyle;
}

const iconMap = {
    grid: <Feather name="grid" size={26} />,
};

const ProfileIcon: React.FC<ProfileIconProps> = ({ type, active, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.iconContainer, active && styles.active, style]}>
        {React.cloneElement(iconMap[type], {
            color: active ? '#000' : '#888',
        })}
    </TouchableOpacity>
);

interface IconRowProps {
    activeType: IconType;
    onChange: (type: IconType) => void;
}

export const ProfileIconRow: React.FC<IconRowProps> = ({ activeType, onChange }) => (
    <View style={styles.row}>
        <ProfileIcon type="grid" active={activeType === 'grid'} onPress={() => onChange('grid')} />
    </View>
);

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
    },
    iconContainer: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },
    active: {
        borderBottomColor: '#000',
    },
});

export default ProfileIconRow;
