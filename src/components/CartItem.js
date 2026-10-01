import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function CartItem({ item, onUpdateColor, onUpdateSize, onUpdateQuantity, onRemove }) {
  return (
    <View style={styles.card}>
      {/* Imagen del producto */}
      <Image source={{ uri: item.image }} style={styles.image} />

      {/* Contenido e información */}
      <View style={styles.infoContainer}>
        <View style={styles.headerRow}>
          <View style={styles.titleColumn}>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
          </View>

          {/* Botón Eliminar */}
          <TouchableOpacity onPress={() => onRemove(item.id)} style={styles.deleteButton}>
            <Text style={styles.deleteIcon}>🗑️</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.price}>${item.price.toFixed(2)}</Text>

        {/* 1. Selección de Color */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionLabel}>Color:</Text>
          <View style={styles.optionsRow}>
            {item.availableColors.map((color) => {
              const isSelected = item.selectedColor === color;
              return (
                <TouchableOpacity
                  key={color}
                  onPress={() => onUpdateColor(item.id, color)}
                  style={[
                    styles.colorCircle,
                    { backgroundColor: color },
                    isSelected && styles.colorCircleSelected,
                  ]}
                />
              );
            })}
          </View>
        </View>

        {/* 2. Selección de Talle (Size) */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionLabel}>Talle:</Text>
          <View style={styles.optionsRow}>
            {item.availableSizes.map((size) => {
              const isSelected = item.selectedSize === size;
              return (
                <TouchableOpacity
                  key={size}
                  onPress={() => onUpdateSize(item.id, size)}
                  style={[
                    styles.sizeBadge,
                    isSelected && styles.sizeBadgeSelected,
                  ]}
                >
                  <Text style={[styles.sizeText, isSelected && styles.sizeTextSelected]}>
                    {size}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* 3. Selección de Cantidad (Qty) */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionLabel}>Cant:</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={() => onUpdateQuantity(item.id, -1)}
              style={styles.qtyBtn}
            >
              <Text style={styles.qtyBtnText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.qtyText}>{item.quantity}</Text>

            <TouchableOpacity
              onPress={() => onUpdateQuantity(item.id, 1)}
              style={styles.qtyBtn}
            >
              <Text style={styles.qtyBtnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: 95,
    height: 120,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'space-between',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  titleColumn: {
    flex: 1,
    paddingRight: 8,
  },
  category: {
    fontSize: 11,
    color: '#9CA3AF',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1F2937',
    marginTop: 2,
  },
  deleteButton: {
    padding: 4,
  },
  deleteIcon: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    fontWeight: '800',
    color: '#2563EB',
    marginVertical: 4,
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
    width: 45,
  },
  optionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 6,
  },
  colorCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  colorCircleSelected: {
    borderWidth: 2,
    borderColor: '#2563EB',
    transform: [{ scale: 1.15 }],
  },
  sizeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  sizeBadgeSelected: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },
  sizeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#4B5563',
  },
  sizeTextSelected: {
    color: '#FFFFFF',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  qtyBtn: {
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  qtyBtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#374151',
  },
  qtyText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#111827',
    paddingHorizontal: 8,
  },
});
