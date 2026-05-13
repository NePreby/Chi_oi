import { PrismaService } from '../prisma/prisma.service';
import { WalletsService } from '../wallets/wallets.service';
export declare class OrdersService {
    private prisma;
    private walletsService;
    constructor(prisma: PrismaService, walletsService: WalletsService);
    fixDatabaseConstraint(): Promise<void>;
    bookOrder(customerId: number, data: any): Promise<any>;
    findNearbyTaskers(longitude: number, latitude: number, radiusMeters?: number): Promise<any[]>;
    updateTaskerLocation(taskerId: number, longitude: number, latitude: number): Promise<void>;
    acceptOrder(orderId: number, taskerId: number): Promise<{
        taskers: ({
            users: {
                status: string | null;
                created_at: Date | null;
                updated_at: Date | null;
                user_id: number;
                phone: string;
                password_hash: string;
                full_name: string;
                email: string | null;
                gender: string | null;
                avatar_url: string | null;
                role: string;
            };
        } & {
            tasker_id: number;
            bio: string | null;
            kyc_status: string | null;
            average_rating: import("@prisma/client-runtime-utils").Decimal | null;
            total_jobs: number | null;
            is_online: boolean | null;
            last_heartbeat: Date | null;
        }) | null;
    } & {
        order_id: number;
        order_code: string;
        customer_id: number;
        tasker_id: number | null;
        service_id: number;
        voucher_id: number | null;
        status: string | null;
        scheduled_time: Date;
        address: string;
        total_price: import("@prisma/client-runtime-utils").Decimal;
        discount_amount: import("@prisma/client-runtime-utils").Decimal | null;
        tasker_earnings: import("@prisma/client-runtime-utils").Decimal;
        platform_fee: import("@prisma/client-runtime-utils").Decimal;
        payment_method: string | null;
        payment_status: string | null;
        notes: string | null;
        cancel_reason: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    updateOrderStatus(orderId: number, taskerId: number, status: string): Promise<{
        order_id: number;
        order_code: string;
        customer_id: number;
        tasker_id: number | null;
        service_id: number;
        voucher_id: number | null;
        status: string | null;
        scheduled_time: Date;
        address: string;
        total_price: import("@prisma/client-runtime-utils").Decimal;
        discount_amount: import("@prisma/client-runtime-utils").Decimal | null;
        tasker_earnings: import("@prisma/client-runtime-utils").Decimal;
        platform_fee: import("@prisma/client-runtime-utils").Decimal;
        payment_method: string | null;
        payment_status: string | null;
        notes: string | null;
        cancel_reason: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    cancelOrder(orderId: number, customerId: number): Promise<{
        order_id: number;
        order_code: string;
        customer_id: number;
        tasker_id: number | null;
        service_id: number;
        voucher_id: number | null;
        status: string | null;
        scheduled_time: Date;
        address: string;
        total_price: import("@prisma/client-runtime-utils").Decimal;
        discount_amount: import("@prisma/client-runtime-utils").Decimal | null;
        tasker_earnings: import("@prisma/client-runtime-utils").Decimal;
        platform_fee: import("@prisma/client-runtime-utils").Decimal;
        payment_method: string | null;
        payment_status: string | null;
        notes: string | null;
        cancel_reason: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    reviewOrder(orderId: number, customerId: number, rating: number, comment: string): Promise<{
        order_id: number;
        customer_id: number;
        tasker_id: number;
        created_at: Date | null;
        rating: number;
        comment: string | null;
        review_id: number;
    }>;
    getOrderById(orderId: number, userId: number): Promise<{
        customers: {
            users: {
                phone: string;
                full_name: string;
            };
        } & {
            customer_id: number;
            default_address: string | null;
            loyalty_points: number | null;
        };
        services: {
            service_id: number;
            created_at: Date | null;
            name: string;
            description: string | null;
            base_price: import("@prisma/client-runtime-utils").Decimal;
            icon_url: string | null;
            is_active: boolean | null;
        };
        taskers: ({
            users: {
                phone: string;
                full_name: string;
                avatar_url: string | null;
            };
        } & {
            tasker_id: number;
            bio: string | null;
            kyc_status: string | null;
            average_rating: import("@prisma/client-runtime-utils").Decimal | null;
            total_jobs: number | null;
            is_online: boolean | null;
            last_heartbeat: Date | null;
        }) | null;
    } & {
        order_id: number;
        order_code: string;
        customer_id: number;
        tasker_id: number | null;
        service_id: number;
        voucher_id: number | null;
        status: string | null;
        scheduled_time: Date;
        address: string;
        total_price: import("@prisma/client-runtime-utils").Decimal;
        discount_amount: import("@prisma/client-runtime-utils").Decimal | null;
        tasker_earnings: import("@prisma/client-runtime-utils").Decimal;
        platform_fee: import("@prisma/client-runtime-utils").Decimal;
        payment_method: string | null;
        payment_status: string | null;
        notes: string | null;
        cancel_reason: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    getCustomerHistory(customerId: number): Promise<({
        services: {
            service_id: number;
            created_at: Date | null;
            name: string;
            description: string | null;
            base_price: import("@prisma/client-runtime-utils").Decimal;
            icon_url: string | null;
            is_active: boolean | null;
        };
        taskers: ({
            users: {
                status: string | null;
                created_at: Date | null;
                updated_at: Date | null;
                user_id: number;
                phone: string;
                password_hash: string;
                full_name: string;
                email: string | null;
                gender: string | null;
                avatar_url: string | null;
                role: string;
            };
        } & {
            tasker_id: number;
            bio: string | null;
            kyc_status: string | null;
            average_rating: import("@prisma/client-runtime-utils").Decimal | null;
            total_jobs: number | null;
            is_online: boolean | null;
            last_heartbeat: Date | null;
        }) | null;
    } & {
        order_id: number;
        order_code: string;
        customer_id: number;
        tasker_id: number | null;
        service_id: number;
        voucher_id: number | null;
        status: string | null;
        scheduled_time: Date;
        address: string;
        total_price: import("@prisma/client-runtime-utils").Decimal;
        discount_amount: import("@prisma/client-runtime-utils").Decimal | null;
        tasker_earnings: import("@prisma/client-runtime-utils").Decimal;
        platform_fee: import("@prisma/client-runtime-utils").Decimal;
        payment_method: string | null;
        payment_status: string | null;
        notes: string | null;
        cancel_reason: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    })[]>;
    saveMessage(data: {
        order_id: number;
        sender_id: number;
        receiver_id: number;
        content: string;
    }): Promise<{
        order_id: number;
        created_at: Date | null;
        content: string;
        is_read: boolean | null;
        message_id: number;
        sender_id: number;
        receiver_id: number;
    }>;
    getChatHistory(orderId: number): Promise<{
        order_id: number;
        created_at: Date | null;
        content: string;
        is_read: boolean | null;
        message_id: number;
        sender_id: number;
        receiver_id: number;
    }[]>;
}
