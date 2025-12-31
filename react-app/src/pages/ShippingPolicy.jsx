import React from 'react';
import PolicyLayout from '../components/PolicyLayout';

const ShippingPolicy = () => {
    return (
        <PolicyLayout title="Chính Sách Vận Chuyển">
            <p>Linh Cosmetics cung cấp dịch vụ giao hàng tận nơi trên toàn quốc, áp dụng cho tất cả các khách hàng mua hàng qua website, fanpage và gọi điện thoại.</p>

            <p className="fw-bold">1. Phí giao hàng:</p>
            <ul>
                <li><strong>Miễn phí giao hàng</strong> cho đơn hàng từ 399.000đ trở lên.</li>
                <li>Đơn hàng dưới 399.000đ: Phí ship đồng giá <strong>30.000đ</strong> toàn quốc.</li>
            </ul>

            <p className="fw-bold">2. Thời gian giao hàng:</p>
            <ul>
                <li><strong>Nội thành TP.HCM:</strong> Giao hàng trong vòng 1-2 ngày làm việc.</li>
                <li><strong>Các tỉnh thành khác:</strong> Giao hàng trong vòng 2-4 ngày làm việc.</li>
                <li>Thời gian giao hàng không tính thứ 7, Chủ nhật và các ngày Lễ, Tết.</li>
            </ul>

            <p className="fw-bold">3. Quy trình giao nhận:</p>
            <p>Khi nhận hàng, quý khách vui lòng kiểm tra kỹ gói hàng:</p>
            <ul>
                <li>Bao bì còn nguyên vẹn, không có dấu hiệu cạy mở.</li>
                <li>Sản phẩm bên trong đúng với đơn đặt hàng (số lượng, chủng loại, quà tặng kèm theo...).</li>
            </ul>
            <p>Nếu có vấn đề gì, vui lòng liên hệ ngay với Hotline <strong>093.262.1188</strong> để được hỗ trợ kịp thời.</p>
        </PolicyLayout>
    );
};

export default ShippingPolicy;
