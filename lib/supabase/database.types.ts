export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type AdminRole = "super_admin" | "admin" | "sales" | "content_editor";
export type ProductStatus = "draft" | "published" | "archived";
export type LeadStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "site_review"
  | "quote_sent"
  | "consultation_booked"
  | "reservation_pending"
  | "reserved"
  | "closed_won"
  | "closed_lost";
export type ReservationStatus =
  "pending_payment" | "paid" | "cancelled" | "refunded" | "expired";
export type QuoteStatus =
  "draft" | "sent" | "accepted" | "declined" | "expired";

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string | null;
          avatar_url: string | null;
          phone: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          full_name?: string | null;
          avatar_url?: string | null;
          phone?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Insert"]>;
      };
      admin_users: {
        Row: {
          id: string;
          user_id: string;
          role: AdminRole;
          display_name: string;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          role?: AdminRole;
          display_name: string;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["admin_users"]["Insert"]>;
      };
      admin_tasks: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          status: string;
          priority: string;
          entity_table: string | null;
          entity_id: string | null;
          assigned_to: string | null;
          due_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description?: string | null;
          status?: string;
          priority?: string;
          entity_table?: string | null;
          entity_id?: string | null;
          assigned_to?: string | null;
          due_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["admin_tasks"]["Insert"]>;
      };
      suppliers: {
        Row: {
          id: string;
          name: string;
          contact_name: string | null;
          email: string | null;
          phone: string | null;
          website: string | null;
          notes: string | null;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          contact_name?: string | null;
          email?: string | null;
          phone?: string | null;
          website?: string | null;
          notes?: string | null;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["suppliers"]["Insert"]>;
      };
      product_categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          sort_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string | null;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<
          Database["public"]["Tables"]["product_categories"]["Insert"]
        >;
      };
      media_assets: {
        Row: {
          id: string;
          storage_path: string;
          alt_text: string | null;
          caption: string | null;
          mime_type: string | null;
          width: number | null;
          height: number | null;
          size_bytes: number | null;
          created_by: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          storage_path: string;
          alt_text?: string | null;
          caption?: string | null;
          mime_type?: string | null;
          width?: number | null;
          height?: number | null;
          size_bytes?: number | null;
          created_by?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["media_assets"]["Insert"]>;
      };
      products: {
        Row: {
          id: string;
          supplier_id: string | null;
          category_id: string | null;
          name: string;
          slug: string;
          status: ProductStatus;
          short_description: string | null;
          long_description: string | null;
          bedroom_count: number;
          bathroom_count: number;
          floor_area_sqm: number | null;
          width_m: number | null;
          length_m: number | null;
          height_m: number | null;
          featured: boolean;
          main_image_asset_id: string | null;
          floor_plan_asset_id: string | null;
          model_url: string | null;
          included_features: Json;
          optional_upgrades: Json;
          seo_title: string | null;
          seo_description: string | null;
          created_by: string | null;
          updated_by: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          supplier_id?: string | null;
          category_id?: string | null;
          name: string;
          slug: string;
          status?: ProductStatus;
          short_description?: string | null;
          long_description?: string | null;
          bedroom_count?: number;
          bathroom_count?: number;
          floor_area_sqm?: number | null;
          width_m?: number | null;
          length_m?: number | null;
          height_m?: number | null;
          featured?: boolean;
          main_image_asset_id?: string | null;
          floor_plan_asset_id?: string | null;
          model_url?: string | null;
          included_features?: Json;
          optional_upgrades?: Json;
          seo_title?: string | null;
          seo_description?: string | null;
          created_by?: string | null;
          updated_by?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["products"]["Insert"]>;
      };
      enquiries: {
        Row: {
          id: string;
          product_id: string | null;
          full_name: string;
          email: string;
          phone: string | null;
          eircode: string | null;
          desired_home_type: string | null;
          timeline: string | null;
          message: string | null;
          consent: boolean;
          status: LeadStatus;
          source: string;
          assigned_to: string | null;
          internal_notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          product_id?: string | null;
          full_name: string;
          email: string;
          phone?: string | null;
          eircode?: string | null;
          desired_home_type?: string | null;
          timeline?: string | null;
          message?: string | null;
          consent?: boolean;
          status?: LeadStatus;
          source?: string;
          assigned_to?: string | null;
          internal_notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["enquiries"]["Insert"]>;
      };
      appointments: GenericLeadTable;
      reservations: {
        Row: {
          id: string;
          product_id: string | null;
          full_name: string;
          email: string;
          phone: string | null;
          eircode: string | null;
          preferred_timeline: string | null;
          notes: string | null;
          deposit_amount_cents: number;
          currency: string;
          status: ReservationStatus;
          payment_provider: string | null;
          payment_reference: string | null;
          disclaimer_accepted: boolean;
          assigned_to: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          product_id?: string | null;
          full_name: string;
          email: string;
          phone?: string | null;
          eircode?: string | null;
          preferred_timeline?: string | null;
          notes?: string | null;
          deposit_amount_cents?: number;
          currency?: string;
          status?: ReservationStatus;
          payment_provider?: string | null;
          payment_reference?: string | null;
          disclaimer_accepted?: boolean;
          assigned_to?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["reservations"]["Insert"]>;
      };
      quotes: {
        Row: {
          id: string;
          enquiry_id: string | null;
          product_id: string | null;
          quote_number: string;
          status: QuoteStatus;
          customer_name: string;
          customer_email: string;
          currency: string;
          subtotal_cents: number;
          notes: string | null;
          valid_until: string | null;
          created_by: string | null;
          assigned_to: string | null;
          sent_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          enquiry_id?: string | null;
          product_id?: string | null;
          quote_number: string;
          status?: QuoteStatus;
          customer_name: string;
          customer_email: string;
          currency?: string;
          subtotal_cents?: number;
          notes?: string | null;
          valid_until?: string | null;
          created_by?: string | null;
          assigned_to?: string | null;
          sent_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["quotes"]["Insert"]>;
      };
      quote_items: MinimalTable;
      lead_assignments: MinimalTable;
      journal_posts: {
        Row: {
          id: string;
          title: string;
          slug: string;
          excerpt: string | null;
          body: Json;
          status: ProductStatus;
          cover_asset_id: string | null;
          seo_title: string | null;
          seo_description: string | null;
          published_at: string | null;
          created_by: string | null;
          updated_by: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          excerpt?: string | null;
          body?: Json;
          status?: ProductStatus;
          cover_asset_id?: string | null;
          seo_title?: string | null;
          seo_description?: string | null;
          published_at?: string | null;
          created_by?: string | null;
          updated_by?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<
          Database["public"]["Tables"]["journal_posts"]["Insert"]
        >;
      };
      site_feasibility_requests: {
        Row: {
          id: string;
          product_id: string | null;
          eircode: string;
          desired_home_type: string | null;
          timeline: string | null;
          full_name: string;
          email: string;
          phone: string | null;
          consent: boolean;
          status: LeadStatus;
          notes: string | null;
          assigned_to: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          product_id?: string | null;
          eircode: string;
          desired_home_type?: string | null;
          timeline?: string | null;
          full_name: string;
          email: string;
          phone?: string | null;
          consent?: boolean;
          status?: LeadStatus;
          notes?: string | null;
          assigned_to?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<
          Database["public"]["Tables"]["site_feasibility_requests"]["Insert"]
        >;
      };
      product_media: MinimalTable;
      product_features: MinimalTable;
      product_specifications: MinimalTable;
      product_hotspots: MinimalTable;
      activity_log: {
        Row: {
          id: string;
          actor_user_id: string | null;
          actor_admin_id: string | null;
          entity_table: string;
          entity_id: string;
          action: string;
          old_data: Json | null;
          new_data: Json | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          actor_user_id?: string | null;
          actor_admin_id?: string | null;
          entity_table: string;
          entity_id: string;
          action: string;
          old_data?: Json | null;
          new_data?: Json | null;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["activity_log"]["Insert"]>;
      };
    };
    Views: Record<string, never>;
    Functions: {
      current_admin_role: {
        Args: Record<string, never>;
        Returns: AdminRole | null;
      };
      is_admin: {
        Args: Record<string, never>;
        Returns: boolean;
      };
      is_admin_role: {
        Args: { allowed_roles: AdminRole[] };
        Returns: boolean;
      };
    };
    Enums: {
      admin_role: AdminRole;
      product_status: ProductStatus;
      lead_status: LeadStatus;
      reservation_status: ReservationStatus;
      quote_status: QuoteStatus;
    };
    CompositeTypes: Record<string, never>;
  };
};

type MinimalTable = {
  Row: Record<string, Json>;
  Insert: Record<string, Json | undefined>;
  Update: Record<string, Json | undefined>;
};

type GenericLeadTable = {
  Row: Record<string, Json>;
  Insert: Record<string, Json | undefined>;
  Update: Record<string, Json | undefined>;
};
