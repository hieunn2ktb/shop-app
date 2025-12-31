import React from 'react';
import PolicyLayout from '../components/PolicyLayout';

const TermsOfService = () => {
    return (
        <PolicyLayout title="Điều Khoản Dịch Vụ">
            <p>Chào mừng quý khách hàng đến với website của Linh Cosmetics - Hệ thống Phân phối các sản phẩm làm đẹp từ các thương hiệu hàng đầu. Chúng tôi luôn không ngừng hoàn thiện để đem lại cho Quý khách sự trải nghiệm mua sắm thuận tiện và hiệu quả nhất. Dưới đây là Thông tin về điều kiện giao dịch chung (Điều Khoản Dịch Vụ).</p>

            <p className="fw-bold">Dưới đây là Thông tin về điều kiện giao dịch chung (Điều Khoản Dịch Vụ):</p>

            <p>1. Quý khách có thể tự do sử dụng website mà không cần phải đăng ký hoặc đăng nhập tài khoản. Chúng tôi không có các điều kiện hạn chế nào trong quá trình cung cấp hàng hoá dịch vụ về thời gian và phạm vi địa lý.</p>

            <p>2. Chính sách Kiểm hàng, Đổi trả hàng và Hoàn tiền, Chính sách Bảo hành: Quý khách vui lòng tham khảo điều khoản "Chính Sách Đổi Trả" được chúng tôi công bố ở mục riêng tại Trang chủ của Website này.</p>

            <p>3. Tiêu chuẩn dịch vụ, quy trình cung cấp dịch vụ, biểu phí và các điều khoản khác liên quan đến việc cung cấp dịch vụ, bao gồm cả những điều kiện và hạn chế nếu có:</p>

            <p className="fw-bold">a. Tiêu Chuẩn Dịch Vụ:</p>
            <p>Linh Cosmetics cam kết mọi hàng hoá mà chúng tôi cung cấp đều rõ ràng nguồn gốc xuất xứ. Tất cả hàng hoá tại hệ thống của chúng tôi đều được nhập trực tiếp từ Nhà Sản xuất hoặc từ Nhà Phân phối được Ủy quyền chính thức.</p>

            <p className="fw-bold">b. Quy Trình Cung Cấp Dịch Vụ:</p>
            <p>Quý khách có thể đặt mua hàng hoá tại Linh Cosmetics bằng cách:</p>
            <ul className="list-unstyled ps-3">
                <li>- Đặt trực tiếp trên website, nhập các Mã Giảm Giá để hưởng các ưu đãi.</li>
                <li>- Gọi điện qua Hotline, Chat trực tiếp để được tư vấn và hỗ trợ đặt hàng bởi đội ngũ Tư Vấn viên của chúng tôi.</li>
                <li>- Đơn hàng sau khi được xác nhận sẽ được chúng tôi đóng gói và chuyển tới Quý khách thông qua đơn vị vận chuyển. Thời gian giao hàng từ 1-3 ngày tuỳ khu vực.</li>
                <li>- Quý khách có thể theo dõi tình trạng đơn hàng bằng cách truy cập vào mục "Kiểm Tra Đơn Hàng" trên Trang Chủ của Website này.</li>
            </ul>
        </PolicyLayout>
    );
};

export default TermsOfService;
