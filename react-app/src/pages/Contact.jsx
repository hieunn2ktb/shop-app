import React from 'react';

const Contact = () => {
    return (
        <div className="container-fluid bg-light py-5">
            <div className="col-md-6 m-auto text-center">
                <h1 className="h1 fw-bold">Liên Hệ Với Chúng Tôi</h1>
                <p>
                    Hãy để lại lời nhắn, chúng tôi sẽ phản hồi bạn trong thời gian sớm nhất.
                </p>
            </div>

            {/* Google Map */}
            <div id="mapid" style={{ width: '100%', height: '300px' }} className="my-5">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.460232421764!2d106.69014167570416!3d10.776019559207217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f309a6918b3%3A0xe54d24a737f2a74!2zMjU4LzY5IFRy4bqnbiBIxrBuZyDEkOG6oW8sIFBoxrDhu51uZyBOZ3V54buFbiBDxrAgVHJpbmgsIFF14bqtbiAxLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1703999999999!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            {/* Contact Form */}
            <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto" role="form">
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="inputname">Họ tên</label>
                                <input type="text" className="form-control mt-1" id="name" name="name" placeholder="Họ tên" />
                            </div>
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="inputemail">Email</label>
                                <input type="email" className="form-control mt-1" id="email" name="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputsubject">Tiêu đề</label>
                            <input type="text" className="form-control mt-1" id="subject" name="subject" placeholder="Tiêu đề" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputmessage">Nội dung</label>
                            <textarea className="form-control mt-1" id="message" name="message" placeholder="Nội dung" rows="8"></textarea>
                        </div>
                        <div className="row">
                            <div className="col text-end mt-2">
                                <button type="submit" className="btn btn-success btn-lg px-3" style={{ backgroundColor: '#ff3366', borderColor: '#ff3366' }}>Gửi tin nhắn</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
