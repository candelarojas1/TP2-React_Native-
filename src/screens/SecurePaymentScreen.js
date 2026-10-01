import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView, Alert, StatusBar } from 'react-native';

export default function SecurePaymentScreen({ cartItems, onBackToCart }) {
  // 3. Tipos de tarjetas requeridos: Visa, Master y otras
  const cardTypes = [
    { id: 'visa', name: 'Visa', logo: '💳', brandColor: '#1A1F71' },
    { id: 'mastercard', name: 'Mastercard', logo: '🔴🟡', brandColor: '#EB001B' },
    { id: 'amex', name: 'American Express', logo: '💙', brandColor: '#006FCF' },
    { id: 'other', name: 'Otra Tarjeta', logo: '⚙️', brandColor: '#4B5563' },
  ];

  const [selectedCardType, setSelectedCardType] = useState('visa');
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 8892');
  const [cardHolder, setCardHolder] = useState('Candela Rojas');
  const [expiry, setExpiry] = useState('12/28');
  const [cvv, setCvv] = useState('321');

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) + (cartItems.length > 0 ? 15.0 : 0.0);

  const handlePay = () => {
    const cardInfo = cardTypes.find(c => c.id === selectedCardType);
    Alert.alert(
      "¡Pago Procesado Con Éxito! 🎉",
      `Se procesó el pago de $${totalAmount.toFixed(2)} con tu tarjeta ${cardInfo.name}.`,
      [{ text: "OK", onPress: onBackToCart }]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>

        {/* Encabezado con Volver */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onBackToCart} style={styles.backButton}>
            <Text style={styles.backText}>‹ Volver al Carrito</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Secure Payment</Text>
        </View>

        {/* Card visual preview */}
        <View style={[styles.creditCard, { backgroundColor: cardTypes.find(c => c.id === selectedCardType)?.brandColor || '#1E293B' }]}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardChip}>💳 CHIP</Text>
            <Text style={styles.cardLogo}>{cardTypes.find(c => c.id === selectedCardType)?.logo}</Text>
          </View>

          <Text style={styles.cardNumberDisplay}>{cardNumber || '•••• •••• •••• ••••'}</Text>

          <View style={styles.cardFooter}>
            <View>
              <Text style={styles.cardLabel}>TITULAR</Text>
              <Text style={styles.cardValue}>{cardHolder.toUpperCase() || 'NOMBRE Y APELLIDO'}</Text>
            </View>

            <View>
              <Text style={styles.cardLabel}>VENCIMIENTO</Text>
              <Text style={styles.cardValue}>{expiry || 'MM/AA'}</Text>
            </View>
          </View>
        </View>

        {/* Selección de Tipo de Tarjeta (Requerimiento de negocio 3) */}
        <Text style={styles.sectionTitle}>Selecciona el Tipo de Tarjeta</Text>
        <View style={styles.cardTypesContainer}>
          {cardTypes.map((type) => {
            const isSelected = selectedCardType === type.id;
            return (
              <TouchableOpacity
                key={type.id}
                onPress={() => setSelectedCardType(type.id)}
                style={[
                  styles.cardTypeOption,
                  isSelected && styles.cardTypeOptionSelected,
                ]}
              >
                <Text style={styles.cardTypeLogo}>{type.logo}</Text>
                <Text style={[styles.cardTypeName, isSelected && styles.cardTypeNameSelected]}>
                  {type.name}
                </Text>
                {isSelected && <Text style={styles.selectedCheck}>✓</Text>}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Formulario de Datos */}
        <Text style={styles.sectionTitle}>Detalles de la Tarjeta</Text>

        <View style={styles.formGroup}>
          <Text style={styles.inputLabel}>Número de Tarjeta</Text>
          <TextInput
            style={styles.input}
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="numeric"
            placeholder="XXXX XXXX XXXX XXXX"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.inputLabel}>Nombre en la Tarjeta</Text>
          <TextInput
            style={styles.input}
            value={cardHolder}
            onChangeText={setCardHolder}
            placeholder="Como figura en la tarjeta"
          />
        </View>

        <View style={styles.rowTwoInputs}>
          <View style={[styles.formGroup, { flex: 1, marginRight: 8 }]}>
            <Text style={styles.inputLabel}>Vencimiento</Text>
            <TextInput
              style={styles.input}
              value={expiry}
              onChangeText={setExpiry}
              placeholder="MM/AA"
            />
          </View>

          <View style={[styles.formGroup, { flex: 1, marginLeft: 8 }]}>
            <Text style={styles.inputLabel}>Código CVC / CVV</Text>
            <TextInput
              style={styles.input}
              value={cvv}
              onChangeText={setCvv}
              keyboardType="numeric"
              secureTextEntry
              placeholder="123"
            />
          </View>
        </View>

        {/* Resumen Final de Compra */}
        <View style={styles.paymentSummary}>
          <Text style={styles.paymentTotalLabel}>Monto total a abonar:</Text>
          <Text style={styles.paymentTotalAmount}>${totalAmount.toFixed(2)}</Text>
        </View>

        {/* Botón Pagar */}
        <TouchableOpacity style={styles.payButton} onPress={handlePay}>
          <Text style={styles.payButtonText}>🔒 Pagar con {cardTypes.find(c => c.id === selectedCardType)?.name}</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    marginVertical: 12,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  backText: {
    fontSize: 15,
    color: '#2563EB',
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
  },
  creditCard: {
    borderRadius: 18,
    padding: 20,
    height: 180,
    justifyContent: 'space-between',
    marginVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardChip: {
    color: '#F9FAFB',
    fontSize: 11,
    fontWeight: '700',
    opacity: 0.8,
  },
  cardLogo: {
    fontSize: 22,
  },
  cardNumberDisplay: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 2,
    textAlign: 'center',
    marginVertical: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLabel: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1,
  },
  cardValue: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginTop: 16,
    marginBottom: 10,
  },
  cardTypesContainer: {
    gap: 8,
  },
  cardTypeOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  cardTypeOptionSelected: {
    borderColor: '#2563EB',
    backgroundColor: '#EFF6FF',
  },
  cardTypeLogo: {
    fontSize: 18,
    marginRight: 10,
  },
  cardTypeName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    flex: 1,
  },
  cardTypeNameSelected: {
    color: '#2563EB',
    fontWeight: '700',
  },
  selectedCheck: {
    color: '#2563EB',
    fontWeight: '900',
    fontSize: 16,
  },
  formGroup: {
    marginBottom: 12,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4B5563',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#111827',
  },
  rowTwoInputs: {
    flexDirection: 'row',
  },
  paymentSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
  },
  paymentTotalLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#4B5563',
  },
  paymentTotalAmount: {
    fontSize: 22,
    fontWeight: '900',
    color: '#2563EB',
  },
  payButton: {
    backgroundColor: '#1E293B',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 8,
  },
  payButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
