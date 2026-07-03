import "server-only";

export type ReservationPaymentIntent = {
  provider: "manual_follow_up";
  reference: string | null;
  status: "pending_payment";
};

export interface ReservationPaymentProvider {
  createPendingIntent(input: {
    reservationLabel: string;
    customerEmail: string;
  }): Promise<ReservationPaymentIntent>;
}

class ManualFollowUpPaymentProvider implements ReservationPaymentProvider {
  async createPendingIntent(): Promise<ReservationPaymentIntent> {
    return {
      provider: "manual_follow_up",
      reference: null,
      status: "pending_payment",
    };
  }
}

export function getReservationPaymentProvider(): ReservationPaymentProvider {
  return new ManualFollowUpPaymentProvider();
}
