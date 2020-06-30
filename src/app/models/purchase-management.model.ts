export interface PurchaseManagementModel {
  paymentDetails: PaymentDetails[];
  result: true;
}

export interface PaymentDetails {
  id: string;
  name: string;
  course: string;
  email: string;
  phoneNumber: string;
  paidAmount: string;
  paidOn: string;
}
