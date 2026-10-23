/* CHẠM GỐM — dữ liệu mẫu (tiếng Việt) */
window.CG = (function () {
  const categories = [
    { id: 'tiem-gom', no: '01', title: 'Tiệm Gốm', desc: 'Những món gốm thủ công chọn lọc — từ bộ trà đến đồ decor — mang hơi ấm của lửa vào mái nhà bạn.', href: '?trang=tiem-gom', type: 'teapot', scheme: 'blue' },
    { id: 'chuyen-lang-gom', no: '02', title: 'Chuyện Làng Gốm', desc: 'Ký sự, chân dung nghệ nhân và những làng nghề còn đỏ lửa từ Bắc vào Nam.', href: '?trang=chuyen-lang-gom', type: 'vase', scheme: 'wine' },
    { id: 'tram-trai-nghiem', no: '03', title: 'Trạm Trải Nghiệm', desc: 'Workshop và khóa học để chính tay bạn nhào đất, chuốt dáng và vẽ men.', href: '?trang=tram-trai-nghiem', type: 'bowl', scheme: 'paper' },
    { id: 'nhat-ky-xuong-lo', no: '04', title: 'Nhật Ký Xưởng Lò', desc: 'Kiến thức chuyên môn về đất, men, lửa — và cả những mẻ gốm hỏng.', href: '?trang=nhat-ky-xuong-lo', type: 'jar', scheme: 'soft' },
    { id: 'gom-vi-cong-dong', no: '05', title: 'Gốm Vì Cộng Đồng', desc: 'Mỗi món gốm là một cơ hội: lớp học miễn phí, quỹ thiện nguyện, những mảnh vỡ được sống lại.', href: '?trang=gom-vi-cong-dong', type: 'cup', scheme: 'wine2' }
  ];

  const products = [
    { id: 'bo-tra-men-xanh-cham', cat: 'Bộ trà gốm', name: 'Bộ Trà Men Xanh Chàm', price: 780000, short: 'Thiết kế mộc mạc với lớp men hỏa biến màu xanh chàm thẫm điểm xuyết sắc nâu đồng.', description: 'Bộ ấm trà gồm 1 ấm quai xách xốm cao và 2 chén trà không quai. Thiết kế mộc mạc với lớp men hỏa biến màu xanh chàm thẫm điểm xuyết sắc nâu đồng, tôn lên vẻ tĩnh lặng và tinh tế cho không gian thưởng trà.', size: 'Ấm 500ml · chén 80ml', material: 'Đất sét tinh luyện, men hỏa biến xanh chàm', image: 'assets/19.png', type: 'teapot', a: 'blue', b: 'blueSoft', deco: 'band', accent: 'wine', bg: 'ivory' },
    { id: 'bo-tra-men-moc-cam-trang', cat: 'Bộ trà gốm', name: 'Bộ Trà Men Mộc Cam Trắng', price: 860000, short: 'Bộ trà gồm 1 ấm trà có núm nắp hình chú chim xanh độc đáo, 2 ly trà có tay cầm và 2 đĩa lót.', description: 'Bộ trà gồm 1 ấm trà có núm nắp hình chú chim xanh độc đáo, 2 ly trà có tay cầm và 2 đĩa lót. Thân gốm kết hợp giữa sắc trắng ngà nhám bọt biển ở nửa trên và lớp men màu cam đất ấm áp ở chân.', size: 'Ấm 600ml · Ly 150ml', material: 'Đất gốm sành nhám, men bọt biển kết hợp men màu thủ công', image: 'assets/20.png', type: 'teapot', a: 'wine', b: 'wine2', deco: 'dots', accent: 'ivory', bg: 'blueSoft' },
    { id: 'bo-tra-quai-tron-men-do-Kintsugi', cat: 'Bộ trà gốm', name: 'Bộ Trà Quai Tròn Men Đỏ Kintsugi', price: 660000, short: 'Toàn bộ phủ men màu đỏ đô nổi bật với các đường chỉ rạn mạ vàng theo phong cách Kintsugi sang trọng.', description: 'Bộ ấm trà gồm 1 ấm dáng bầu tròn quai xách hình vòng cung lớn cùng 2 chén trà trụ. Toàn bộ phủ men màu đỏ đô nổi bật với các đường chỉ rạn mạ vàng theo phong cách Kintsugi sang trọng.', size: 'Ấm 700ml · chén 60ml', material: 'Đất sét tinh luyện, men màu cao cấp, họa tiết dát vàng Kintsugi', image: 'assets/21.png', type: 'teapot', a: 'ivory', b: 'paper', deco: 'flower', accent: 'blue', bg: 'blue' },
    { id: 'bo-tra-men-xanh-thien-thanh', cat: 'Bộ trà gốm', name: 'Bộ Trà Men Xanh Thiên Thanh', price: 620000, short: 'Bề mặt phủ men hỏa biến xanh thiên thanh đốm sao lấp lánh tựa dòng sông ngân.', description: 'Bộ gồm 1 ấm trà dáng lùn khía múi dọc và 2 chén trà dáng loa. Bề mặt phủ men hỏa biến xanh thiên thanh đốm sao lấp lánh tựa dòng sông ngân, tạo cảm giác thư thái khi thưởng trà.', size: 'Ấm 450ml · chén 70ml', material: 'Đất sét cao cấp, men hỏa biến đốm lam', image: 'assets/22.png', type: 'teapot', a: 'ivory', b: 'paper', deco: 'flower', accent: 'blue', bg: 'blue' },

    { id: 'ly-gom-bau-men-hong-moc', cat: 'Cốc và ly', name: 'Ly Gốm Bầu Men Hồng Mộc', price: 220000, short: 'Thiết kế cốc dáng bầu tròn đầy đặn với tay cầm tiện lợi.', description: 'Thiết kế cốc dáng bầu tròn đầy đặn với tay cầm tiện lợi, phủ lớp men bóng màu hồng phấn ngọt ngào chuyển nhịp độ đậm nhạt tự nhiên, tạo nét dịu dàng và thanh lịch', size: '350ml', material: 'Đất sét tuyển chọn, men màu bóng/mờ thủ công', image: 'assets/25.png', type: 'cup', a: 'blue', b: 'blueSoft', deco: 'none', accent: 'wine', bg: 'ivory' },
    { id: 'coc-gom-men-xanh-reu-van-xoay', cat: 'Cốc và ly', name: 'Cốc Gốm Men Xanh Rêu Vân Xoáy', price: 220000, short: 'Nổi bật bởi họa tiết đường xoáy ốc mềm mại chìm trong sắc men xanh rêu mát mắt.', description: 'Dáng cốc mộc mạc với quai cầm lớn chắc chắn, mặt ngoài nổi bật bởi họa tiết đường xoáy ốc mềm mại chìm trong sắc men xanh rêu mát mắt', size: '300ml', material: 'Đất gốm sành, men rêu mộc thủ công', image: 'assets/26.png', type: 'cup', a: 'eel', b: 'eel2', deco: 'dots', accent: 'ivory', bg: 'paper' },
    { id: 'ly-gom-men-mat-ich-cam-dat', cat: 'Cốc và ly', name: 'Ly Gốm Men Mật Ích Cam Đất', price: 320000, short: 'Lớp men bóng màu vàng kem mịn màng điểm xuyết vệt men xốm màu cam đỏ mộc mạc.', description: 'Thân cốc nở rộng ở phần đáy đầy đặn, bề mặt phủ lớp men bóng màu vàng kem mịn màng điểm xuyết vệt men xốm màu cam đỏ mộc mạc ở phần chân cốc', size: '380ml', material: 'Đất sét tinh luyện, men hỏa biến sắc cam kem', image: 'assets/27.png', type: 'cup', a: 'ivory', b: 'paper', deco: 'flower', accent: 'wine', bg: 'wine2' },
    { id: 'coc-gom-men-tim-hong-chay-van-ngang', cat: 'Cốc và ly', name: 'Cốc Gốm Men Tím Hồng Chảy Vân Ngang', price: 150000, short: 'Bề mặt độc đáo nhờ các lớp men màu hồng nhạt và trắng sữa chảy tràn theo vệt ngang tự nhiên.', description: 'Thiết kế cốc dáng trụ thấp với quai uốn rộng, bề mặt độc đáo nhờ các lớp men màu hồng nhạt và trắng sữa chảy tràn theo vệt ngang tự nhiên', size: '300ml', material: 'Đất sét cao cấp, men hỏa biến chảy nhiều lớp', image: 'assets/28.png', type: 'cup', a: 'ivory', b: 'paper', deco: 'flower', accent: 'wine', bg: 'wine2' },
    { id: 'coc-gom-men-hoa-bien-tim-lam', cat: 'Cốc và ly', name: 'Cốc Gốm Men Hỏa Biến Tím Lam Dáng Tròn', price: 350000, short: 'Ấn tượng với lớp men hỏa biến chảy từ sắc tím hoàng gia xuống xanh lam vũ trụ.', description: 'Cốc dáng bầu xòe nhẹ phần miệng, ấn tượng với lớp men hỏa biến chảy từ sắc tím hoàng gia xuống xanh lam vũ trụ, để hở chân gốm thô nhám đầy mộc mạc.', size: '400ml', material: 'Đất gốm chấm đốm, men hỏa biến tím xanh chảy', image: 'assets/30.png', type: 'cup', a: 'ivory', b: 'paper', deco: 'flower', accent: 'wine', bg: 'wine2' },

    { id: 'bat-gom-men-hoa-bien-xanh-cham', cat: 'Bộ bàn ăn và bát đĩa', name: 'Bát Gốm Men Hỏa Biến Xanh Chàm', price: 480000, short: 'Ấn tượng với lớp men hỏa biến chảy từ sắc chàm thẫm sang xanh xám dịu nhẹ.', description: 'Thiết kế bát sâu lòng dáng loa thanh thoát, ấn tượng với lớp men hỏa biến chảy từ sắc chàm thẫm sang xanh xám dịu nhẹ, tạo chiều sâu cuốn hút cho món ăn.', size: 'Đường kính 18cm, Cao 8.5cm', material: 'Đất sét cao cấp, men hỏa biến xanh chàm', image: 'assets/44.png', type: 'vase', a: 'blue', b: 'blueDeep', deco: 'band', accent: 'ivory', bg: 'ivory' },
    { id: 'bat-gom-men-chay-lam-tim', cat: 'Bộ bàn ăn và bát đĩa', name: 'Bát Gốm Men Chảy Lam Tím', price: 390000, short: 'Điểm nhấn nghệ thuật bởi dải men chảy màu tím hồng lan tỏa nhẹ nhàng từ vành bát xuống thân.', description: 'Bát gốm dáng tròn đầy đặn trên nền gốm trắng ngà, tạo điểm nhấn nghệ thuật bởi dải men chảy màu tím hồng lan tỏa nhẹ nhàng từ vành bát xuống thân', size: 'Đường kính 16cm, Cao 7cm', material: 'Đất sét trắng tinh luyện, men hỏa biến chảy đa sắc', image: 'assets/45.png', type: 'vase', a: 'ivory', b: 'blueSoft', deco: 'drip', accent: 'blue', bg: 'wine' },
    { id: 'bo-bat-gom-khia-soc-men', cat: 'Bộ bàn ăn và bát đĩa', name: 'Bộ Bát Gốm Khía Sọc Men', price: 880000, short: 'Bộ bát gốm thiết kế hoa văn khía sọc dọc tinh tế quanh thân.', description: 'Bộ bát gốm thiết kế hoa văn khía sọc dọc tinh tế quanh thân, phủ các tông màu men pastel nhẹ nhàng (trắng ngà và xanh lam nhạt) mang lại nét hiện đại cho bàn ăn.', size: '3 bát · Đường kính 13cm, Cao 6cm', material: 'Đất sét cao cấp, men màu pastel bóng nhẹ', image: 'assets/47.png', type: 'jar', a: 'wine', b: 'wine2', deco: 'dots', accent: 'blue', bg: 'paper' },
    { id: 'bo-bat-gom-men-hoa-bien-tinh-van-xanh', cat: 'Bộ bàn ăn và bát đĩa', name: 'Bộ Bát Gốm Men Hỏa Biến Tinh Vân Xanh', price: 1200000, short: 'Nổi bật với lớp lòng bát phủ men hỏa biến tỏa dải hoa văn như đám mây tinh vân xanh lam huyền ảo.', description: 'Bộ bát nổi bật với lớp lòng bát phủ men hỏa biến tỏa dải hoa văn như đám mây tinh vân xanh lam huyền ảo, thân ngoài phủ men mộc mịn sang trọng', size: 'Đường kính 12cm, Cao 6cm', material: 'Đất gốm sành, men hỏa biến kết tinh tỏa tia', image: 'assets/50.png', type: 'jar', a: 'wine', b: 'wine2', deco: 'dots', accent: 'blue', bg: 'paper' },
    { id: 'dia-gom-men-hoa-bien-xanh-may-dom', cat: 'Bộ bàn ăn và bát đĩa', name: 'Đĩa Gốm Men Hỏa Biến Xanh Mây Đốm', price: 520000, short: 'Thiết kế đĩa gốm tròn mộc mạc, ấn tượng với hiệu ứng men hỏa biến sắc xám xanh.', description: 'Thiết kế đĩa gốm tròn mộc mạc, ấn tượng với hiệu ứng men hỏa biến sắc xám xanh đốm hạt kết tinh tựa tầng mây dày, bao quanh bởi phần vành gốm mộc màu kem.', size: 'Đường kính 16cm', material: 'Đất gốm chấm đốm, men hỏa biến kết tinh', image: 'assets/33.png', type: 'jar', a: 'wine', b: 'wine2', deco: 'dots', accent: 'blue', bg: 'paper' },
    { id: 'dia-gom-men-ket-tinh-tinh-van-vu-tru', cat: 'Bộ bàn ăn và bát đĩa', name: 'Đĩa Gốm Men Kết Tinh Tinh Vân Vũ Trụ', price: 560000, short: 'Lớp men hỏa biến kết tinh rực rỡ lan tỏa từ tâm tựa như dải tinh vân đa sắc.', description: 'Đĩa gốm sâu lòng với lớp men hỏa biến kết tinh rực rỡ lan tỏa từ tâm tựa như dải tinh vân đa sắc tím, xanh và vàng kim', size: 'Đường kính 15cm', material: 'Đất sét cao cấp, men hỏa biến kết tinh', image: 'assets/38.png', type: 'jar', a: 'wine', b: 'wine2', deco: 'dots', accent: 'blue', bg: 'paper' },
    { id: 'bo-ban-an-men-hong-tim-Magenta', cat: 'Bộ bàn ăn và bát đĩa', name: 'Bộ Bàn Ăn Men Hồng Tím Magenta', price: 5200000, short: 'Trọn bộ đồ ăn và tách uống trà phủ sắc men hỏa biến hồng tím Magenta kiêu sa.', description: 'Trọn bộ đồ ăn và tách uống trà phủ sắc men hỏa biến hồng tím Magenta kiêu sa, bề mặt loang chuyển nhịp đậm nhạt mang phong cách hiện đại và sang trọng', size: 'Trọn bộ đa dạng kích thước (Bát, đĩa, tách, đĩa lót)', material: 'Gốm tinh luyện, men hỏa biến hồng tím bóng', image: 'assets/17.png',type: 'jar', a: 'wine', b: 'wine2', deco: 'dots', accent: 'blue', bg: 'paper' },
    { id: 'bo-ban-an-men-may-xanh-lam-chay', cat: 'Bộ bàn ăn và bát đĩa', name: 'Bộ Bàn Ăn Men Mây Xanh Lam Chảy', price: 4500000, short: 'Lớp men hỏa biến chảy từ sắc xanh mây sáng xuống trắng ngà tựa như dòng thác nước mềm mại.', description: 'Bộ đồ ăn gốm cao cấp gồm bát, đĩa và cốc phủ lớp men hỏa biến chảy từ sắc xanh mây sáng xuống trắng ngà tựa như dòng thác nước mềm mại.', size: 'Trọn bộ đa dạng kích thước (Bát, đĩa, ly)', material: 'Đất sét cao cấp, men hỏa biến chảy hai màu', image: 'assets/18.png', type: 'jar', a: 'wine', b: 'wine2', deco: 'dots', accent: 'blue', bg: 'paper' },

    { id: 'chan-nen-hoa-calla-lily', cat: 'Sản phẩm decor', name: 'Chân Nến Hoa Calla Lily', price: 340000, short: 'Chân nến tạo hình đóa hoa Calla Lily thanh thoát với cuống lá xanh uốn lượn tự nhiên.', description: 'Chân nến tạo hình đóa hoa Calla Lily thanh thoát với cuống lá xanh uốn lượn tự nhiên, nhụy hoa là nơi đặt nến tealight lung linh đầy nghệ thuật.', size: 'Ø 28cm', material: 'Đất sét tinh luyện, men màu kem hồng kết hợp xanh rêu', image: 'assets/59.png', type: 'bowl', a: 'wine', b: 'wine2', deco: 'flower', accent: 'ivory', bg: 'blue' },
    { id: 'bo-den-nen-gom-dang-cay-thong-noel', cat: 'Sản phẩm decor', name: 'Bộ Đèn Nến Gốm Dáng Cây Thông Noel', price: 220000, short: 'Bộ 3 mô hình cây thông gốm màu trắng ngà đục lỗ họa tiết tam giác thông minh.', description: 'Bộ 3 mô hình cây thông gốm màu trắng ngà đục lỗ họa tiết tam giác thông minh, tạo hiệu ứng hắt ánh sáng ấm áp khi đốt nến/đèn bên trong', size: 'Cao 14cm', material: 'Đất sét trắng, men gốm mịn màu ngà đục lỗ', image: 'assets/60.png', type: 'jar', a: 'blue', b: 'blueSoft', deco: 'band', accent: 'ivory', bg: 'wine' },
    { id: 'dong-ho-treo-tuong-men-hoa-bien', cat: 'Sản phẩm decor', name: 'Đồng Hồ Treo Tường Men hỏa biến', price: 290000, short: 'Nổi bật nhờ các vệt men hỏa biến sắc pastel nhẹ nhàng đốm hạt mộc mạc.', description: 'Đồng hồ treo tường mặt tròn gốm thủ công với vạch số đắp nổi tinh tế, nổi bật nhờ các vệt men hỏa biến sắc pastel nhẹ nhàng đốm hạt mộc mạc', size: 'Đường kính 25cm', material: 'Đất gốm chấm đốm, men hỏa biến pastel, bộ kim kim loại', image: 'assets/61.png', type: 'jar', a: 'eel', b: 'eel2', deco: 'band', accent: 'ivory', bg: 'ivory' },
    { id: 'hu-dung-nen-thom-men-hoa-bien', cat: 'Sản phẩm decor', name: 'Hũ Đựng Nến Thơm Men Hỏa Biến', price: 130000, short: 'Hũ gốm đựng nến thơm dáng trụ sóng lượn đầy tinh tế.', description: 'Hũ gốm đựng nến thơm dáng trụ sóng lượn đầy tinh tế, bề mặt phủ lớp men hỏa biến chảy đa sắc từ hồng, vàng đến xanh ngọc bích vô cùng cuốn hút và đấm ấm khi thắp sáng', size: 'Cao 12cm, Đường kính 9cm', material: 'Đất sét cao cấp, men hỏa biến', image: 'assets/63.png', type: 'jar', a: 'eel', b: 'eel2', deco: 'band', accent: 'ivory', bg: 'ivory' },
    { id: 'binh-gom-men-hoa-bien-dang-ho-lo-bau', cat: 'Sản phẩm decor', name: 'Bình Gốm Men Hỏa Biến Dáng Hồ Lô Bầu', price: 790000, short: 'Dáng bình hồ lô cách điệu bầu tròn mềm mại, nổi bật với lớp men bóng phủ sắc xanh nhạt loang hồng.', description: 'Dáng bình hồ lô cách điệu bầu tròn mềm mại, nổi bật với lớp men bóng phủ sắc xanh nhạt loang hồng mộng mơ tựa vệt mây hoàng hôn', size: 'Cao 24cm', material: 'Đất sét cao cấp, men hỏa biến sắc xanh hồng', image: 'assets/39.png', type: 'jar', a: 'eel', b: 'eel2', deco: 'band', accent: 'ivory', bg: 'ivory' },
    { id: 'binh-gom-nghe-thuat-men-hong', cat: 'Sản phẩm decor', name: 'Bình Gốm Nghệ Thuật Men Hồng', price: 990000, short: 'Bề mặt tạo vệt hiệu ứng men co xốp sắc hồng nude kết hợp nâu đất đầy cá tính và phá cách.', description: 'Bình hoa gốm thủ công với phần miệng gợn sóng tự do, bề mặt tạo vệt hiệu ứng men co xốp sắc hồng nude kết hợp nâu đất đầy cá tính và phá cách', size: 'Cao 26cm', material: 'Đất gốm sành nhám, men co xốp hỏa biến', image: 'assets/40.png', type: 'jar', a: 'eel', b: 'eel2', deco: 'band', accent: 'ivory', bg: 'ivory' },

    { id: 'hop-qua-cham-gom', cat: 'Bộ sưu tập quà tặng', name: 'Hộp Quà Chạm Gốm', price: 3000000, short: 'Hộp quà tặng cao cấp tone màu đỏ rượu gồm 9 món gốm mini tinh xảo.', description: 'Hộp quà tặng cao cấp tone màu đỏ rượu gồm 9 món gốm mini tinh xảo (ấm trà, cốc, bình hoa, khay đựng) mang phong cách gốm thủ công mộc mạc và độc bản, phù hợp làm quà biếu/tặng sưu tầm', size: 'Hộp quà 32x32x10cm', material: 'Đất gốm sành, men thủ công nhiều màu, hộp giấy cứng cao cấp', image: 'assets/8.png', type: 'set', a: 'blue', b: 'ivory', accent: 'wine', bg: 'paper' },
    { id: 'hop-qua-sac-hong-diu-dang', cat: 'Bộ sưu tập quà tặng', name: 'Hộp Quà Sắc Hồng Dịu Dàng', price: 3850000, short: 'Bộ quà tặng "Sắc Hồng Dịu Dàng" gồm cốc quai tròn, hũ nến thơm, khay hoa gốm và thiệp, đóng hộp đính nơ lụa sang trọng.', description: 'Bộ quà tặng chủ đề "Sắc Hồng Dịu Dàng" gồm 1 cốc gốm quai tròn, 1 hũ nến thơm đậu nành gốm, 1 khay phụ kiện hình bông hoa và thiệp chúc mừng, đóng gói chỉn chu trong hộp quà nơ lụa', size: 'Hộp quà 25x25x10cm', material: 'Đất sét trắng, men hỏa biến sắc hồng pastel, sáp đậu nành thiên nhiên', image: 'assets/9.png', type: 'set', a: 'wine', b: 'wine2', accent: 'ivory', bg: 'blueSoft' },
    { id: 'hop-qua-tra-thu-gian-than-tam-an', cat: 'Bộ sưu tập quà tặng', name: 'Hộp Quà Trà Thư Giãn - Thân Tâm An', price: 3100000, short: 'Bộ quà tặng "Trà Thư Giãn" men xanh rêu gồm 1 ấm, 2 chén trà, hũ trà nắp gỗ, đĩa đựng bánh và hoa khô trang trí.', description: 'Bộ quà tặng chủ đề "Trà Thư Giãn - Thân Tâm An" phủ sắc men hỏa biến xanh rêu ấm áp, gồm 1 ấm trà, 2 chén trà, 1 hũ đựng trà nắp gỗ, 1 đĩa gốm đựng bánh và hoa khô trang trí', size: 'Hộp quà 28x28x12cm', material: 'Đất sét tinh luyện, men hỏa biến xanh rêu, nắp gỗ tự nhiên', image: 'assets/10.png', type: 'set', a: 'ivory', b: 'blue', accent: 'wine', bg: 'wine2' },
    { id: 'hop-qua-sum-vay', cat: 'Bộ sưu tập quà tặng', name: 'Hộp Quà Sum Vầy', price: 3500000, short: 'Bộ quà tặng chúc mừng "Hộp Quà Sum Vầy" với sắc men kem ngà thanh lịch.', description: 'Bộ quà tặng chúc mừng "Hộp Quà Sum Vầy" với sắc men kem ngà thanh lịch, gồm 4 bát ăn cơm gốm, 1 bình hoa dáng bầu mini, 2 chân nến gốm kèm nến cây và hoa khô trang trí.', size: 'Hộp quà 30x30x12cm', material: 'Đất sét tinh luyện, men bóng màu kem ngà, hộp bìa cứng sang trọng', image: 'assets/11.png', type: 'set', a: 'ivory', b: 'blue', accent: 'wine', bg: 'wine2' },

    { id: 'dia-dom-men-loang-mat-bao', cat: 'Sản phẩm giới hạn', name: 'Đĩa Gốm Men Loang Viền Sóng “Mắt Bão”', price: 3800000, short: 'Mỗi vệt men loang trên đĩa là một tác phẩm ngẫu nhiên duy nhất được tạo ra trong quá trình nung thủ công tại xưởng.', description: 'Lấy cảm hứng từ nét đẹp tự do của thiên nhiên, sản phẩm “Mắt bão” với phần viền uốn lượn gợn sóng mềm mại, bề mặt phủ lớp men loang phối màu độc đáo giữa xanh lam, nâu cam và xám bạc. Mỗi sản phẩm được nặn, phủ men và nung thủ công tại xưởng CHẠM GỐM, vì vậy màu sắc và dáng có thể khác nhau đôi chút giữa các món.', size: 'Đường kính 20cm', material: 'Đất sét cao cấp, men hỏa biến đa sắc.', image: 'assets/12.png', type: 'vase', a: 'wine', b: 'blue', deco: 'drip', accent: 'night', bg: 'ivory', limited: 'Giới hạn 20 bản' },
    { id: 'binh-gom-tim-kintsugi', cat: 'Sản phẩm giới hạn', name: 'Bình Gốm Tím Kintsugi “Vết Báu Thời Gian”', price: 4500000, short: 'Dáng bình cổ cao kiêu sa phủ sắc tím ombre chuyển nhịp tinh tế, điểm xuyết các đường rạn dát vàng Kintsugi.', description: 'Dáng bình cổ cao kiêu sa phủ sắc tím ombre chuyển nhịp tinh tế, điểm xuyết các đường rạn dát vàng Kintsugi - nghệ thuật tôn vinh những vết nứt tổn thương thành vẻ đẹp hoài niệm, độc bản vô giá. Mỗi sản phẩm được nặn, phủ men và nung thủ công tại xưởng CHẠM GỐM, vì vậy màu sắc và dáng có thể khác nhau đôi chút giữa các món.', size: ' Cao 25cm', material: 'Đất sét tinh luyện, men mờ (matte), bột vàng/sơn sơn mài Kintsugi', image: 'assets/13.png', type: 'teapot', a: 'night', b: 'wine', deco: 'flower', accent: 'blue', bg: 'blue', limited: 'Giới hạn 10 bản' },
    { id: 'to-gom-men-xanh', cat: 'Sản phẩm giới hạn', name: 'Tô Gốm Men Xanh “Đóa Sen Ngọc Bích”', price: 2900000, short: 'Thiết kế tô sâu lòng với vành bèo uốn lượn tái hiện đóa sen ngọc bích bừng nở.', description: 'Thiết kế tô sâu lòng với vành bèo uốn lượn tái hiện đóa sen ngọc bích bừng nở; sự đối lập giữa lòng tô phủ men xanh ngọc bóng mượt và vỏ ngoài thô nhám mang lại cảm giác an yên, tinh tế. Mỗi sản phẩm được nặn, phủ men và nung thủ công tại xưởng CHẠM GỐM, vì vậy màu sắc và dáng có thể khác nhau đôi chút giữa các món.', size: 'Đường kính 22cm', material: 'Đất gốm sành nhám, men ngọc (Celadon) kết hợp men co xốp', image: 'assets/14.png', type: 'bowl', a: 'blue', b: 'blueSoft', deco: 'flower', accent: 'wine', bg: 'wine', limited: 'Giới hạn 15 bản' },
    { id: 'bo-ban-an-men-xanh-dem', cat: 'Sản phẩm giới hạn', name: 'Bộ Bàn Ăn Men Xanh Đêm “Dạ Khúc Bích Thẫm”', price: 6900000, short: 'Lấy cảm hứng từ sự yên bình của bầu trời đêm nhằm mang lại không gian bàn tiệc ấm cúng, sang trọng.', description: 'Trọn bộ bàn ăn khoác lên mình sắc xanh bích sâu thẳm và bóng bẩy, lấy cảm hứng từ sự yên bình của bầu trời đêm nhằm mang lại không gian bàn tiệc ấm cúng, sang trọng. Mỗi sản phẩm được nặn, phủ men và nung thủ công tại xưởng CHẠM GỐM, vì vậy màu sắc và dáng có thể khác nhau đôi chút giữa các món.', size: 'Trọn bộ đa dạng kích thước (Bát, đĩa, chén, thìa)', material: 'Sứ/Gốm tinh luyện nung nhiệt độ cao, men xanh bích bóng (Glossy Blue Glaze)', image: 'assets/16.png', type: 'bowl', a: 'blue', b: 'blueSoft', deco: 'flower', accent: 'wine', bg: 'wine', limited: 'Giới hạn 10 bộ' }
  ];

  const productCats = ['Bộ trà gốm', 'Cốc và ly', 'Bộ bàn ăn và bát đĩa', 'Sản phẩm decor', 'Bộ sưu tập quà tặng', 'Sản phẩm giới hạn'];

  const workshops = [
    { id: 'cham-lan-dau', name: 'Chạm Lần Đầu', short: 'Workshop Chạm Lần Đầu', duration: '2,5 giờ', seats: 8, price: 450000, level: 'Cho người mới', seed: 0, thumb: { src: 'assets/cham-lan-dau-thumb.png', alt: 'Đôi tay hướng dẫn tạo hình chiếc cốc đất sét trên bàn xoay' }, desc: 'Trải nghiệm cảm giác lần đầu tiên ngồi vào bàn xoay, tự tay biến một khối đất sét thành chiếc cốc hoặc chiếc bát mang đậm dấu ấn cá nhân. Sản phẩm được gửi lại xưởng để nung và nhận sau 3 tuần.', includes: ['Nguyên liệu và tạp dề', 'Nghệ nhân kèm từng người', 'Nung và men sản phẩm', 'Trà và bánh nhẹ'], place: 'Xưởng CHẠM GỐM, Bát Tràng' },
    { id: 'men-hoa-bien', name: 'Men Hỏa Biến', short: 'Workshop Men Hỏa Biến', duration: '3 giờ', seats: 6, price: 680000, level: 'Cho người đã có kinh nghiệm', seed: 1, thumb: { src: 'assets/men-hoa-bien-workshop.png', alt: 'Học viên dùng cọ vẽ hoa văn xanh lên chiếc đĩa gốm' }, desc: 'Đi sâu vào nghệ thuật tráng men — nơi lửa là người nghệ sĩ thứ hai. Dành cho những ai muốn tự tay tạo ra các hiệu ứng màu sắc không thể đoán trước.', includes: ['3 mẫu thử men', 'Giảng giải nhiệt độ và khí quyển lò', 'Nung hai sản phẩm', 'Sổ ghi công thức men'], place: 'Xưởng CHẠM GỐM, Bát Tràng' },
    { id: 've-gom', name: 'Vẽ Gốm Nghệ Thuật', short: 'Workshop Vẽ Gốm Nghệ Thuật', duration: '2 giờ', seats: 10, price: 380000, level: 'Mọi trình độ', seed: 2, thumb: { src: 'assets/ve-gom-workshop.png', alt: 'Học viên dùng cọ vẽ hoa văn lên đĩa gốm' }, desc: 'Lớp học thư giãn, nhẹ nhàng, phù hợp để xả stress hoặc đi cùng gia đình, trẻ nhỏ. Bạn sẽ là người họa sĩ thổi hồn vào các sản phẩm gốm mộc.', includes: ['Gốm mộc chọn sẵn', 'Bộ cọ và men màu', 'Nung sản phẩm', 'Nước uống'], place: 'Xưởng CHẠM GỐM, Bát Tràng' },
    { id: 'tour-bat-trang', name: 'Tour Bát Tràng: Một ngày ở Làng', short: 'Tour Bát Tràng: Một ngày ở Làng', duration: '1 ngày (6 giờ)', seats: 15, price: 890000, level: 'Mọi lứa tuổi', seed: 3, thumb: { src: 'assets/tour-bat-trang-thumb.png', alt: 'Công trình kiến trúc hiện đại trong chuyến tham quan Bát Tràng' }, desc: 'Hành trình trọn vẹn kết hợp du lịch văn hóa, ẩm thực địa phương và tự tay trải nghiệm chế tác gốm.', includes: ['Hướng dẫn viên địa phương', 'Bữa trưa đặc sản làng', 'Một sản phẩm tự làm', 'Xe đưa đón tại nội thành'], place: 'Điểm hẹn: Hồ Gươm, Hà Nội' }
  ];

  const workshopDetails = {
    'cham-lan-dau': {
      description: 'Trải nghiệm cảm giác lần đầu tiên ngồi vào bàn xoay, tự tay biến một khối đất sét vô tri thành một chiếc cốc, chiếc bát mang đậm dấu ấn cá nhân.',
      schedule: [
        ['14:00 – 14:15', 'Khởi động', 'Thưởng trà, nhận tạp dề. Nghệ nhân giới thiệu về loại đất sét và các dụng cụ cơ bản.'],
        ['14:15 – 14:45', 'Thị phạm và thực hành nhào đất', 'Nghệ nhân hướng dẫn kỹ thuật nhào đất đuổi bọt khí. Học viên tự tay nhào khối đất của mình.'],
        ['14:45 – 15:45', 'Tạo hình trên bàn xoay', 'Trực tiếp đặt tâm đất và vuốt/chuốt sản phẩm trên bàn xoay dưới sự kèm cặp 1:1 của nghệ nhân.'],
        ['15:45 – 16:15', 'Trang trí và cá nhân hóa', 'Khắc tên, gắn thêm quai nếu làm cốc, hoặc tạo hình vân nổi trên bề mặt thô.'],
        ['16:15 – 16:30', 'Chọn màu men', 'Gửi sản phẩm lại xưởng để nung và nhận sau 3 tuần.']
      ]
    },
    'men-hoa-bien': {
      description: 'Đi sâu vào nghệ thuật tráng men – nơi lửa là người nghệ sĩ thứ hai. Dành cho những ai muốn tự tay tạo ra các hiệu ứng màu sắc không thể đoán trước.',
      schedule: [
        ['09:00 – 09:30', 'Khám phá', 'Tìm hiểu cơ chế của men hỏa biến, cách nhiệt độ lò và cách pha men quyết định thành phẩm.'],
        ['09:30 – 10:30', 'Chế tác nâng cao', 'Chuốt dáng gốm trên bàn xoay hoặc tinh chỉnh phôi gốm thô đã khô.'],
        ['10:30 – 11:30', 'Thuật phối men', 'Nghệ nhân hướng dẫn công thức pha men. Học viên tự tay nhúng, dội hoặc chồng các lớp men lên sản phẩm.'],
        ['11:30 – 12:00', 'Chiêm nghiệm', 'Bàn luận cùng nghệ nhân về dự đoán kết quả, lưu lại công thức men của mình và chờ đợi sự bất ngờ sau khi nung.']
      ]
    },
    've-gom': {
      description: 'Lớp học thư giãn, nhẹ nhàng. Phù hợp để xả stress hoặc đi cùng gia đình, trẻ nhỏ. Bạn sẽ là người họa sĩ thổi hồn vào các sản phẩm gốm mộc.',
      schedule: [
        ['15:00 – 15:15', 'Chọn phôi và lên ý tưởng', 'Chọn phôi gốm mộc có sẵn như bình, đĩa, cốc và phác thảo họa tiết.'],
        ['15:15 – 15:30', 'Làm quen với màu và cọ', 'Học cách sử dụng cọ vẽ, pha màu men và vẽ lam với màu xanh cobalt đặc trưng.'],
        ['15:30 – 16:45', 'Tự do sáng tạo', 'Trực tiếp phóng tác họa tiết lên sản phẩm trong không gian bật nhạc thiền nhẹ nhàng; vừa vẽ vừa nhâm nhi trà.'],
        ['16:45 – 17:00', 'Hoàn thiện', 'Chỉnh sửa nét vẽ, ký tên và bàn giao sản phẩm cho nghệ nhân đem nung.']
      ]
    },
    'tour-bat-trang': {
      description: 'Hành trình trọn vẹn kết hợp giữa du lịch văn hóa, ẩm thực địa phương và tự tay trải nghiệm chế tác gốm.',
      schedule: [
        ['09:00 – 10:15', 'Dạo bước làng cổ', 'Hướng dẫn viên đưa đoàn đi bộ qua các ngõ nhỏ tường gạch, thăm lò bầu cổ và nghe kể chuyện lịch sử làng nghề Bát Tràng.'],
        ['10:15 – 11:45', 'Chạm đất', 'Ghé thăm xưởng nghệ nhân và tham gia làm một sản phẩm gốm nhỏ trên bàn xoay với sự hỗ trợ của thợ.'],
        ['11:45 – 13:30', 'Ẩm thực làng nghề', 'Nghỉ ngơi và thưởng thức mâm cơm trưa đậm chất Bát Tràng, có món canh măng mực truyền thống.'],
        ['13:30 – 14:15', 'Chạm cọ', 'Tiếp tục trải nghiệm vẽ họa tiết lên một sản phẩm gốm nhỏ xinh để mang về làm kỷ niệm.'],
        ['14:15 – 15:00', 'Tự do khám phá', 'Di chuyển ra chợ Gốm Bát Tràng, mua sắm quà tặng và kết thúc hành trình.']
      ]
    }
  };

  const schedule = [
    { date: '2026-10-12', ws: 'cham-lan-dau', time: '09:00 – 11:30', left: 3 },
    { date: '2026-10-18', ws: 've-gom', time: '14:00 – 16:00', left: 5 },
    { date: '2026-10-25', ws: 'men-hoa-bien', time: '09:00 – 12:00', left: 2 },
    { date: '2026-11-02', ws: 'tour-bat-trang', time: '08:00 – 14:00', left: 8 },
    { date: '2026-11-08', ws: 'cham-lan-dau', time: '09:00 – 11:30', left: 8 },
    { date: '2026-11-15', ws: 've-gom', time: '14:00 – 16:00', left: 10 }
  ];

  const courses = [
    { id: 'nan-gom-co-ban', name: 'Khóa học nặn gốm cơ bản', level: 'Người mới', length: '8 buổi · 2 buổi/tuần', fee: 3200000, teacher: 'Cô Lê Thu Hà', teacherRole: 'Nghệ nhân nặn tay, 15 năm kinh nghiệm', cert: 'Chứng nhận hoàn thành khóa nặn gốm cơ bản', path: ['Làm quen đất và dụng cụ', 'Kỹ thuật nặn dải, nặn bản', 'Chuốt trên bàn xoay cơ bản', 'Phủ men và hoàn thiện tác phẩm'], seed: 0 },
    { id: 'tao-hinh-nang-cao', name: 'Khóa học tạo hình nâng cao', level: 'Đã học cơ bản', length: '12 buổi · 2 buổi/tuần', fee: 5600000, teacher: 'Thầy Nguyễn Đức Hiền', teacherRole: 'Nghệ nhân tạo hình, từng triển lãm tại Hà Nội', cert: 'Chứng nhận hoàn thành khóa tạo hình nâng cao', path: ['Chuốt chi tiết dáng bình, ấm', 'Ghép phần: tay cầm, vòi, nắp', 'Đắp nổi và chạm khắc', 'Dự án cá nhân và triển lãm nhỏ'], seed: 1 },
    { id: 've-men', name: 'Khóa học vẽ men', level: 'Mọi trình độ', length: '6 buổi · 1 buổi/tuần', fee: 2600000, teacher: 'Cô Phạm Mai Anh', teacherRole: 'Họa sĩ men lam, giảng viên mỹ thuật', cert: 'Chứng nhận hoàn thành khóa vẽ men', path: ['Nhận biết men và nền gốm', 'Nét, mảng và cách pha màu', 'Vẽ lam và men dưới lớp phủ', 'Bộ sản phẩm hoàn chỉnh'], seed: 2 },
    { id: 'tre-em', name: 'Khóa học dành cho trẻ em (7–12 tuổi)', level: 'Trẻ em', length: '8 buổi · cuối tuần', fee: 2400000, teacher: 'Cô Vũ Thanh Lam', teacherRole: 'Giáo viên mỹ thuật thiếu nhi', cert: 'Chứng nhận và album ảnh tác phẩm', path: ['Chơi với đất: nắn, véo, cuộn', 'Nặn con vật và đồ dùng nhỏ', 'Tô men và học về lửa nung', 'Triển lãm mini cho bố mẹ'], seed: 3 },
    { id: 'gia-dinh-cuoi-tuan', name: 'Khóa học gia đình cuối tuần', level: 'Cả nhà', length: '4 cuối tuần · 2 giờ/buổi', fee: 3600000, teacher: 'Thầy Đỗ Quang Huy', teacherRole: 'Nghệ nhân, hướng dẫn nhóm gia đình', cert: 'Chứng nhận gia đình và bộ gốm kỷ niệm', path: ['Cả nhà cùng nặn một chiếc bát', 'Mỗi người một món riêng', 'Vẽ và phủ men cùng nhau', 'Nhận bộ gốm cả nhà'], seed: 4, note: 'Học phí cho 1 gia đình (2 người lớn + 1 trẻ em)' }
  ];

  const courseBenefits = [
    'Thực hành không giới hạn: sử dụng studio miễn phí ngoài giờ học, gồm bàn xoay, dụng cụ cơ bản và không gian luyện tập.',
    'Ưu đãi nội bộ: giảm 10% khi mua sản phẩm thủ công tại Tiệm Gốm và khi đăng ký workshop ngắn hạn.',
    'Hỗ trợ nung đốt: miễn phí nung tác phẩm trong giáo trình; ưu đãi chi phí nung cho sản phẩm tự làm thêm ngoài giờ.'
  ];
  const courseDetails = {
    'nan-gom-co-ban': {
      duration: '8 buổi, 2,5 giờ/buổi; học 1–2 buổi/tuần.',
      audience: 'Người chưa từng làm gốm, muốn xây dựng nền tảng kỹ thuật vững chắc.',
      path: [
        'Làm quen: tìm hiểu đặc tính các loại đất sét và công dụng của từng loại dụng cụ chuyên hình.',
        'Kỹ thuật thủ công: thành thạo nặn dải (cuộn đất) và nặn bản (cán phẳng) để tạo hình tự do không cần máy.',
        'Bàn xoay cơ bản: kiểm soát tốc độ, định tâm đất và chuốt các dáng cơ bản như trụ, vát.',
        'Hoàn thiện: phủ men đều tay và xử lý bề mặt trước khi đưa vào lò nung.'
      ]
    },
    'tao-hinh-nang-cao': {
      duration: '12 buổi, 3 giờ/buổi; yêu cầu thực hành nhiều trên lớp.',
      audience: 'Học viên đã qua lớp cơ bản hoặc có kinh nghiệm, muốn tiến tới chế tác gốm nghệ thuật.',
      path: [
        'Chuốt dáng khó: luyện chuốt thành mỏng, tạo dáng bình lớn và dáng ấm trà phức tạp.',
        'Kỹ thuật ghép phần: canh độ ẩm của đất để vuốt, ghép quai, vòi ấm và làm nắp đậy khít, cân đối.',
        'Trang trí bề mặt: đắp nổi họa tiết 3D và chạm khắc chìm trên phôi gốm thô.',
        'Dự án cá nhân: lên ý tưởng, hoàn thiện bộ tác phẩm riêng để trưng bày trong triển lãm nhỏ cuối khóa tại studio.'
      ]
    },
    've-men': {
      duration: '6 buổi, 2,5 giờ/buổi.',
      audience: 'Người yêu thích hội họa, màu sắc và sự tỉ mỉ trên nền gốm.',
      path: [
        'Lý thuyết men: phân biệt các loại men, hiểu tương tác giữa màu vẽ và nền gốm đất trắng, đất đỏ.',
        'Thực hành cọ: luyện nét thanh, nét đậm, kỹ thuật đi mảng và pha màu men không bị xỉn sau khi nung.',
        'Vẽ truyền thống và hiện đại: thực hành vẽ lam cổ điển và vẽ men dưới lớp phủ (underglaze).',
        'Tốt nghiệp: hoàn thiện trang trí cho một bộ sản phẩm trọn vẹn như bộ trà hoặc bộ bát đĩa.'
      ]
    },
    'tre-em': {
      duration: '6 buổi, 1,5–2 giờ/buổi; phù hợp với thời gian tập trung của trẻ.',
      audience: 'Trẻ em từ 7–12 tuổi. Người hướng dẫn gồm giáo viên gốm và trợ giảng sư phạm.',
      path: [
        'Chơi với đất: kích thích xúc giác qua các bài tập nắn, véo và cuộn đất sét trực quan.',
        'Tạo hình vui nhộn: nặn các con vật yêu thích hoặc đồ dùng học tập nhỏ xinh.',
        'Sắc màu và lửa: tự do tô men màu, nghe kể chuyện về cách lò nung biến đất thành gốm.',
        'Triển lãm mini: thuyết trình tác phẩm trước bố mẹ trong buổi tổng kết khóa học.'
      ]
    },
    'gia-dinh-cuoi-tuan': {
      duration: '4 buổi, 2 giờ/buổi; học sáng hoặc chiều thứ Bảy, Chủ Nhật.',
      audience: 'Gia đình muốn gắn kết và cùng tạo ra những món đồ dùng chung ý nghĩa. Học phí áp dụng cho 2 người lớn và 1 trẻ em.',
      path: [
        'Dấu ấn chung: cả nhà nhào đất, nặn một chiếc bát lớn đựng hoa quả hoặc salad mang biểu tượng gia đình.',
        'Dấu ấn riêng: mỗi thành viên tự tạo hình một món đồ cá nhân như cốc uống nước hoặc đĩa ăn bánh.',
        'Đồng điệu màu sắc: cả nhà cùng chọn màu, vẽ họa tiết và phủ men cho sản phẩm.',
        'Thành quả: nhận bộ gốm gia đình độc bản lưu giữ kỷ niệm của một cuối tuần trọn vẹn.'
      ]
    }
  };

  const village = [
    {
      id: 'ky-su-bat-trang',
      sec: 'lang',
      tag: 'Bát Tràng',
      tags: ['Bát Tràng', 'Men gốm', 'Hồn đất', 'Di sản', 'Tiếp nối'],
      title: 'Ký sự Bát Tràng: Từ ngọn lửa lò đến hồn cốt di sản',
      excerpt: 'Nằm yên bình bên dòng sông Hồng nặng phù sa, Bát Tràng không chỉ là một làng nghề cổ rực rỡ sắc màu di sản. Qua bao thăng trầm thời cuộc, ngọn lửa trong những gian lò nơi đây vẫn rực cháy, thổi hồn vào đất và tiếp nối dòng chảy nghệ thuật ngàn năm.',
      lead: 'Nằm yên bình bên dòng sông Hồng nặng phù sa, Bát Tràng không chỉ là một làng nghề cổ rực rỡ sắc màu di sản. Qua bao thăng trầm thời cuộc, ngọn lửa trong những gian lò nơi đây vẫn rực cháy, thổi hồn vào đất và tiếp nối dòng chảy nghệ thuật ngàn năm.',
      read: 8,
      date: '2026-10-06',
      author: 'Minh Thư',
      views: 4820,
      seed: 0,
      thumb: { src: 'assets/1.2.png', alt: 'Người nghệ nhân chăm chú làm gốm' },
      body: [],
      sections: [
        {
          title: 'Cội nguồn ngọn lửa và tinh hoa men gốm cổ',
          body: [
            'Lịch sử Bát Tràng khởi nguồn từ thế kỷ XIV, khi năm dòng họ làm gốm lớn vùng Ninh Bình cùng dòng họ Nguyễn vùng Bắc Ninh tìm đến vùng đất bãi bồi bên sông Hồng để lập nghiệp. Kể từ đó, ngọn lửa lò trở thành linh hồn thiêng liêng của cả làng nghề. Thời xưa, khi công nghệ chưa phát triển, việc giữ lửa trong các lò bầu, lò rồng đun bằng củi và than là một nghệ thuật tuyệt kỹ đòi hỏi sự nhạy cảm phi thường. Người thợ nung gốm phải thức canh lò suốt nhiều ngày đêm, chỉ cần nhìn màu sắc của ngọn lửa tỏa ra từ ô xem lửa hay ngửi mùi khói nung là có thể đo chính xác nhiệt độ bên trong lên tới hơn 1.200 độ C.',
            'Sự giao hòa kỳ diệu giữa đất, nước và lửa dưới sự điều khiển tinh tế đó đã khai sinh ra những dòng men cổ trứ danh. Men ngọc trong đục như ngọc bích, men lam trầm mặc sâu thẳm với sắc xanh quý phái, và đặc biệt là men rạn - dòng men độc bản tạo nên những vết rạn tơ tự nhiên như mạng nhện trên bề mặt xương gốm. Mỗi sản phẩm gốm cổ Bát Tràng không chỉ đơn thuần là vật dụng sinh hoạt hay đồ thờ tự, mà còn chứa đựng cả triết lý nhân sinh, tri thức dân gian và chiều sâu tâm hồn người Việt qua nhiều thế kỷ chế tác thủ công tỉ mỉ.'
          ],
          images: [
            { src: 'assets/bat-trang-dong-men.png', alt: 'Infographic về các dòng men truyền thống Bát Tràng', caption: 'Các dòng men truyền thống Bát Tràng.', afterParagraph: 2 }
          ]
        },
        {
          title: 'Sự chuyển mình hiện đại và hành trình giữ trọn "hồn đất"',
          body: [
            'Bước sang thời đại công nghiệp hóa, Bát Tràng đứng trước bài toán sinh tồn gay gắt giữa bảo tồn và phát triển. Việc chuyển đổi từ các lò nung than bốc khói đen sang lò nung gas và điện tự động hóa đã đánh dấu một bước ngoặt quan trọng trong lịch sử làng nghề. Công nghệ hiện đại không chỉ giúp kiểm soát nhiệt độ lò chính xác đến từng độ C, giảm thiểu tối đa tỷ lệ gốm hỏng, mà còn góp phần bảo vệ môi trường sinh thái cho vùng ven đô.',
            'Tuy nhiên, dù máy móc có hiện đại đến đâu, cốt lõi của gốm Bát Tràng vẫn là "hồn đất"; không thể thay thế. Các nghệ nhân đã khéo léo kết hợp kỹ thuật nung tân tiến với nghệ thuật tạo hình độc đáo, cho ra đời những kiểu dáng gốm ứng dụng hiện đại, gốm nghệ thuật đắp nổi phức tạp hay gốm phong thủy tinh xảo.',
            'Những đường nét mộc mạc, chất đất sét cao lương dẻo mịn cùng những mảng màu men ngẫu hứng qua phản ứng hóa học ở nhiệt độ cao vẫn giữ nguyên vẻ đẹp nguyên sơ đầy mê hoặc. Sự giao thoa giữa tư duy mỹ thuật hiện đại và tri thức dân gian truyền thống đã giúp gốm Bát Tràng thoát khỏi chiếc áo cũ kỹ, trở nên thanh lịch hơn, phù hợp với không gian sống đương đại mà vẫn không làm mất đi căn tính văn hóa vốn có.'
          ],
          images: [
            { src: 'assets/1.2.png', alt: 'Người nghệ nhân chăm chú làm gốm', caption: 'Người nghệ nhân chăm chú làm gốm. Nguồn: sưu tầm', afterParagraph: 2 },
            { src: 'assets/1.3.png', alt: 'Sản phẩm gốm Bát Tràng tinh xảo', caption: 'Sản phẩm gốm tinh xảo. Nguồn: battrangceramics.com', afterParagraph: 3 }
          ]
        },
        {
          title: 'Dòng chảy tiếp nối và khát vọng vươn tầm thế giới',
          body: [
            'Sức sống bền bỉ của Bát Tràng hôm nay nằm ở chính lực lượng nghệ nhân trẻ - những con người sinh ra và lớn lên trong tiếng thì thầm của đất sét. Được đào tạo bài bản từ các trường đại học mỹ thuật trong và ngoài nước, họ trở về quê hương mang theo luồng sinh khí mới, chủ động áp dụng công nghệ số, thương mại điện tử và thiết kế sáng tạo vào sản xuất. Không dừng lại ở thị trường nội địa, các thế hệ thợ trẻ đã tự tin đưa gốm Bát Tràng vươn ra quốc tế, xuất khẩu sang Nhật Bản, Châu Âu, Mỹ và hiện diện trong nhiều triển lãm nghệ thuật đương đại lớn.',
            'Bên cạnh đó, Bát Tràng còn chuyển mình thành một điểm đến du lịch văn hóa trải nghiệm đầy thu hút. Du khách có thể bắt đầu hành trình khám phá không giới hạn qua trải nghiệm không gian VR 360° Toàn cảnh Làng cổ và Trung tâm Tinh hoa Làng nghề Việt, trước khi trực tiếp ghé thăm các không gian bảo tàng gốm kiến trúc độc đáo và xưởng gốm truyền thống - nơi bạn có thể tự tay nhào nặn đất, quay bàn xoay và vẽ hoa văn.',
            'Qua từng trải nghiệm thực tế lẫn không gian số, câu chuyện về lịch sử và quy trình làm gốm kỳ công được lan tỏa sinh động đến bạn bè quốc tế cũng như thế hệ trẻ Việt Nam. Việc gắn kết di sản văn hóa với du lịch hiện đại không chỉ mang lại giá trị kinh tế bền vững mà còn tiếp thêm niềm tự hào, giúp ngọn lửa tình yêu nghề gốm chảy mãi trong cộng đồng làng cổ.',
            'Ngọn lửa của Bát Tràng chưa bao giờ chỉ cháy trong những lò nung đỏ lửa. Qua bao thế kỷ, ngọn lửa ấy đã trở thành biểu tượng của lòng yêu nghề, sự bền bỉ và niềm tự hào được truyền từ thế hệ này sang thế hệ khác. Mỗi vòng xoay của bàn gốm, mỗi lớp men được phủ lên đều là minh chứng cho sự tiếp nối giữa truyền thống và sáng tạo, giữa ký ức của cha ông và khát vọng của hôm nay. Để rồi, khi những mẻ gốm mới vẫn lần lượt ra lò, hành trình của Bát Tràng tiếp tục được viết tiếp, lặng lẽ nhưng bền bỉ, mang theo hồn cốt của đất Việt vươn xa cùng thời gian.'
          ],
          embed: {
            src: 'https://gombattrang.fairs.vn/?startscene=0&startlookat=-41.81,22.91,135.97,0,0;',
            title: 'Không gian VR 360° Trung tâm Tinh hoa Làng nghề Việt',
            caption: '',
            linkLabel: 'Trung tâm tinh hoa làng nghề Việt',
            afterParagraph: 2
          },
          images: [
            { src: 'assets/1.4.png', alt: 'Tác phẩm tại Triển lãm Gốm nghệ thuật Việt Nam 2021', caption: 'Hình ảnh tại buổi Triển lãm Gốm nghệ thuật Việt Nam 2021 với tác phẩm của nhiều tác giả trên cả nước. Nguồn: VOV', afterParagraph: 1 }
          ]
        }
      ]
    },
    { id: 'chu-dau', sec: 'lang', tag: 'Gốm Việt', title: 'Hồn đất Việt qua nghìn năm sử gốm', excerpt: 'Từ men trắng ngà thời Lý đến hoa lam Chu Đậu và những sáng tạo hôm nay, mỗi hiện vật gốm lưu giữ một phong thái của người Việt.', read: 12, date: '2026-10-03', author: 'Hoàng Anh', views: 3960, seed: 1,
      thumb: { src: 'assets/2.1.jpg', alt: 'Tượng cặp đôi Kinnara - Kinnari trên gốm thời Lý', fit: 'contain' },
      tags: ['Gốm Việt', 'Nghìn năm', 'Sử Việt', 'Triều đại'],
      lead: 'Lịch sử gốm Việt không chỉ được nhào nặn bởi đất và lửa, mà còn lưu giữ tính cách người Việt qua từng triều đại. Từ nét men ngà thời Lý đến gốm Chu Đậu hay các tác phẩm hiện đại, mỗi hiện vật là một mắt xích mở ra dòng chảy văn hóa nghìn năm.',
      body: [],
      sections: [
        {
          title: 'Từ khí phách hào hùng đến vẻ đẹp thanh cao',
          body: [
            'Đứng trước chiếc ấm cánh sen gốm hoa nâu thời Lý (1009 - 1225) chỉ nhỉnh hơn nắm tay, điều khiến người ta kinh ngạc không hẳn là tuổi đời thiên niên kỷ của nó, mà là vẻ đẹp gần như đối nghịch với sự nhỏ bé ấy.',
            'Quanh vai ấm, những cánh sen kép dài, mảnh, hơi vểnh, xếp lớp như đóa hoa vừa hé nở. Men trắng ngà đã nhuốm màu thời gian, vài chỗ bong để lộ cốt phấn, nhưng cái thanh nhã vẫn còn vẹn nguyên.',
            'Ngược dòng lịch sử về triều Lý, bối cảnh ra đời chiếc ấm là Đại Cồ Việt ở buổi đầu độc lập sau hơn nghìn năm Bắc thuộc. Đất nước thái bình, đời sống vật chất viên mãn nên các vật dụng từ gốm không chỉ đáp ứng nhu cầu công năng, mà thẩm mỹ cũng ở một giai tầng khác. Gốm Việt chính thức bước vào giai đoạn thăng hoa rực rỡ.',
            'Gốm men trắng ngà, men ngọc, hoa nâu hiện diện trên bát, đĩa, ấm, thạp, kỷ phấn và nhiều vật phẩm nhật dụng, tế tự. Hoa sen là đề tài trang trí chủ đạo, bên cạnh hình ảnh quen thuộc khác là lá đề. Trên một số hiện vật còn có hình tượng rồng gấp khúc đặc trưng thời Lý, chim anh vũ, cặp đôi Kinnara - Kinnari. Những hình tượng này minh chứng cho sự hòa quyện giữa tín ngưỡng (Phật giáo), mỹ cảm bản địa với ảnh hưởng văn hóa từ bên ngoài (Champa).',
            'Điều đặc biệt là người thợ gốm không sao chép nguyên bản những gì dung nạp lên gốm. Họ biến đổi chúng theo một phong cách mới rất riêng. Rồng trở nên mềm mại nhưng vẫn uy nghi, hoa sen thanh khiết, chim anh vũ gợi sự thông tuệ. Những hình tượng ấy khi đưa vào nét gốm đã tạo nên thế giới thu nhỏ của quyền lực, tín ngưỡng và đời sống tinh thần Đại Việt.',
            'Nếu vẻ đẹp thời Lý giống một cánh sen thanh mảnh thì đến thời Trần, cốt gốm trở nên dày hơn, hình khối lớn hơn. Những đường khắc bớt đi sự cầu kỳ, trở nên mạnh và phóng khoáng. Đời sống thực tràn vào gốm qua các đề tài trang trí với chim, cá, hoa lá, muông thú, cảnh săn bắn. Đặc biệt trên những chiếc bình vôi - vật dụng gắn chặt với tục ăn trầu của người Việt - xuất hiện cả cảnh đấu vật.',
            'Hai đô vật ghì lấy nhau, thân hình căng lên trong một thế đối kháng. Đấu vật vốn là trò chơi hội làng, nhưng trong thời đại thượng võ, đó còn là nơi tuyển lựa những trai tráng khỏe mạnh. Bởi vậy, cảnh đấu vật trên một chiếc bình vôi không đơn thuần là trang trí. Nó giống một lát cắt đời sống được tôi nung trong lửa: hội hè, làng xóm, sức vóc con người và khí thế của một dân tộc vừa bước qua những cuộc chiến khốc liệt. Từ cánh sen mảnh như thơ của thời Lý đến hai đô vật rắn chắc thời Trần, chỉ vài thế kỷ, gốm Việt đã đổi khác đến kinh ngạc.'
          ],
          images: [
            { src: 'assets/2.3.jpg', alt: 'Ấm cánh sen gốm hoa nâu thời Lý', caption: 'Ấm cánh sen thời Lý, bảo vật quốc gia, hiện ở Bảo tàng Quảng Ninh. Ảnh: Phong An', afterParagraph: 5 },
            { src: 'assets/2.1.jpg', alt: 'Tượng cặp đôi Kinnara - Kinnari trên gốm thời Lý', caption: 'Hình tượng cặp đôi Kinnara - Kinnari trong văn hóa Hindu trên gốm thời Lý. Ảnh: Phong An', afterParagraph: 4 },
            { src: 'assets/2.2.jpg', alt: 'Tước gốm hoa nâu trang trí chim anh vũ thời Lý', caption: 'Tước gốm hoa nâu chim anh vũ, thời Lý, hình tượng ẩn dụ cuộc đời tiền kiếp của đức Phật. Ảnh: Phong An', afterParagraph: 4 },
            { src: 'assets/2.4.jpg', alt: 'Thạp gốm hoa nâu thời Trần', caption: 'Thạp gốm hoa nâu thời Trần, hình tượng người, chim, hoa được đưa vào trang trí. Ảnh: Phong An', afterParagraph: 6 },
            { src: 'assets/2.5.jpg', alt: 'Bình vôi thời Trần có quai tạo hình cảnh đấu vật', caption: 'Bình vôi thời Trần với cảnh đấu vật tạo thành quai bình đầy sinh động. Ảnh: Phong An', afterParagraph: 7 }
          ]
        },
        {
          title: 'Hành trình ra biển lớn',
          body: [
            'Câu chuyện ấy nằm dưới đáy biển Cù Lao Chàm. Hơn 500 năm trước, con tàu buôn chở đầy gốm rời bến, hướng ra biển. Không ai biết chính xác nó đã gặp chuyện gì giữa hành trình, chỉ biết con tàu không cập bến bình an. Nó chìm xuống vùng biển ngoài khơi Hội An, mang theo cả kho hàng nằm im dưới bùn cát nhiều thế kỷ.',
            'Đến những năm 1990, khi dấu tích con tàu được phát hiện, hàng chục vạn hiện vật và mảnh vỡ lần lượt trở lại ánh sáng: Bình tì bà, ấm, hộp, bát, đĩa, lọ nhỏ, tượng người… Nhiều món còn nguyên sắc lam với hoa lá, chim, cá, muông thú, con người, phong cảnh được vẽ bằng những nét bút khoáng đạt. Một tai họa hàng hải lại trở thành “kho lưu trữ” vô giá của lịch sử.',
            'Tàu đắm Cù Lao Chàm góp phần trả lời câu hỏi: Đại Việt cách nay hơn năm thế kỷ đã đứng ở đâu trên bản đồ gốm sứ thế giới? Trong dòng chảy gốm Việt sau thời Bắc thuộc, đến thời Lê sơ, đặc biệt trong thế kỷ 15, gốm Việt bước vào giai đoạn phát triển rực rỡ. Nếu Lý - Trần để lại dấu ấn với men trắng ngà, men ngọc, hoa nâu, thì một sắc màu khác bắt đầu chiếm lĩnh bề mặt gốm. Đó là hoa lam.',
            'Trên nền men sáng, người thợ dùng bút vẽ màu lam trực tiếp lên cốt gốm. Có nét thanh mảnh như mực trên giấy, có đường phóng mạnh, sắc lam khi đặc quánh, lúc loãng nhẹ, tạo nên những chuyển động rất khác với kỹ thuật khắc, tỉa của các thời kỳ trước. Chất họa của gốm hoa lam được nhận định là phong phú, đa dạng, biến ảo diệu kỳ so với các dòng gốm khác trên đất Việt.',
            'Hoàn cảnh ra đời của gốm hoa lam đúng thời cơ đặc biệt. Từ cuối thế kỷ 14, nhà Minh thực hiện chính sách “hải cấm”, hạn chế hoạt động giao thương trên biển. Khi nguồn hàng gốm sứ Trung Hoa ra thị trường bên ngoài bị gián đoạn, khoảng trống thương mại xuất hiện. Các trung tâm gốm khu vực có cơ hội chen chân vào mạng lưới buôn bán quốc tế và gốm Việt đã nắm lấy cơ hội ấy.',
            'Những lò gốm ở Hải Dương cùng nhiều trung tâm sản xuất khác bước vào một thời kỳ sôi động. Nhu cầu của thương nhân phương xa, kỹ thuật tích lũy từ nhiều thế kỷ và những cuộc giao lưu nghề nghiệp tạo nên một thế hệ sản phẩm mới. Trong đó, Chu Đậu trở thành cái tên tiêu biểu.',
            'Điều đáng chú ý là gốm hoa lam Chu Đậu không chỉ đẹp bởi kỹ thuật. Trên những chiếc bình, ấm, đĩa, hộp còn lại đến hôm nay, người ta bắt gặp cả một thế giới sống động: hoa sen, hoa cúc, chim, cá, hươu, cây cỏ, mây nước, người chèo thuyền, các con linh thú… Những nét bút không quá câu nệ vào khuôn mẫu, thậm chí có vẻ hồn nhiên, nhưng chính sự phóng khoáng ấy tạo nên thần thái rất riêng.',
            'Và ở một số tuyệt phẩm, người thợ Đại Việt còn đưa người xem đi xa hơn khỏi làng quê của mình. Một chiếc bình hoa lam nổi tiếng đang lưu giữ tại Bảo tàng Văn minh châu Á ở Singapore là ví dụ. Trên thân bình xuất hiện hai thủy quái kỳ dị trong tư thế đuổi vờn giữa sóng nước - hình tượng liên hệ với Makara và Timingila của huyền thoại Hindu.',
            'Makara hiện lên với dáng dữ dằn của kẻ săn mồi. Timingila căng vây giữa đại dương. Những đường lam khi đậm, khi nhạt chạy quanh thân bình khiến cả cuộc truy đuổi tưởng như không ngừng chuyển động. Vì sao hình tượng xa lạ ấy hiện hữu trên gốm cổ Đại Việt? Chính những chuyến tàu buôn là một phần lời giải. Gốm đi ra thế giới, nhưng thế giới cũng đi ngược vào các lò gốm. Thương nhân mang theo đơn hàng, thị hiếu, hình mẫu và câu chuyện từ những vùng đất khác. Người thợ Việt tiếp nhận chúng, rồi bằng tay nghề và cảm quan của mình, biến đổi chúng vào đất và men.',
            'Sau Chu Đậu, gốm Việt không ngừng lại. Thời Mạc xuất hiện những chân đèn, lư hương, đồ thờ mang phong thái riêng. Đến Lê Trung Hưng, những dòng men màu - đặc biệt là xanh rêu, tiếp tục mở thêm một diện mạo khác. Rồi qua các thế kỷ sau, các làng nghề như Bát Tràng, Phù Lãng, Thanh Hà, Châu Ổ, Gò Sành… vẫn đỏ lửa, đưa gốm trở lại gần hơn với nhu cầu thường nhật của đời sống. Đến hôm nay, những vẻ đẹp từng làm rạng danh gốm Việt thời quá vãng được tiếp nối không chỉ ở làng nghề mà còn ở một lớp nghệ sĩ mới, họ bắt đầu đối thoại với người thợ vô danh của nghìn năm trước.'
          ],
          images: [
            { src: 'assets/2.6.jpg', alt: 'Bình gốm hoa lam Chu Đậu hồi hương từ Singapore', caption: 'Bình gốm hoa lam Chu Đậu, một hiện vật quý hồi hương từ Singapore. Ảnh: Phong An', afterParagraph: 3 },
            { src: 'assets/2.7.jpg', alt: 'Bình gốm hoa lam Chu Đậu trang trí hoa văn', caption: 'Bình gốm Chu Đậu, thời kỳ đỉnh cao gốm Việt ở phong cách trang trí trên gốm. Ảnh: Phong An', afterParagraph: 7 },
            { src: 'assets/2.8.jpg', alt: 'Mâm bồng gốm Chu Đậu trang trí hoa văn', caption: 'Mâm bồng gốm Chu Đậu, quý hiếm bởi sự toàn vẹn và kỹ thuật chế tác cao. Ảnh: Phong An', afterParagraph: 7 },
            { src: 'assets/2.9.jpg', alt: 'Chân đèn gốm thời Mạc', caption: 'Chân đèn thời Mạc, một tạo hình độc đáo của gốm Việt cổ. Ảnh: Phong An', afterParagraph: 10 },
            { src: 'assets/2.10.jpg', alt: 'Lư hương gốm men xanh rêu thời Lê Trung Hưng', caption: 'Lư hương với màu men xanh rêu đặc trưng của thời Lê Trung Hưng. Ảnh: Phong An', afterParagraph: 10 },
          ]
        },
        {
          title: 'Nguồn mạch tiếp nối',
          body: [
            'Tiếp nối gốm Việt không đồng nghĩa với việc tái tạo lại một chiếc ấm thời Lý, một thạp hoa nâu thời Trần hay cố tạo ra một Chu Đậu thứ hai. Nếu chỉ lặp lại hình dáng cũ, người làm gốm dễ trở thành kẻ “ăn mày di sản”. Điều đáng ghi nhận hơn đang diễn ra trong những xưởng gốm hôm nay là sự định hình một ngôn ngữ mới trên nền tảng gốm Việt, khi một lớp họa sĩ, nghệ sĩ tìm về đất để tiếp biến với những gì cha ông để lại.',
            'Trịnh Vũ Hiếu chọn hoa nâu Lý - Trần làm điểm khởi đầu, rồi hoa lam. Từ một nhà thiết kế nội thất, họa sĩ trừu tượng, chuyển sang gốm, anh mất gần 2 năm thử nghiệm đất, men, lửa. Cốt gốm lấy từ Bát Tràng, men sử dụng những nguyên liệu tự nhiên như cao lanh, đất đá, vỏ sò… nhưng mục đích không phải phục chế nguyên bản màu men nghìn năm trước. Hiếu tìm lại cái duyên của hoa nâu, hoa lam rồi đưa lên đó tử đằng, anh túc, diên vỹ, lan, dã quỳ… bằng nét khắc và lối phủ men khoáng đạt. “Điều tôi muốn là phục dựng lại nét duyên của hoa nâu, hoa lam ở góc nhìn hiện đại”, anh nói.',
            'Họa sĩ Bùi Quốc Khánh lại bước vào gốm bằng một ngả hoàn toàn khác là tìm đến ký ức của tò he. Anh bóp, nặn, vê, vuốt đất, gần với cách người thợ dân gian dựng con giống, rồi đẩy chúng sang một thế giới rực rỡ, mạnh về hình khối và màu sắc. Trâu, thuyền rồng, rồng - phượng, người chèo thuyền… đi vào tác phẩm với tinh thần Pop-Art, vừa quen vừa lạ. Khánh lý giải rằng anh muốn thông qua gốm “tôn vinh giá trị nghề thủ công Việt Nam”, để khi nhìn vào tác phẩm, người xem vẫn nhận ra phía sau đó là chất Việt, nét Việt.',
            'Cũng đi tìm căn cốt ấy, nhưng Vũ Đức Hiếu chọn con đường gắn với di sản. Nhiều năm nghiên cứu văn hóa Mường giúp anh đưa ký ức về vùng đất, con người và đời sống bản địa vào gốm. Với “gốm Mường”, di sản không còn nhất thiết là một màu men hay kiểu dáng cổ, mà có thể là ký ức văn hóa được chuyển hóa thành hình khối của gốm.',
            'Ba nghệ sĩ, ba lối đi: một người tìm về hoa nâu, hoa lam; một người bắt đầu từ tò he; một người trở lại với văn hóa Mường. Họ không sao chép quá khứ, nhưng đều gặp nhau ở một điểm: Tìm trong di sản chất liệu tạo nên ngôn ngữ gốm Việt đương đại.',
            'Nhìn lại nghìn năm, đó cũng chính là cách gốm Việt từng tồn tại. Thời Lý tiếp nhận rồi biến đổi những ảnh hưởng bên ngoài; thời Trần đưa khí phách và đời sống vào đất; Chu Đậu theo thương thuyền gặp thế giới tạo nên một thời hoa lam rực rỡ.',
            'Hơn nghìn năm trôi qua, những người thợ làm nên nhiều tuyệt phẩm đã thành dĩ vãng, nhiều màu men đã thất truyền, nhiều lò gốm đã tắt. Nhưng đất vẫn còn, lửa vẫn cháy. Và mỗi khi người nghệ sĩ hôm nay đặt tay lên đất để tạo nên hình hài mới mà vẫn biết mình đến từ đâu, nguồn mạch gốm Việt lại được nối dài.'
          ],
          images: [
            { src: 'assets/2.11.jpg', alt: 'Nghệ sĩ gốm Trịnh Vũ Hiếu tại xưởng', caption: 'Nghệ sĩ gốm Trịnh Vũ Hiếu tại xưởng chế tác. Ảnh: Phong An', afterParagraph: 2 },
            { src: 'assets/2.12.jpg', alt: 'Họa sĩ Bùi Quốc Khánh bên tác phẩm gốm lấy cảm hứng từ tò he', caption: 'Họa sĩ Bùi Quốc Khánh và dòng gốm từ cảm hứng tò he. Ảnh: Phong An', afterParagraph: 3 },
            { src: 'assets/2.13.jpg', alt: 'Vũ Đức Hiếu và dòng gốm Mường mang ngôn ngữ tạo hình đương đại', caption: 'Vũ Đức Hiếu và dòng “gốm Mường” mang ngôn ngữ tạo hình đầy tính đương đại. Ảnh: Phong An', afterParagraph: 4 }
          ],
          quote: 'Lửa vẫn cháy trong lòng đất, và nguồn mạch gốm Việt vẫn vẹn nguyên qua muôn lớp thời gian.',
          quoteAfterParagraph: 6
        }
      ]
    },
    { id: 'phu-lang', sec: 'lang', tag: 'Phù Lãng', title: 'Đất nung Phù Lãng: Vẻ đẹp mộc mạc từ màu men da lươn huyền thoại', excerpt: 'Nằm bên dòng sông Cầu, gốm Phù Lãng cuốn hút bởi chất men da lươn thô mộc, độc bản, kết tinh từ tro gỗ và ngọn lửa lò củi truyền thống.', read: 8, date: '2026-09-29', author: 'Minh Thư', views: 3210, seed: 2,
      thumb: { src: 'assets/3.1.png', alt: 'Đất sét đỏ hồng được nghệ nhân Phù Lãng chọn làm gốm' },
      tags: ['Phù Lãng', 'Men Da lươn', 'mộc mạc', 'Hồn đất', 'Di sản'],
      lead: 'Nằm bên dòng sông Cầu, gốm Phù Lãng (Bắc Ninh) cuốn hút bởi chất men da lươn thô mộc, độc bản. Kết tinh từ tro gỗ và ngọn lửa lò củi truyền thống, sắc men ấy mang vẻ đẹp đằm thắm, lưu giữ trọn vẹn hồn đất cổ qua bao thế hệ.',
      body: [
        'Khác với sắc trắng mịn màng của gốm Bát Tràng hay nét trầm u thô mộc của Hương Canh, Phù Lãng chọn riêng cho mình dải màu ấm áp của đất sét đỏ tía vùng Quế Võ. Nơi đây, tiếng lách tách của lò củi nung đêm ngày vẫn thắp sáng lên những tạo tác mang đậm chất đời, chất quê.',
        'Sức hút vượt thời gian của gốm Phù Lãng không nằm ở những hình hoa văn thêu dệt cầu kỳ, mà nằm ở lớp áo men da lươn huyền thoại. Thứ sắc màu tưởng chừng thô ráp ấy lại ẩn chứa cả một câu chuyện nghệ thuật kết tinh từ đất, nước, lửa và đôi bàn tay tài hoa của nghệ nhân.'
      ],
      sections: [
        {
          title: 'Dấu ấn khởi nguyên từ đá, tro và bùn phù sa',
          body: [
            'Men da lươn Phù Lãng không ra đời từ các công thức hóa học hiện đại, mà là sự hòa quyện hoàn toàn từ nguyên liệu tự nhiên. Nghệ nhân dùng tro gỗ rừng, bùn phù sa sông Cầu và đá phù sỏi nghiền mịn trộn theo tỉ lệ gia truyền để tạo nên chất men cốt lõi.',
            'Lớp men thô ban đầu quét lên cốt gốm trông đục thô và giản dị. Nhưng chính sự kết hợp giữa các thành phần khoáng chất tự nhiên này đã chuẩn bị cho một cuộc biến hóa kỳ diệu khi bước vào ngọn lửa nung ngàn độ.'
          ],
          images: [
            { src: 'assets/3.1.png', alt: 'Đất sét đỏ hồng tại xưởng gốm Phù Lãng', caption: 'Màu đất sét đỏ hồng tạo nên gốm Phù Lãng được lấy từ vùng Thống Vát, Cung Khiêm. Ảnh: Xuân Phương/toquoc.vn', afterParagraph: 1 }
          ]
        },
        {
          title: 'Vũ điệu của lửa và sắc men da lươn độc bản',
          body: [
            'Điểm đặc trưng nhất làm nên tên tuổi gốm Phù Lãng chính là việc sử dụng lò nung đốt củi truyền thống. Ngọn lửa bùng cháy không đều, quyện cùng tro than rơi rụng tự nhiên trong lò đã biến từng sản phẩm thành một tác phẩm độc bản không bao giờ trùng lặp.',
            'Dưới nhiệt độ cao, lớp men chảy ra, quyện chặt vào xương đất đỏ rồi ngưng đọng lại thành những dải màu vàng nâu, nâu thẫm đến xám rêu. Lớp men ấy lóng lánh như dải da lươn vừa nhô lên từ bùn mịn, vừa bóng mờ sang trọng, vừa có độ sần tự nhiên của thời gian.',
            'Khi ánh sáng chiếu vào, mặt men phản chiếu những vệt ánh kim ẩn hiện sâu dưới bề mặt thô ráp. Độ nông sâu của sắc nâu, vệt chảy tràn của men trên thân bình, chiếc chum chính là dấu vết sinh động của ngọn lửa nhảy múa trong đêm.'
          ],
          images: [
            { src: 'assets/3.3.png', alt: 'Lò nung củi truyền thống tại làng gốm Phù Lãng', caption: 'Từ hàng trăm năm nay, sản phẩm gốm Phù Lãng vẫn được nung trong lò đốt củi. Ảnh: Xuân Phương/toquoc.vn', afterParagraph: 1 },
            { src: 'assets/3.4.png', alt: 'Người thợ Phù Lãng say sưa tạo hình cho sản phẩm gốm mỹ nghệ', caption: 'Người thợ Phù Lãng say sưa tạo hình cho sản phẩm gốm mỹ nghệ. Nguồn: baobacninh.vn', afterParagraph: 3 }
          ]
        },
        {
          title: 'Vẻ đẹp mộc mạc bền bỉ cùng thời gian',
          body: [
            'Cái đẹp của men da lươn Phù Lãng không gây ấn tượng bởi sự hoàn hảo không vết xước, mà chinh phục người xem bằng sự chân thật và gần gũi. Nhìn gần, bề mặt men da lươn Phù Lãng mang nét rần rần thô nhám rất riêng, không phẳng lì mà có độ nổi gân nhẹ của gốm sành nung củi. Sự thô nhám ấy không phải khuyết điểm, mà chính là chứng nhân cho hành trình nhào nặn công phu từ bàn tay nghệ nhân và sự tôi luyện khắt khe trong lòng lò lửa.',
            'Khi chạm tay vào bề mặt gốm Phù Lãng, người ta cảm nhận được cái ấm áp, rắn rỏi của đất quê hương hòa cùng độ mát lành của men gốm. Càng qua thời gian sử dụng, lớp men da lươn ấy lại càng bóng đầm, nước men như được “nuôi” cẩn thận để sẫm màu hơn, tôn lên vẻ cổ kính và trang nhã. Đó là vẻ đẹp càng ngắm càng say, một giá trị thẩm mỹ bền bỉ vượt qua mọi xu hướng thời đại.',
            'Ngày nay, dù đời sống hiện đại xuất hiện nhiều chất liệu mới, gốm men da lươn Phù Lãng vẫn giữ một vị trí trang trọng trong kiến trúc và đời sống nghệ thuật. Sắc men da lươn huyền thoại không chỉ đại diện cho kỹ thuật chế tác tài hoa, mà còn là kết tinh của mồ hôi, tâm huyết và tình yêu đất quê của bao thế hệ nghệ nhân Phù Lãng. Giữ gìn và phát triển màu men ấy chính là giữ lại khoảng trời ký ức, một nốt trầm di sản vô giá trong dòng chảy văn hóa gốm Việt.'
          ],
          images: [
            { src: 'assets/3.5.png', alt: 'Thành phẩm gốm Phù Lãng với màu men da lươn', caption: 'Thành phẩm hoàn thiện có độ chín sành, màu men chuẩn. Ảnh: Xuân Phương/toquoc.vn', afterParagraph: 2 }
          ],
          embed: {
            src: 'https://www.youtube.com/embed/3Mjatwce4FA?controls=0',
            watchUrl: 'https://www.youtube.com/watch?v=3Mjatwce4FA',
            title: 'Video về gốm Phù Lãng',
            caption: 'Video về gốm Phù Lãng',
            afterParagraph: 3
          }
        }
      ]
    },
    { id: 'bau-truc', sec: 'lang', tag: 'Bàu Trúc', title: 'Gốm Bàu Trúc: Kiệt tác di sản từ kỹ thuật chế tác độc đáo', excerpt: 'Không cần bàn xoay hay lò nung kín, người Chăm Bàu Trúc tạo hình gốm bằng tay và nung lộ thiên, giữ gìn một di sản độc bản.', read: 9, date: '2026-09-25', author: 'Lan Chi', views: 2780, seed: 3,
      thumb: { src: 'assets/4.2.png', alt: 'Nghệ nhân Bàu Trúc tạo hình gốm từ trên cao' },
      tags: ['Bàu Trúc', 'Vuốt tay xoay mông', 'Lò nung lộ thiên', 'Di sản Chăm'],
      lead: 'Không cần bàn xoay hay lò nung kín, gốm Chăm Bàu Trúc (Ninh Thuận) được tạo hình hoàn toàn bằng đôi bàn tay khéo léo và ngọn lửa nung lộ thiên. Sự mộc mạc, nguyên sơ ấy đã làm nên một di sản văn hóa phi vật thể độc bản vượt thời gian.',
      body: [
        'Nằm cách thành phố Phan Rang - Tháp Chàm khoảng 10km, làng gốm Bàu Trúc (thị trấn Phước Dân, huyện Ninh Phước) là không gian lưu giữ trọn vẹn mạch ngầm văn hóa Chăm cổ xưa. Khác biệt hoàn toàn với các trung tâm gốm khác, sản phẩm nơi đây được ví như “sinh thể sống” mang hơi thở và nhịp đập của người thợ chế tác. Nghệ thuật làm gốm truyền thống của người Chăm - gốm Bàu Trúc đã chính thức được UNESCO ghi danh vào Danh sách Di sản văn hóa phi vật thể cần bảo vệ khẩn cấp.'
      ],
      sections: [
        {
          title: 'Kỹ thuật “Vuốt bằng tay, xoay bằng mông” độc nhất vô nhị',
          body: [
            'Điểm độc đáo bậc nhất của gốm Bàu Trúc chính là nghệ nhân tuyệt đối không sử dụng bàn xoay cơ học. Thay vì để đất tự quay trên mâm, những người thợ Chăm sẽ đi giật lùi vòng quanh trụ đá hay bàn gỗ cố định để tạo hình cho khối đất sét. Mỗi bước chân di chuyển nhịp nhàng hòa cùng đôi bàn tay vuốt, chà, miết tỉ mỉ đã biến khối đất thô kệch thành những chiếc bình, chiếc xài có hình dáng mềm mại và cân đối một cách kinh ngạc.',
            'Kỹ thuật chế tác này đòi hỏi sự khéo léo, sức bền và cảm nhận không gian đỉnh cao từ bàn tay người phụ nữ. Họ dùng các dụng cụ vô cùng giản dị như vòng quơ (mảnh tre gọt mỏng), miếng vải ướt hay vỏ sò để chà láng bề mặt gốm. Chính sự tiếp xúc trực tiếp giữa làn da con người và chất sét mịn màng của sông Quao đã tạo nên độ đàn hồi đặc biệt, khiến mỗi tác phẩm đều chứa đựng dấu vân tay và tình cảm riêng biệt của người làm ra nó.'
          ],
          images: [
            { src: 'assets/4.2.png', alt: 'Nghệ nhân Bàu Trúc đang làm gốm', caption: 'Hình ảnh nghệ nhân làm gốm. Ảnh: Hoàng Nhung', afterParagraph: 2 },
            { src: 'assets/4.1.png', alt: 'Nghệ nhân Bàu Trúc tạo hình gốm bằng cách di chuyển quanh hòn kê', caption: 'Nghệ nhân tạo hình gốm Bàu Trúc bằng cách di chuyển xung quanh “hòn kê”. Nguồn: gomchampa.com', afterParagraph: 1 }
          ]
        },
        {
          title: 'Lò nung lộ thiên và vệt ám khói kỳ diệu',
          body: [
            'Không sở hữu những lò bầu hay lò đứng hiện đại, gốm Bàu Trúc được nung hoàn toàn lộ thiên giữa khoảng sân rộng bằng củi, rơm và bổi khô. Người ta xếp các sản phẩm gốm mộc thành từng lớp rồi phủ rơm rạ, củi gỗ lên trên để đốt lửa trực tiếp trong khoảng 4 đến 6 tiếng.',
            'Ngọn lửa tự do vây quanh dưới sự điều phối hướng gió và nhiệt độ của người thợ sẽ quyết định màu sắc cũng như độ chín sành của từng mảng gốm.',
            'Sau khi dỡ nung, gốm được phun ngay loại nước chiết xuất từ vỏ cây dái ngựa hoặc trái vông nia để tạo hiệu ứng “nhuộm màu” tự nhiên.',
            'Sự tác động nhiệt ngẫu nhiên kết hợp với hơi nước thảo mộc đã để lại trên bề mặt sản phẩm những vết ám khói huyền ảo với dải màu chuyển tiếp từ đỏ hồng, vàng cam, nâu xám đến đen tuyền. Không có hai chiếc bình Bàu Trúc nào giống hệt nhau, bởi ngọn lửa trời luôn hào phóng ban tặng cho mỗi tác phẩm một diện mạo độc nhất.'
          ],
          images: [
            { src: 'assets/4.4.png', alt: 'Quá trình nung gốm Bàu Trúc ngoài trời', caption: 'Quá trình nung gốm lộ thiên. Ảnh: Ngô Tuấn Kiệt', afterParagraph: 2 },
            { src: 'assets/4.5.png', alt: 'Các sản phẩm gốm Bàu Trúc có vệt cháy xém và loang màu sau khi nung', caption: 'Các vệt cháy xém, loang đen, nâu đặc trưng mang dấu ấn riêng biệt của gốm Bàu Trúc. Nguồn: gomchampa.com', afterParagraph: 4 }
          ]
        },
        {
          title: 'Sắc màu mộc mạc và hoa văn từ hơi thở đời sống',
          body: [
            'Hoa văn trên gốm Bàu Trúc không rực rỡ hay chạm khắc rườm rà mà đậm chất nguyên sơ, gần gũi với thiên nhiên nắng gió miền Nam Trung Bộ. Các nghệ nhân sử dụng những vật dụng đời thường như dải viền gợn sóng của vỏ sò, đầu tăm tre, hay thậm chí là nắp chai để dập hình răng cưa, đường dây hoa lá, vệt sóng nước lên đất mềm. Mỗi đường nét đều phảng phất triết lý nhân sinh và tín ngưỡng sùng bái thiên nhiên sâu sắc của cộng đồng người Chăm.',
            'Vẻ đẹp của gốm Bàu Trúc nằm ở sự mộc mạc, tính độc bản và giá trị văn hóa không thể thay thế bằng công nghệ công nghiệp. Những chiếc bình đắp nổi hình nữ thần, tháp Chăm hay chum nước thô nhám không chỉ là vật dụng sinh hoạt mà còn là tác phẩm nghệ thuật sống động. Mỗi sản phẩm gốm đều là một câu chuyện, một hơi thở của lịch sử và văn hóa, mang đến một giá trị thẩm mỹ vượt thời gian.'
          ],
          images: [
            { src: 'assets/4.6.png', alt: 'Các sản phẩm gốm Chăm Bàu Trúc tại thị trấn Phước Dân', caption: 'Các sản phẩm gốm Chăm làng Bàu Trúc tại thị trấn Phước Dân (Ninh Phước, Ninh Thuận). Ảnh: Nguyễn Thành - TTXVN', afterParagraph: 1 }
          ],
          embed: {
            src: 'https://www.youtube.com/embed/0Sy4CtcglC0?controls=0&start=1',
            watchUrl: 'https://www.youtube.com/watch?v=0Sy4CtcglC0&t=1s',
            title: 'Quá trình tạo thành sản phẩm Gốm Chăm Bàu Trúc',
            caption: 'Quá trình tạo ra Gốm Bàu Trúc – Từ bàn tay Chăm',
            afterParagraph: 2
          }
        }
      ]
    },
    { id: 'ban-tay-nghe-nhan', sec: 'lang', tag: 'Chu Đậu', title: 'Gốm Chu Đậu: Từ tro vỏ trấu đến kiệt tác gốm đạo Việt Nam', excerpt: 'Gốm Chu Đậu chinh phục giới mộ điệu bằng men tro vỏ trấu ngà ngọc, họa tiết hoa lam phóng khoáng và triết lý tạo hình đậm bản sắc Việt.', read: 9, date: '2026-09-21', author: 'Hoàng Anh', views: 2540, seed: 4,
      thumb: { src: 'assets/5.4.png', alt: 'Nghệ nhân tỉ mỉ trang trí sản phẩm gốm Chu Đậu' },
      tags: ['Chu Đậu', 'Men tro vỏ trấu', 'Hoa lam', 'Gốm đạo'],
      lead: 'Được ví như đỉnh cao gốm bác học Việt Nam, gốm Chu Đậu chinh phục giới mộ điệu bởi sắc men ngà ngọc từ tro trấu, họa tiết hoa lam phóng khoáng cùng giá trị di sản, thẩm mỹ Âm Dương vượt thời gian.',
      body: [
        'Tọa lạc tại vùng đất ngã ba sông thuộc huyện Nam Sách, tỉnh Hải Dương, làng gốm Chu Đậu từng trải qua thời kỳ hoàng kim rực rỡ từ thế kỷ XIV đến thế kỷ XVII. Khác với sự thô xốp mộc mạc của Phù Lãng hay tính nung đốt nguyên sơ của Bàu Trúc, Chu Đậu vươn tới vẻ đẹp đỉnh cao của dòng gốm bác học, chuyên dùng làm ngự dụng trong hoàng gia và xuất khẩu sang châu Âu, Trung Đông.'
      ],
      sections: [
        {
          title: 'Men tro vỏ trấu - Đỉnh cao sáng tạo của văn minh lúa nước',
          body: [
            'Điểm khác biệt độc nhất vô nhị làm nên linh hồn gốm Chu Đậu chính là lớp men tro nung được làm từ vỏ trấu nếp - bí quyết chế tác đã được xác lập kỷ lục Việt Nam. Nghệ nhân xưa chọn lọc vỏ trấu của hạt gạo nếp cái hoa vàng thuần túy, đem đốt thành tro mịn rồi hòa trộn với đất sét trắng và vôi củ theo tỷ lệ gia truyền khắt khe.',
            'Khi đi qua ngọn lửa nung ở nhiệt độ trên 1.200 độ C, hỗn hợp men tro này chảy tan mịn màng, thẩm thấu vào cốt đất để tạo nên dải màu ngà vàng trầm ấm tựa như màu rơm rạ ngày mùa. Lớp men không chỉ sở hữu độ rạn li ti tự nhiên quyến rũ mà còn vô cùng bền bỉ, giữ nguyên độ bóng mượt dù chìm đắm hàng trăm năm dưới đáy đại dương.',
            'Việc sử dụng phụ phẩm từ cây lúa nước để tạo nên chất men gốm đỉnh cao đã thể hiện tư duy thẩm mỹ mộc mạc mà vô cùng uyên bác của người thợ Việt. Lớp men ấy không cầu kỳ bóng bẩy, nhưng đong đầy hơi thở ấm áp, gần gũi của làng quê sông Hồng, biến mỗi vật dụng gốm thành một mảnh hồn dân tộc.'
          ],
          images: [
            { src: 'assets/5.1.png', alt: 'Đất sét trắng dùng làm gốm Chu Đậu', caption: 'Đất sét trắng từ vùng đất Lục thủy tứ trấn. Nguồn: chudauceramic.vn', afterParagraph: 1 },
          ]
        },
        {
          title: 'Nét vẽ hoa lam phóng khoáng và triết lý “Gốm Đạo”',
          body: [
            'Họa tiết trên gốm Chu Đậu được thể hiện hoàn toàn bằng phương pháp vẽ tay thủ công bằng oxit coban dưới lớp men trước khi đem nung ở nhiệt độ cao. Bằng ngọn bút lông mềm mại, người nghệ nhân đã đưa cả không gian làng quê Việt vào gốm qua hình ảnh hoa sen, hoa cúc, chim châu chấu, cá chép hay phong cảnh sơn thủy hữu tình. Mỗi nét vẽ vừa chứa đựng sự trau chuốt, tỉ mỉ của trình độ tay nghề bậc thầy, vừa toát lên tinh thần tự do, thư thái và đầy ngẫu hứng.',
            'Kỹ thuật khắc chìm, đắp nổi phối hợp nhịp nhàng với nét vẽ hoa lam tơ rạ đã thổi vào từng chiếc bình, chiếc đĩa một đời sống nội tâm sâu lắng và tràn đầy sinh khí.',
            'Tinh thần “gốm đạo” thể hiện rõ ở nét đẹp tĩnh lặng, không phô trương nhưng ẩn chứa chiều sâu triết lý nhân sinh quan sâu sắc. Thưởng lãm gốm Chu Đậu, người ta không chỉ ngắm nhìn một vật thể vô giác mà như đang đối thoại với tấm lòng, tình cảm và sự an yên trong tâm hồn của những nghệ nhân thế kỷ trước.'
          ],
          images: [
            { src: 'assets/5.3.png', alt: 'Họa tiết cá chép vẽ trên bình gốm Chu Đậu', caption: 'Hình ảnh cá chép được vẽ trên bình gốm là một chủ đề văn hóa dân gian quen thuộc trên gốm Chu Đậu. Ảnh: Trịnh Bộ', afterParagraph: 1 },
            { src: 'assets/5.4.png', alt: 'Sản phẩm gốm được nghệ nhân tạo hình thủ công', caption: 'Sản phẩm gốm được tạo nên từ bàn tay tỉ mỉ của nghệ nhân. Nguồn: sưu tầm', afterParagraph: 3 }
          ]
        },
        {
          title: 'Triết lý âm dương và hành trình tỏa sáng thế giới',
          body: [
            'Nghệ thuật tạo dáng của gốm Chu Đậu tuân theo quy luật âm dương ngũ hành rất nghiêm ngặt, thể hiện rõ nhất qua cặp bình Tỳ Bà và bình Hoa Lam huyền thoại. Bình Tỳ Bà dáng thắt eo nở hậu tượng trưng cho tính Âm, sự mềm mại bao dung của người phụ nữ; trong khi bình Hoa Lam cao vút vững chãi đại diện cho tính Dương, sức mạnh của người quân tử.',
            'Ngày nay, di sản gốm Chu Đậu không chỉ hiện diện trong các bộ sưu tập tư nhân mà còn được trân trọng trưng bày tại 46 bảo tàng danh tiếng thuộc 32 quốc gia trên thế giới. Từ Bảo tàng Topkapi Saray (Thổ Nhĩ Kỳ) đến Bảo tàng Dresden (Đức), những kiệt tác gốm cổ Đại Việt vẫn luôn làm kinh ngạc các nhà nghiên cứu mỹ thuật quốc tế.',
            'Đặc biệt, ngày 09/09/2019 chiếc đĩa gốm Chu Đậu 1.000 chữ Long viết bằng kiểu chữ thư pháp đã được tổ chức Kỷ lục Thế giới Guinness vinh danh là sản phẩm đạt kỷ lục thế giới.',
            'Bằng việc phục dựng thành công công thức men tro vỏ trấu cùng kỹ thuật vẽ hoa lam thủ công, các thế hệ nghệ nhân hôm nay đang viết tiếp câu chuyện lịch sử cho làng nghề. Dòng gốm đạo năm xưa lại tiếp tục vươn xa, mang hơi thở di sản truyền thống hòa quyện trọn vẹn vào không gian sống đương đại.'
          ],
          images: [
            { src: 'assets/5.5.png', alt: 'Cặp bình Tỳ Bà và bình Hoa Lam Chu Đậu', caption: 'Bình Tỳ Bà và Bình Hoa Lam. Nguồn: chudauceramic.vn', afterParagraph: 1 },
            { src: 'assets/5.6.png', alt: 'Đĩa gốm Chu Đậu trang trí 1.000 chữ Long thư pháp', caption: 'Đĩa gốm Chu Đậu 1.000 chữ Long viết bằng kiểu chữ thư pháp. Nguồn: chudauceramic.vn', afterParagraph: 3 }
          ],
          embed: {
            src: 'https://www.youtube.com/embed/j6lhJuA58KQ?controls=0&start=1',
            watchUrl: 'https://www.youtube.com/watch?v=j6lhJuA58KQ&t=1s',
            title: 'Gốm Chu Đậu: Từ tro vỏ trấu đến kiệt tác gốm đạo Việt Nam',
            caption: 'Video về gốm Chu Đậu',
            afterParagraph: 4
          }
        }
      ]
    },
    { id: 'kim-bang', sec: 'lang', tag: 'Nghệ nhân', title: 'Người nghệ nhân hơn nửa thế kỷ chắt chiu hồn gốm Việt', excerpt: 'Nghệ nhân Ưu tú Nguyễn Văn Lợi dành hơn nửa thế kỷ gìn giữ gốm cổ Bát Tràng, phục dựng men xưa và đưa kỹ thuật Raku độc đáo về đất Việt.', read: 9, date: '2026-09-17', author: 'Lan Chi', views: 1980, seed: 0,
      thumb: { src: 'assets/6.1.jpg', alt: 'Nghệ nhân Nguyễn Văn Lợi bên sản phẩm gốm tại xưởng' },
      tags: ['Nghệ nhân', 'Nguyễn Văn Lợi', 'Men Raku', 'Phục chế gốm cổ', 'Thắp lửa truyền nghề'],
      lead: 'Sinh ra và lớn lên tại làng gốm Bát Tràng (xã Bát Tràng, huyện Gia Lâm, Hà Nội) với bề dày lịch sử hơn 500 năm phát triển nghề hóa thổ thành kim, nghệ nhân Nguyễn Văn Lợi không chỉ gìn giữ “hồn cốt” của làng nghề, mà còn nghiên cứu thành công dòng men Raku độc đáo, góp phần đưa sản phẩm gốm quê hương vươn tầm thế giới.',
      body: [],
      sections: [
        {
          title: 'Nửa thế kỷ gắn bó cùng đất mẹ và hành trình giữ hồn gốm cổ',
          body: [
            'Là thế hệ thứ 12 của gia tộc làm gốm lâu đời tại Bát Tràng, Nghệ nhân Ưu tú Nguyễn Văn Lợi (sinh năm 1957) đã quen thuộc với mùi đất ẩm và tiếng bàn xoay từ khi mới 12 tuổi. Tình yêu với gốm ngấm sâu vào máu thịt từ thuở thiếu thời, trở thành động lực để ông chọn nghề làm nghiệp trọn đời.',
            'Năm 1979, nhờ vốn kinh nghiệm thực tế phong phú, ông được mời về làm việc tại Xưởng phục chế Bảo tàng Mỹ thuật Việt Nam. Tại đây, ông trực tiếp tham gia phục chế các hiện vật gốm cổ qua các triều đại Lê, Trần, Mạc, Nguyễn, tích lũy tri thức sâu sắc về kỹ thuật và tư duy thẩm mỹ của tiền nhân.',
            'Sau năm 1986, ông trở về mở xưởng riêng nhưng gặp vô vàn khó khăn do kiên trì giữ phong cách giả cổ giữa lúc thị trường chuộng hàng xuất khẩu hiện đại. Bước ngoặt đến vào năm 1995 khi một khách hàng Nhật Bản vì trân trọng nét hoài cổ độc bản của ông mà đặt đơn hàng lớn, mở ra con đường đưa gốm Việt ra thế giới.'
          ],
          images: [
            { src: 'assets/6.1.jpg', alt: 'Nghệ nhân Ưu tú Nguyễn Văn Lợi bên các sản phẩm gốm', caption: 'Nghệ nhân Ưu tú Nguyễn Văn Lợi sinh ra trong gia đình nghề gốm truyền thống. Ảnh: Hải Ly', afterParagraph: 1 },
          ]
        },
        {
          title: 'Hành trình đưa men Raku về đất Việt',
          body: [
            'Năm 2012, nghệ nhân Nguyễn Văn Lợi bắt đầu hành trình chinh phục dòng men Raku độc đáo có nguồn gốc từ thế kỷ XVI của Nhật Bản. Đây là kỹ thuật đòi hỏi rút sản phẩm ra khỏi lò khi đang đỏ rực ở nhiệt độ 850 - 1.000 độ C để làm nguội đột ngột bằng nước hoặc tro, tạo nên hiệu ứng màu sắc huyền ảo.',
            'Khí hậu và đặc tính đất sét Việt khiến gốm liên tục bị vỡ nát do sốc nhiệt ngay khi gắp ra khỏi lò. Trải qua 5 năm kiên trì với hơn 300 lần nung thất bại, hỏng hơn 1.000 sản phẩm và vô số lần điều chỉnh công thức, ông mới tìm ra bí quyết giúp đất sét nội địa chịu được nhiệt độ khắc nghiệt này.',
            'Khéo léo lồng ghép hoa văn cổ truyền như hoa Phù Dung, Cúc Lê vào lớp men Raku, ông biến mỗi tác phẩm thành một “sứ giả văn hóa” đặc sắc. Dòng gốm Raku của ông không chỉ đoạt giải Nhất Hội thi Sản phẩm Thủ công Mỹ nghệ toàn quốc năm 2020 mà còn xuất khẩu sang Anh, Mỹ, Hà Lan, Đan Mạch.'
          ],
          images: [
            { src: 'assets/6.3.png', alt: 'Tác phẩm gốm Raku do nghệ nhân Nguyễn Văn Lợi nghiên cứu', caption: 'Nghệ nhân Nguyễn Văn Lợi dày công nghiên cứu dòng men Raku. Nguồn: battrangvietnam.vn', afterParagraph: 2 }
          ]
        },
        {
          title: 'Phục dựng di sản và ngọn lửa truyền nghề cho thế hệ mai sau',
          body: [
            'Bên cạnh men Raku, ông cùng vợ là nghệ nhân Phạm Thị Châu đã dành nhiều tâm huyết nghiên cứu, phục dựng thành công các dòng men cổ quý hiếm như men lục, men nâu mật thời Lý, men xanh chàm thời Lê - Trần. Sự kết hợp tài hoa của hai nghệ nhân đã thắp sáng lại những sắc men tưởng chừng đã chìm vào quên lãng.',
            'Tài năng của ông được khẳng định trọn vẹn vào năm 2003 khi sản phẩm bát hương do ông chế tác vượt qua 21 thợ giỏi trong làng để được chọn trưng bày tại đình Bát Tràng. Cũng trong năm này, ông vinh dự được Chủ tịch nước phong tặng danh hiệu Nghệ nhân Ưu tú.',
            'Ở tuổi thất thập, ông vẫn miệt mài truyền nghề cho con cháu, gìn giữ câu ca cổ của tiền nhân: “Bạch bát chân truyền nê tác bảo / Hồng lô đào chú thổ thành kim” (Truyền nghề làm bát bùn hóa quý / Lò lửa hun đúc đất thành vàng). Ngọn lửa nhiệt huyết của ông tiếp tục thắp sáng con đường di sản cho thế hệ trẻ Bát Tràng.'
          ],
          images: [
            { src: 'assets/6.4.png', alt: 'Hiện vật gốm men nâu thời Lý được phục chế', caption: 'Ông Lợi cùng vợ phục chế thành công dòng men nâu thời Lý. Nguồn: battrangvietnam.vn', afterParagraph: 1 }
          ],
          quote: 'Mỗi hoa văn trên gốm là một phần di sản văn hóa, là câu chuyện của cha ông ta. Chúng tôi chỉ là người kể lại câu chuyện ấy qua nghề gốm.',
          quoteAfterParagraph: 2
        }
      ]
    },
    { id: 'manh-gom-co', sec: 'lang', tag: 'Nghệ nhân', title: 'Nghệ nhân trẻ giữ lửa gốm Bát Tràng', excerpt: 'Nguyễn Tuấn Minh tiếp nối nghề gốm gia truyền, kết hợp kỹ thuật cổ truyền với tư duy sáng tạo để gìn giữ di sản Bát Tràng.', read: 8, date: '2026-09-12', author: 'Đức Minh', views: 2210, seed: 1,
      thumb: { src: 'assets/7.1.png', alt: 'Nghệ nhân trẻ Nguyễn Tuấn Minh bên sản phẩm gốm' },
      tags: ['Nghệ nhân', 'Nguyễn Tuấn Minh', 'Thế hệ trẻ', 'Kế thừa', 'giữ nghề', 'Hồn gốm'],
      lead: 'Gắn bó tuổi trẻ với bàn xoay và lò nung, nghệ nhân Nguyễn Tuấn Minh (1996) đang lặng lẽ tiếp nối dòng chảy gốm gia truyền Bát Tràng. Bằng sự kiên trì và tư duy đổi mới, anh đã thổi hơi thở đương đại vào từng tác phẩm, giữ trọn ngọn lửa di sản giữa lòng Hà Nội.',
      body: [],
      sections: [
        {
          title: 'Tuổi thơ gắn liền với mùi đất ẩm và hơi ấm lò nung',
          body: [
            'Sinh ra trong một gia đình có truyền thống làm gốm lâu đời, Nguyễn Tuấn Minh đã sớm quen thuộc với nhịp sống đặc trưng của làng nghề Bát Tràng. Những năm tháng tuổi thơ của anh không gắn liền với các trò chơi hiện đại mà trôi qua bên mùi đất ẩm ngái, tiếng xoay rì rào của bàn xoay và ánh lửa chập chờn từ những lò nung đêm ngày đỏ lửa.',
            'Tình yêu với nghệ thuật đất nung đến với Tuấn Minh tự nhiên như hơi thở. Tốt nghiệp phổ thông, đứng trước nhiều cơ hội công việc ổn định nơi phố thị náo nhiệt, chàng trai trẻ vẫn quyết định ở lại quê nhà. Anh chọn nối nghiệp gia đình, chấp nhận dấn thân vào một hành trình đầy gian truân nhưng chứa đựng bao giá trị văn hóa sâu sắc.'
          ],
          images: [
            { src: 'assets/7.1.png', alt: 'Nghệ nhân trẻ Nguyễn Tuấn Minh đang hoàn thiện sản phẩm gốm', caption: 'Nghệ nhân trẻ Nguyễn Tuấn Minh. Nguồn: Báo Quân đội nhân dân', afterParagraph: 1 }
          ]
        },
        {
          title: 'Thoát khỏi lối mòn và hành trình khẳng định bản sắc',
          body: [
            'Nhìn lại những ngày đầu chập chững bước vào nghề, Tuấn Minh sớm nhận ra rằng nếu chỉ rập khuôn theo kinh nghiệm cũ, sản phẩm khó tạo được vị thế riêng trên thị trường. Anh chủ động tìm tòi, trau dồi thêm kiến thức về mỹ thuật, lý thuyết tạo hình và học cách thổi cảm xúc cá nhân vào từng khối đất vô tri.',
            'Với Tuấn Minh, mỗi chiếc lộc bình, cái chóe hay chân đèn không chỉ dừng lại ở vật dụng sinh hoạt mà còn là tác phẩm biểu đạt tâm hồn người thợ. Việc kết hợp kỹ thuật chế tác điêu luyện cùng sự chăm chút tỉ mỉ đã giúp các sản phẩm của anh vừa mang đậm nét cổ truyền, vừa phảng phất tinh thần thời đại.',
            'Năm 2021, khi mới bước sang tuổi 25, Nguyễn Tuấn Minh vinh dự được Hiệp hội Làng nghề Việt Nam phong tặng danh hiệu Nghệ nhân. Cột mốc quan trọng này không chỉ ghi nhận nỗ lực bền bỉ của cá nhân anh mà còn là niềm tự hào của gia đình và làng gốm. Danh hiệu ấy vừa là động lực, vừa là lời nhắc nhở để anh tiếp tục chinh phục những dòng men khó và thử thách kỹ thuật mới.'
          ]
        },
        {
          title: 'Bản lĩnh trước thử thách và khát vọng giữ nét đẹp Hà Nội',
          body: [
            'Trong bối cảnh nhiều làng nghề truyền thống đối mặt với áp lực thị trường, sự lựa chọn gắn bó của những người trẻ như Tuấn Minh trở nên vô cùng đáng quý. Nghề gốm vốn đòi hỏi sự kiên nhẫn tột cùng, bởi không phải sản phẩm nào ra lò cũng hoàn hảo. Chính qua những lần thất bại lặp đi lặp lại, người thợ trẻ lại càng hiểu sâu hơn về chất liệu và tích lũy thêm bản lĩnh nghề nghiệp.',
            'Hiện nay, làm gốm không chỉ giúp Tuấn Minh khẳng định giá trị bản thân và nuôi sống gia đình mà còn tạo nền tảng vững chắc để anh tự do sáng tạo. Anh khéo léo biến tấu những hoa văn, dáng hình quen thuộc thành các tác phẩm độc đáo, giúp gốm Bát Tràng vừa lưu giữ được ký ức xưa cũ, vừa tự tin hiện diện trong không gian sống hiện đại.',
            'Giữa nhịp sống đô thị gấp gáp, sự lặng lẽ và kiên trì của Tuấn Minh bên bàn xoay đã góp phần gìn giữ một nét văn hóa đặc trưng của đất Thăng Long - Hà Nội. Trong làn khói mỏng vờn bay trên những mái lò Bát Tràng, ngọn lửa nghề vẫn đang được thắp sáng và truyền nối qua nhiệt huyết của những nghệ nhân thế hệ mới.'
          ],
          images: [
            { src: 'assets/7.2.png', alt: 'Nguyễn Tuấn Minh hướng dẫn thanh niên xã Bát Tràng làm gốm', caption: 'Nghệ nhân trẻ Nguyễn Tuấn Minh (bên trái) hướng dẫn nghề gốm truyền thống cho thanh niên xã Bát Tràng (huyện Gia Lâm).', afterParagraph: 2 }
          ],
          embed: {
            src: 'https://www.youtube.com/embed/AqUbLWYbkkw?controls=0&start=1',
            watchUrl: 'https://www.youtube.com/watch?v=AqUbLWYbkkw&t=1s',
            title: 'Nghệ nhân trẻ giữ lửa gốm Bát Tràng',
            caption: 'Video về nghệ nhân trẻ Nguyễn Tuấn Minh',
            afterParagraph: 3
          }
        }
      ]
    },
    { id: 'huong-canh', sec: 'lang', tag: 'Nghệ nhân', title: '“Gớm” Long Bình: Nét quái ngộ nghĩnh thổi làn gió mới vào nghề đất', excerpt: 'Vũ Tuấn Long đưa những tạo hình gốm quái dị, dí dỏm đến với giới trẻ, kết hợp kỹ nghệ Bát Tràng truyền thống cùng tinh thần sáng tạo đương đại.', read: 8, date: '2026-09-08', author: 'Minh Thư', views: 1750, seed: 2,
      thumb: { src: 'assets/8.1.png', alt: 'Vũ Tuấn Long đang vẽ màu cho sản phẩm gốm Gớm Long Bình' },
      tags: ['Nghệ nhân', 'Gớm Long Bình', 'Đương đại', 'Kết nối Gen Z', 'Làm mới di sản'],
      lead: 'Thay vì tuân theo những đường nét hoàn hảo của gốm truyền thống, “Tiệm Gớm Long Bình” của Vũ Tuấn Long đã chinh phục công chúng bằng tạo hình quái ngộ và đầy dí dỏm. Sự táo bạo này không chỉ đưa gốm Bát Tràng đến gần hơn với giới trẻ mà còn thổi một luồng sinh khí tươi mới vào dòng chảy di sản làng nghề.',
      body: [
        'Sinh ra trong một gia đình có truyền thống gốm lâu đời tại Bát Tràng, Vũ Tuấn Long (sinh năm 1997) từng thử sức ở nhiều lĩnh vực trước khi quyết định trở về gắn bó với đất nung. Không chọn con đường an toàn là tiếp quản các mẫu khuôn đúc sẵn của gia đình, chàng trai trẻ chọn rẽ sang một hướng đi hoàn toàn khác biệt: tự tay nhào nặn từng sản phẩm mang dấu ấn cá nhân.',
        'Từ những thử nghiệm ban đầu đầy bỡ ngỡ cùng vô số lần thất bại, thương hiệu “Gớm Long Bình” đã chính thức ra đời. Cái tên hóm hỉnh vừa là sự chơi chữ giữa “gốm” và “gớm”, vừa là lời khẳng định cho phong cách tạo hình bất quy tắc, biến những nét “xấu dị” thành cái đẹp có sức hút riêng biệt.'
      ],
      sections: [
        {
          title: 'Ngôn ngữ tạo hình “xấu dị” đầy sức hút',
          body: [
            'Điểm nhận diện đặc trưng của “Gớm Long Bình” nằm ở khuôn mặt nhân vật với đôi mắt trợn ngược, biểu cảm ngơ ngác và chiếc miệng rộng bẻ cong để lộ hàng răng nhấp nhô ngộ nghĩnh. Những chiếc cốc, hũ trà hay tượng trang trí không tuân theo chuẩn mực đối xứng nào, mà hiện lên vô cùng sống động như một nét chấm phá đầy tiếng cười.',
            'Sự kết hợp giữa kỹ thuật làm gốm sành nung nhiệt độ cao cổ truyền với bảng màu men hiện đại rực rỡ đã giúp các sản phẩm trở nên vô cùng bắt mắt. Bề mặt thô nhám ngẫu hứng cùng lớp men tươi sáng tạo nên sự tương phản thị giác thú vị, biến mỗi món đồ gốm thành một tác phẩm độc bản không cái nào giống cái nào.'
          ],
          images: [
            { src: 'assets/8.1.png', alt: 'Vũ Tuấn Long vẽ màu lên sản phẩm Gớm Long Bình', caption: 'Tuấn Long đang vẽ màu cho những sản phẩm “quái dị” của mình. Nguồn: Báo Quân đội Nhân dân', afterParagraph: 1 },
            { src: 'assets/8.2.png', alt: 'Các sản phẩm gốm Gớm Long Bình với nhiều hình thù độc đáo', caption: 'Những sản phẩm gốm với nhiều hình thù độc đáo. Nguồn: Báo Quân đội Nhân dân', afterParagraph: 2 }
          ]
        },
        {
          title: 'Chinh phục thử thách nung nhiệt và sức lan tỏa Gen Z',
          body: [
            'Để tạo nên một sản phẩm hoàn chỉnh, người thợ phải trải qua quy trình nặn tay công phu từ đắp nổi từng chiếc răng li ti cho đến canh chỉnh nhiệt độ nung từ 1.000 đến 1.300 độ C. Do độ dày mỏng không đều, gốm rất dễ bị nứt nổ trong lò; từng có thời điểm Tuấn Long chịu thiệt hại nặng nề vì toàn bộ lô hàng vỡ nát, nhưng chính sự kiên trì đã giúp anh làm chủ kỹ thuật.',
            'Nhờ sức mạnh của mạng xã hội, những video ngắn ghi lại quá trình tạo hình hóm hỉnh của Tuấn Long đã nhanh chóng thu hút hàng triệu lượt xem. “Gớm Long Bình” không chỉ mang lại hiệu quả kinh tế mà còn thành công trong việc kéo giới trẻ Gen Z quay trở lại tìm hiểu và trân trọng nghệ thuật làm gốm thủ công.'
          ],
          images: [
          ]
        },
        {
          title: 'Sự giao thoa giữa hiện đại và truyền thống',
          body: [
            'Sức quyến rũ của “Gớm Long Bình” không đến từ sự chối bỏ quá khứ, mà nằm ở nhịp cầu nối liền hai khoảng không gian thời gian. Chất đất sét Bát Tràng đặc quánh, kỹ thuật chuốt tay, đắp nổi và ngọn lửa nung kiên cường vẫn hoàn toàn mang tinh túy cổ truyền. Lớp nền tảng vững chắc ấy chính là nơi nâng đỡ cho những ý tưởng ngẫu hứng mang đậm tinh thần của thời đại mới.',
            'Yếu tố hiện đại hiện diện rõ nét qua ngôn ngữ thiết kế pop-art, phong cách biến tấu nhân vật mang hơi thở hoạt hình và tư duy truyền thông số cá tính. Những vật dụng gốm nay rời bỏ vị trí trang trọng tĩnh lặng trong tủ kính để bước vào đời sống thường nhật của người trẻ - trở thành người bạn nhỏ hóm hỉnh trên bàn làm việc, góc cà phê hay không gian sống tối giản.',
            'Chính sự hòa quyện nhịp nhàng ấy đã chứng minh rằng di sản không phải là di tích đóng băng, mà là một thực thể sống luôn vận động. Khi kỹ nghệ lâu đời của cha ông gặp gỡ lăng kính tự do, phóng khoáng của thế hệ trẻ, chất liệu đất nung lại có thêm một đời sống mới rực rỡ và đầy bất ngờ.',
            'Bằng góc nhìn quái dị đầy cá tính trên nền tảng gốm Bát Tràng gia truyền, Vũ Tuấn Long đã chứng minh rằng giữ gìn di sản không phải là lặp lại quá khứ, mà là làm mới nó bằng hơi thở đương đại. “Gớm Long Bình” chính là nét chấm phá độc đáo, khẳng định bản lĩnh và tư duy giữ lửa nghề rất riêng của thế hệ trẻ hôm nay.'
          ],
          images: [
            { src: 'assets/8.4.png', alt: 'Sản phẩm gốm của Long được vẽ màu bên cạnh gốm truyền thống của gia đình', caption: 'Sản phẩm gốm của Long đang được bạn thợ vẽ màu (góc phải), bên cạnh là những sản phẩm truyền thống của gia đình. Nguồn: Báo Quân đội Nhân dân', afterParagraph: 2 }
          ],
          embed: {
            src: 'https://www.tiktok.com/player/v1/7691531988821429524?music_info=1&description=1',
            watchUrl: 'https://www.tiktok.com/@longbinh.98/video/7691531988821429524',
            title: 'Video TikTok của Gớm Long Bình',
            caption: 'Video từ @longbinh.98',
            linkLabel: 'Mở video trên TikTok',
            aspectRatio: 'portrait',
            afterParagraph: 4
          }
        }
      ]
    },
  ];

  const lab = [
    { id: 'chuyen-mo-lo', sec: 'lab', tag: 'Nung', tags: ['nung', 'lò củi'], title: 'Mở Lò Gốm: Ranh Giới Mong Manh Giữa Siêu Phẩm Và Phế Phẩm', excerpt: 'Đằng sau khoảnh khắc mở lò là những ngày chờ đợi, phản ứng của đất và men, cùng bài học từ mỗi mẻ nung thành công hay thất bại.', read: 12, date: '2026-10-05', author: 'Thầy Hiền', views: 5210, seed: 4, thumb: { src: 'assets/gom-trong-lo.png', alt: 'Các sản phẩm gốm xếp trên kệ trong lò nung rực lửa' },
      body: ['Trong không gian ngập tràn mùi ngai ngái của đất sét ẩm và nhiệt lượng còn vương vấn, có một thời khắc tĩnh lặng đến nín thở mà bất cứ nghệ nhân nào cũng vừa mong chờ vừa e sợ: thời khắc mở lò gốm. Mọi kỹ thuật vuốt nặn tài hoa, mọi nét cọ trang trí tỉ mỉ nhất đều phải chờ đợi phán quyết cuối cùng từ ngọn lửa. Khép cửa lò lại là giao phó “đứa con tinh thần” cho nhiệt độ hơn 1.200°C. Và khi cánh cửa hé mở, ranh giới giữa một kiệt tác nghệ thuật để đời và một phế phẩm nứt toác đôi khi chỉ cách nhau vài độ C chênh lệch. Hãy cùng CHẠM GỐM lật mở những trang nhật ký xưởng lò đầy thăng trầm trong giây phút đối diện với lửa.'],
      sections: [
        { title: 'Khoảnh Khắc Nín Thở Trước Cửa Lò: Bài Học Về Sự Kiên Nhẫn', body: ['Bất kỳ ai từng theo đuổi con đường làm gốm thủ công đều thuộc nằm lòng một quy tắc bất di bất dịch: ngọn lửa cần thời gian, và sự chờ đợi là bắt buộc. Quá trình tạo hình trên bàn xoay hay vẽ họa tiết có thể chỉ mất vài giờ, nhưng để hoàn thiện một mẻ nung, người thợ phải chờ từ 24 đến 48 tiếng đồng hồ, thậm chí vài ngày với lò củi truyền thống cỡ lớn.', 'Khi bảng điều khiển báo chu trình nung đã kết thúc, tâm trạng người làm gốm chuyển sang bồn chồn nhất. Tuy nhiên, tuyệt đối không mở lò ngay: nếu nhiệt độ bên trong còn quá cao so với môi trường bên ngoài, thường trên 100°C, hiện tượng sốc nhiệt có thể xảy ra. Sự chênh lệch đột ngột khiến xương đất và men co rút, làm sản phẩm nứt chỉ trong một tiếng “tách” khô khốc.', 'Khoảnh khắc đôi bàn tay chai sần nhẹ nhàng tháo từng viên gạch chắn cửa lò hay hé mở nắp lò điện, đón những tia sáng đầu tiên vào không gian tối tăm bên trong, chính là giây phút hồi hộp tột độ — hệt như tự tay bóc một món quà bí mật từ tạo hóa.'] },
        { title: 'Bí Mật Bên Trong Lò Nung: Khi Đất Và Men Khiêu Vũ Cùng Lửa', body: ['Để hiểu vì sao ranh giới giữa thành bại mong manh đến thế, hãy nhìn vào “trái tim” lò nung, nơi những phản ứng hóa học và vật lý phức tạp diễn ra.', 'Khi nhiệt độ vượt ngưỡng 600°C, nước và các thành phần dễ bay hơi dần thoát khỏi đất sét, khối đất mộc chuyển hóa vĩnh viễn thành gốm cứng. Điều kỳ diệu thực sự bắt đầu khi nhiệt lượng chạm mốc 1.200–1.250°C: quá trình thủy tinh hóa đạt đỉnh, lớp men vốn chỉ là bột xỉn màu bắt đầu nóng chảy, sủi bọt và chảy tràn trên bề mặt sản phẩm.', 'Sự lưu thông không khí, tỷ lệ oxy dồi dào trong môi trường oxy hóa hay sự thiếu hụt oxy trong môi trường khử sẽ quyết định cách các oxit kim loại trong men biến đổi. Sự kết hợp ấy tạo nên những sắc màu mà không một bảng pha màu nào mô phỏng lại được.'], image: { src: 'assets/gom-trong-lo.png', alt: 'Các sản phẩm gốm xếp trên kệ trong lò nung rực lửa', caption: 'Sản phẩm được xếp trong lò trước khi ngọn lửa và nhiệt độ tạo nên diện mạo cuối cùng.' }, quote: 'Lửa là vị giám khảo công bằng nhưng cũng vô cùng khắc nghiệt. Lửa xóa nhòa mọi kỹ xảo nhân tạo, chỉ giữ lại những gì chân thật và nguyên bản nhất. Mở lò gốm không chỉ là xem kết quả, mà là lắng nghe câu trả lời của tự nhiên.' },
        { title: 'Những Siêu Phẩm Ngẫu Hứng: Món Quà Vô Giá Của Tự Nhiên', body: ['Có những tác phẩm khi đưa vào lò không mang quá nhiều kỳ vọng, nhưng lúc mở lò lại khiến cả xưởng trầm trồ. Đó thường là sản phẩm ứng dụng dòng men hỏa biến, nơi màu sắc được sinh ra từ chính sự ngẫu hứng của nhiệt độ.', 'Sự giao thoa giữa độ chảy của men và ngọn lửa liếm qua bề mặt gốm tạo nên những vân mây ảo diệu, tinh thể lấp lánh như dải ngân hà hay sắc xanh sâu thẳm của đại dương. Ở những vùng nhiệt độ cao nhất, men chảy quyện vào nhau tạo hiệu ứng chuyển màu rực rỡ, loang không đồng đều nhưng hài hòa.', 'Sự ngẫu nhiên tạo nên tính độc bản: dù dùng chung công thức men và dáng gốm, nghệ nhân cũng không thể tạo ra hai sản phẩm giống hệt nhau. Tận tay nhấc một siêu phẩm men hỏa biến còn vương hơi ấm khỏi lò là niềm kiêu hãnh đền đáp cho những đêm thức trắng canh lửa.'], image: { src: 'assets/gom-giua-lua.png', alt: 'Một chiếc bát gốm được nung giữa những ngọn lửa trong lò', caption: 'Ngọn lửa tạo nên những sắc độ và dấu ấn riêng trên mỗi tác phẩm gốm.' } },
        { title: 'Phế Phẩm Đắt Giá: Khi Ngọn Lửa “Nổi Giận”', body: ['Song song với vinh quang luôn là những rủi ro trực chờ. Không ít lần, khoảnh khắc hé cửa lò mang đến bầu không khí chùng xuống, tĩnh lặng đến đáng sợ. Chỉ một sai lầm nhỏ, ngọn lửa có thể làm hỏng cả mẻ gốm.', 'Những phế phẩm đắt giá này không bị vứt bỏ vô tâm. Chúng được đặt trên một chiếc kệ riêng trong xưởng, như những người thầy nghiêm khắc nhất. Nghệ nhân mổ xẻ từng vết nứt, phân tích từng mảng men rộp để điều chỉnh cho mẻ lò tiếp theo. Đó là học phí phải trả bằng mồ hôi và nước mắt.'], table: { label: 'Các lỗi thường gặp trong quá trình nung gốm', headers: ['Hiện tượng lỗi', 'Dấu hiệu nhận biết', 'Nguyên nhân thường gặp'], rows: [['Nứt toác / nổ xương gốm', 'Sản phẩm vỡ vụn hoặc nứt mảng lớn; mảnh vỡ có thể văng vào sản phẩm khác.', 'Xương gốm chưa khô hoàn toàn, bọt khí còn trong đất do nhào chưa kỹ hoặc xảy ra sốc nhiệt.'], ['Chảy men', 'Men chảy thành giọt xuống đáy, dính sản phẩm vào tấm kê lò.', 'Tráng men quá dày ở chân đế hoặc nhiệt độ nung vượt ngưỡng của công thức men.'], ['Rộp men', 'Bề mặt nổi bọt khí li ti, vỡ ra, trở nên sần sùi và sắc nhọn.', 'Khí trong đất thoát chưa hết hoặc nhiệt độ tăng, giảm quá đột ngột.'], ['Men xỉn màu', 'Bề mặt khô ráp, màu xám xịt, không đạt độ trong và bóng như thiết kế.', 'Nhiệt độ chưa đạt điểm nóng chảy hoặc môi trường oxy hóa, khử sai lệch.']] } },
        { title: 'Cảm Xúc Vỡ Òa Và Triết Lý Chữa Lành Từ Nghề Gốm', body: ['Mở lò gốm mang lại nhiều cung bậc cảm xúc hơn bất kỳ công đoạn nào khác. Nó dạy con người khiêm tốn trước sức mạnh thiên nhiên và học cách buông bỏ sự kiểm soát tuyệt đối.', 'Khi cửa lò đã đóng, bạn không thể can thiệp vào quá trình nung. Bạn chỉ có thể chuẩn bị tốt nhất rồi đón nhận kết quả với tâm thế bình thản. Khi hiểu vẻ đẹp của sự không hoàn hảo trong triết lý Wabi-Sabi, một vết men chảy ngoài ý muốn hay dáng bình hơi nghiêng lại trở thành điểm nhấn mang tính nhân bản.', 'Mỗi lần cánh cửa lò mở ra là một lần người thợ gốm được gột rửa tâm hồn, bỏ lại tiếc nuối hay tự mãn để bắt đầu vòng lặp mới đầy say mê: nhào đất, xoay chuốt, tráng men và lại chờ đợi ngọn lửa.', 'Bạn yêu thích thế giới gốm thủ công? Hãy tiếp tục theo dõi chuyên mục Nhật Ký Xưởng Lò để khám phá những câu chuyện hậu trường, kỹ thuật chế tác và bí mật phía sau mỗi tác phẩm được tạo nên từ đất, lửa và bàn tay nghệ nhân.'] }
      ] },
    { id: 'cac-loai-dat-set', sec: 'lab', tag: 'Đất sét', tags: ['đất sét', 'chất liệu'], title: 'Các Loại Đất Sét Làm Gốm: Bí Quyết Chọn Vật Liệu Cho Tác Phẩm Hoàn Hảo', excerpt: 'Từ đất đỏ mộc mạc đến sứ trắng tinh tế: tìm hiểu đặc tính, nhiệt độ nung và cách chọn đất phù hợp với tác phẩm của bạn.', read: 14, date: '2026-10-01', author: 'Cô Hà', views: 4390, seed: 0, thumb: { src: 'assets/dat-san-tren-ban-xoay.png', alt: 'Nghệ nhân tạo hình đất sét trên bàn xoay' },
      body: ['Trong nghệ thuật tạo hình thủ công, nếu ngọn lửa là vị giám khảo đầy quyền uy thì vật liệu chính là linh hồn của mọi tác phẩm. Với những ai yêu cái lấm lem của bùn đất, việc lựa chọn đất sét làm gốm chưa bao giờ là quyết định ngẫu nhiên. Có loại đất dễ làm quen, nhưng cũng có loại đòi hỏi người thợ kiên nhẫn và hiểu rõ giới hạn của vật liệu. Trong bài viết hôm nay của chuyên mục Nhật Ký Xưởng Lò tại CHẠM GỐM, hãy cùng chạm tay vào những loại đất phổ biến và tìm hiểu đặc tính của từng loại.'],
      sections: [
        { title: '4 Loại Đất Sét Phổ Biến Nhất Trong Chế Tác Gốm', body: ['Dạo quanh một xưởng lò hay làng nghề truyền thống như Bát Tràng, bạn sẽ bắt gặp nhiều loại đất với màu sắc, độ dẻo và nhiệt độ nung khác nhau. Bốn nhóm dưới đây là những lựa chọn thường gặp; tên gọi thương mại và thành phần thực tế có thể thay đổi tùy nhà cung cấp.'] },
        { title: '1. Đất Sét Đỏ (Earthenware / Terracotta) – Nét Mộc Mạc Nguyên Sơ', body: ['Đất sét đỏ, thường gọi là đất nung, là vật liệu lâu đời và gần gũi với lịch sử làm gốm. Màu đỏ gạch, cam hoặc nâu ấm thường đến từ hàm lượng oxit sắt trong đất.', 'Đất thường có độ dẻo tốt, dễ vuốt nặn và phù hợp với người mới. Sau khi nung ở nhiệt độ thấp hơn nhiều dòng sành và sứ, xương đất thường còn độ xốp và có thể thấm nước nếu không được tráng men thích hợp.', 'Đất đỏ phù hợp làm chậu cây, tượng trang trí mộc mạc, gạch ngói và vật dụng decor phong cách Rustic. Nhiệt độ nung cần theo khuyến nghị của nhà sản xuất đất và men.'], image: { src: 'assets/dat-set-do.png', alt: 'Đôi tay nghệ nhân tạo hình đất sét đỏ trên bàn xoay', caption: 'Đất sét đỏ mềm dẻo, dễ tạo hình và mang sắc ấm tự nhiên.' } },
        { title: '2. Đất Sành (Stoneware) – Lựa Chọn Bền Bỉ Cho Xưởng Lò', body: ['Stoneware là dòng đất đa năng được dùng phổ biến trong các xưởng thủ công. Khi nung đúng dải nhiệt phù hợp với thành phần đất, xương gốm trở nên chắc và ít thấm nước hơn đất nung thông thường; màu đất mộc có thể là xám, ghi nhạt hoặc trắng ngà.', 'Đất sành thường được chọn để làm đồ gia dụng như bát đĩa, cốc uống trà và bình hoa. Độ bền, độ hút nước và khả năng dùng với lò vi sóng hay máy rửa bát phụ thuộc vào chính xác loại đất, men, nhiệt độ nung và cấu tạo sản phẩm — hãy kiểm tra hướng dẫn của xưởng hoặc nhà sản xuất trước khi sử dụng.'], image: { src: 'assets/dat-san-tren-ban-xoay.png', alt: 'Nghệ nhân vuốt tạo hình một món gốm trên bàn xoay', caption: 'Khối đất sành được vuốt thành hình trên bàn xoay.' } },
        { title: '3. Cao Lanh Và Đất Trắng – Lớp Nền Tinh Khôi', body: ['Cao lanh (kaolin) là nguyên liệu quan trọng trong nhiều công thức sứ và gốm trắng. Hạt đất mịn, màu nung sáng giúp màu men thể hiện rõ, nhưng cao lanh nguyên chất thường kém dẻo và khó tạo hình trực tiếp trên bàn xoay.', 'Trong thực tế, cao lanh thường được phối với các nguyên liệu khác để đạt độ dẻo, độ bền và nhiệt độ nung mong muốn. Một số dòng đất trắng thương mại được pha chế sẵn, có tính chất khác với cao lanh nguyên chất.', 'Đất trắng phù hợp với kỹ thuật đổ rót khuôn, tạo hình chi tiết và các bộ ấm chén. Hãy phân biệt đất trắng nhiệt độ thấp với phối liệu sứ: vẻ ngoài trắng không tự quyết định nhiệt độ nung hay độ hút nước của xương đất.'], image: { src: 'assets/san-pham-dat-trang.png', alt: 'Các sản phẩm gốm trắng được xếp trên kệ trong xưởng', caption: 'Sản phẩm từ phối liệu trắng sau công đoạn tạo hình và làm khô.' } },
        { title: '4. Đất Sứ (Porcelain) – Tinh Tế Và Đòi Hỏi Kỹ Thuật', body: ['Porcelain thường được phối từ cao lanh cùng thạch anh, fenspat và các nguyên liệu khác theo công thức riêng. Đất có thể cho xương trắng, mịn và đạt độ trong nhẹ khi làm mỏng, nung đúng kỹ thuật.', 'Porcelain đòi hỏi người thợ kiểm soát tốt độ ẩm, tạo hình, sấy và lịch nung. Độ co ngót và nguy cơ cong vênh thay đổi theo công thức, độ dày sản phẩm và chế độ nung; vì vậy nên làm mẫu thử trước khi chế tác sản phẩm lớn hoặc có các chi tiết cần lắp khít.', 'Với đặc tính phù hợp, sứ được dùng cho đồ mỹ nghệ tinh xảo, trang sức gốm và các sản phẩm cao cấp. Đây là vật liệu nhiều thử thách nhưng cũng mở ra khả năng tạo hình thanh mảnh, tinh tế.'] },
        { title: 'Bảng So Sánh Đặc Tính Các Loại Đất Sét Làm Gốm', body: ['Bảng dưới đây giúp bạn đối chiếu nhanh bốn nhóm vật liệu. Dải nhiệt độ chỉ mang tính tham khảo: công thức đất, lịch nung và khuyến nghị của nhà cung cấp mới là căn cứ để lựa chọn an toàn.'], table: { label: 'So sánh đặc tính các loại đất sét làm gốm', headers: ['Loại vật liệu', 'Màu sắc sau nung', 'Dải nhiệt tham khảo', 'Độ xốp / thấm nước', 'Ứng dụng phổ biến'], rows: [['Đất đỏ (Terracotta)', 'Đỏ gạch, nâu hoặc cam', 'Khoảng 1.000–1.150°C; tùy công thức', 'Thường xốp hơn; có thể cần men nếu cần giữ nước', 'Chậu cây, tượng và đồ decor'], ['Đất sành (Stoneware)', 'Xám nhạt, trắng ngà hoặc màu khác tùy phối liệu', 'Khoảng 1.180–1.280°C; tùy công thức', 'Thường thấp khi nung chín đúng dải nhiệt', 'Đồ gia dụng, cốc, bát đĩa'], ['Đất trắng / phối liệu cao lanh', 'Trắng hoặc trắng đục', 'Thay đổi theo công thức; cần xem thông số sản phẩm', 'Thay đổi theo phối liệu và mức độ nung chín', 'Đồ đổ khuôn, ấm chén và tạo hình chi tiết'], ['Sứ (Porcelain)', 'Trắng; một số sản phẩm mỏng có thể cho ánh sáng xuyên nhẹ', 'Khoảng 1.260–1.400°C; tùy công thức', 'Thường thấp khi nung chín đúng dải nhiệt', 'Đồ mỹ nghệ, trang sức và sản phẩm tinh xảo']] }, quote: 'Đất sét là tấm gương phản chiếu nội tâm của người nghệ nhân. Nếu bạn vội vã, đất sẽ nứt. Nếu bạn gượng ép, đất sẽ sụp đổ. Chỉ khi nâng niu và thấu hiểu giới hạn của nó, đất mới chịu cất tiếng hát giữa ngọn lửa.' },
        { title: 'Lời Khuyên Từ Xưởng Lò Cho Người Mới Bắt Đầu', body: ['Bắt đầu với đất sành dễ tạo hình, phù hợp với lớp học hoặc người mới, thay vì vội thử những sản phẩm sứ mỏng và khó kiểm soát.', 'Chú ý độ co ngót: đất co lại khi khô và nung. Nếu làm các bộ phận cần lắp khít như nắp và thân ấm, hãy dùng cùng một phối liệu và kiểm tra kích thước qua các giai đoạn khô, nung mộc và nung men.', 'Kiểm tra độ tương thích giữa đất và men. Hãy xác nhận dải nhiệt nung phù hợp với cả hai, đồng thời làm mẫu thử trước khi đưa sản phẩm vào mẻ nung chính để tránh chảy men, nứt hoặc cong vênh.', 'Chọn đất cũng giống như chọn bạn đồng hành: cần thời gian trải nghiệm và đôi khi phải chấp nhận những mẻ gốm chưa như ý để rút ra bài học. Bạn yêu thích thế giới gốm thủ công? Hãy tiếp tục theo dõi chuyên mục Nhật Ký Xưởng Lò để khám phá những câu chuyện hậu trường, kỹ thuật chế tác và bí mật phía sau mỗi tác phẩm gốm được tạo nên từ đất, lửa và bàn tay nghệ nhân.'] }
      ] },
    { id: 'xoay-chuot-ban-xoay', sec: 'lab', tag: 'Kỹ thuật', tags: ['bàn xoay', 'kỹ thuật'], title: 'Xoay Chuốt Gốm: Quy Trình Định Hình Dáng Tròn Trên Bàn', excerpt: 'Từ khối đất vô tri đến dáng gốm cân đối: tìm hiểu cách định tâm, mở lòng và kéo thành trên bàn xoay.', read: 9, date: '2026-09-27', author: 'Thầy Hiền', views: 3870, seed: 1, thumb: { src: 'assets/xoay-chuot-chuan-bi.png', alt: 'Nghệ nhân chuẩn bị khối đất trước khi vuốt trên bàn xoay' }, video: { src: 'assets/Gốm Bàn Xoay - Trải Nghiệm Làm Gốm - Chén Họa Tiết - (720p).mp4', title: 'Video hướng dẫn xoay chuốt gốm trên bàn xoay', caption: 'Xem quy trình xoay chuốt gốm trên bàn xoay.' },
      body: ['Nhào nặn đất sét bằng tay mang lại vẻ đẹp mộc mạc tự do, nhưng để kiến tạo những đường cong tròn vành vạnh và tỷ lệ cân xứng, bàn xoay là công cụ hữu ích. Kỹ thuật xoay chuốt gốm đòi hỏi sự nhịp nhàng giữa hơi thở, lực tay và vòng quay. Từ một khối đất nguyên bản, qua những động tác định tâm, mở lòng và kéo thành, dáng hình của vật dụng dần hiện ra. Cùng đi sâu vào từng thao tác cốt lõi qua kinh nghiệm tại xưởng để thấu hiểu quá trình làm việc với đất trên bàn xoay.'],
      sections: [
        { title: 'Định Tâm Đất: Thử Thách Khởi Đầu Mang Tính Quyết Định', body: ['Trước khi tạo hình, khối đất cần được nhào kỹ (wedging) để làm đất đồng nhất và giảm các túi khí mắc kẹt. Khối đất chưa đồng nhất có thể khiến quá trình chuốt mất ổn định; độ khô và cách chuẩn bị đất cũng ảnh hưởng đến an toàn khi nung.', 'Sau khi đất đạt độ dẻo phù hợp, người thợ đặt khối đất gần chính giữa mâm xoay và ép cho bám chắc. Khi bàn xoay chạy, tỳ khuỷu tay vào hông để làm điểm tựa, rồi dùng lòng bàn tay điều khiển khối đất. Mục tiêu là giảm độ lắc, đưa đất thành khối tròn xoay ổn định trước khi mở tâm.'], images: [{ src: 'assets/xoay-chuot-chuan-bi.png', alt: 'Nghệ nhân chuẩn bị khối đất trước khi vuốt trên bàn xoay', caption: 'Chuẩn bị đất kỹ giúp khối đất đồng nhất, sẵn sàng cho công đoạn định tâm.' }] },
        { title: 'Chuyện Xưởng Lò: Làm Bạn Với Lực Ly Tâm', body: ['Với người mới, một lỗi thường gặp là gồng tay để chống lại chuyển động của bàn xoay. Gồng quá mức có thể làm tay nhanh mỏi và khiến lực ép thiếu ổn định. Hãy tựa khuỷu tay vào hông, giữ vai thả lỏng và dùng tư thế vững để điều khiển đất thay vì chỉ dùng sức ở cổ tay.', 'Khi đã quen, công đoạn kéo thành (pulling) đem lại cảm giác rõ rệt về cách đất phản hồi dưới tay. Một tay đỡ mặt trong, tay kia giữ mặt ngoài; lực nâng đều và tốc độ phù hợp giúp thành đất dần mỏng hơn, cao hơn theo ý đồ.'] },
        { title: 'Từ Mở Tâm Đến Kéo Thành: Nghệ Thuật Vuốt Dáng', body: ['Khi đất đã ổn định ở tâm, quá trình tạo dáng thường gồm các thao tác cơ bản sau:', '1. Mở tâm (Opening): Dùng ngón tay ấn từ từ xuống giữa khối đất để tạo lòng. Kiểm soát độ sâu và chừa lại phần đáy đủ dày cho sản phẩm; độ dày phù hợp phụ thuộc kích thước và mục đích sử dụng.', '2. Mở lòng: Nới rộng phần đáy từ tâm ra ngoài theo kích thước mong muốn, giữ đáy tương đối đều và chuyển tiếp êm với thành gốm.', '3. Kéo thành (Pulling): Một tay đỡ phía trong, tay còn lại đặt phía ngoài. Dùng lực cân bằng, vuốt từ dưới lên trên từng lượt để thành đất mỏng và cao dần; dừng lại nếu đất mất ổn định hoặc quá mềm.', 'Sau khi đạt phom dáng cơ bản, dùng mút hơi ẩm để gạt nước thừa và làm phẳng bề mặt nhẹ nhàng. Luồn dây cắt dưới đáy để tách sản phẩm khỏi mâm xoay, rồi chuyển lên ván và để khô từ từ trước các công đoạn tiếp theo.', 'Bạn yêu thích thế giới gốm thủ công? Hãy tiếp tục theo dõi chuyên mục Nhật Ký Xưởng Lò để khám phá những câu chuyện hậu trường, kỹ thuật chế tác và bí mật phía sau mỗi tác phẩm gốm được tạo nên từ đất, lửa và bàn tay nghệ nhân.'], image: { src: 'assets/xoay-chuot-mo-long.png', alt: 'Nghệ nhân dùng hai tay mở lòng khối đất trên bàn xoay', caption: 'Mở lòng khối đất bằng lực đều để tạo phần đáy và định hình lòng sản phẩm.' } }
      ] },
    { id: 'bi-quyet-men-hoa-bien', sec: 'lab', tag: 'Men', tags: ['men', 'hỏa biến'], title: 'Bí Quyết Phối Men Hỏa Biến: Sự Kỳ Diệu Của Nhiệt Độ Lò', excerpt: 'Khám phá cách thành phần men, độ dày lớp phủ và vị trí trong lò phối hợp cùng nhiệt độ để tạo nên những sắc màu độc bản.', read: 10, date: '2026-09-22', author: 'Cô Mai Anh', views: 4650, seed: 2, thumb: { src: 'assets/men-hoa-bien-thumb.png', alt: 'Bộ gốm men hỏa biến màu xanh lam trưng bày trên nền tối' },
      body: ['Khác với men công nghiệp mang sắc độ đồng nhất và tĩnh lặng, men hỏa biến là bản giao hưởng ngẫu hứng của lửa, oxit kim loại và kỹ thuật căn chỉnh nhiệt độ. Sự biến thiên bên trong lò nung tạo ra những mảng vân loang lấp lánh tựa dải ngân hà, khiến mỗi chiếc bình, chiếc cốc ra lò đều mang dấu ấn riêng. Phối men không đơn thuần là pha trộn nguyên liệu, mà là cuộc đối thoại giữa nghệ nhân và sức mạnh của tự nhiên.'],
      sections: [
        { title: 'Bản Chất Của Dòng Men Hỏa Biến', body: ['“Hỏa biến” là sự thay đổi màu sắc và hiệu ứng bề mặt của men dưới tác động của quá trình nung. Trước khi vào lò, lớp men thường là hỗn hợp bột khoáng; khi đạt dải nhiệt phù hợp, men nóng chảy và tương tác với xương đất.', 'Cùng một công thức men có thể cho kết quả khác nhau tùy vị trí xếp trong lò, lịch tăng giảm nhiệt, thời gian giữ nhiệt và môi trường oxy hóa hay khử. Các oxit kim loại như đồng và sắt có thể góp phần tạo nên những sắc độ khác biệt. Kết quả thực tế còn tùy thuộc công thức cụ thể và cần thử nghiệm trong điều kiện của từng xưởng.'] },
        { title: 'Lửa Là Người Họa Sĩ Thứ Hai', body: ['Nói về quan điểm làm men hỏa biến là phó mặc hoàn toàn cho tự nhiên, nghệ nhân Lê Hoa – người phụ trách khâu pha chế men tại CHẠM GỐM – cho rằng điều đó chỉ đúng một nửa. Chị ví ngọn lửa như người họa sĩ thứ hai, nhưng nghệ nhân mới là người chuẩn bị khung vẽ.', 'Tỷ lệ oxit kim loại, cách phủ men, độ dày lớp phủ và vị trí sắp xếp trong lò đều cần được tính toán. Người thợ không cố kiểm soát mọi vệt loang, mà tạo điều kiện để lửa biến hóa trong giới hạn đã cân nhắc.', 'Rủi ro lớn khi làm việc với một số dòng men có độ chảy cao là men có thể chảy khỏi bề mặt khi nung quá nhiệt, dính vào tấm kê và làm hỏng sản phẩm hoặc thiết bị. Vì vậy cần tham khảo dải nung của nhà cung cấp, thử men trên mẫu và bảo vệ tấm kê theo quy trình an toàn của xưởng.'], image: { src: 'assets/men-hoa-bien-lo-cui.png', alt: 'Lửa bùng lên trong lò củi đang nung các sản phẩm gốm', caption: 'Nhiệt độ và môi trường trong lò góp phần tạo nên hiệu ứng riêng của men.' }, quote: 'Ngọn lửa là người họa sĩ thứ hai; người nghệ nhân chuẩn bị khung vẽ bằng sự hiểu biết và tính toán.' },
        { title: 'Bí Quyết Kiểm Soát Sự Ngẫu Nhiên', body: ['Để có được hiệu ứng men như mong muốn và hạn chế rủi ro, người thợ cần kiểm tra mẫu thử, thông số phối liệu và lịch nung thay vì áp dụng một công thức chung cho mọi loại men.', 'Độ dày lớp men: Một số công thức tạo hiệu ứng tốt khi phủ nhiều lớp, nhưng độ dày phù hợp phụ thuộc hướng dẫn của công thức. Hãy thử trên mẫu nhỏ trước, vì phủ quá dày có thể khiến men chảy hoặc tạo khuyết tật.', 'Chừa chân men: Làm sạch men ở phần tiếp xúc với tấm kê theo hướng dẫn của xưởng và đặc tính men. Khoảng chừa cụ thể tùy độ chảy, dáng sản phẩm và cách kê; không có một kích thước an toàn áp dụng cho mọi loại men.', 'Sắp xếp lò: Ghi lại vị trí từng mẫu và đối chiếu với kết quả sau nung. Chênh lệch nhiệt và luồng khí giữa các khu vực có thể tạo khác biệt, nhưng mức độ phụ thuộc cấu tạo lò và cách xếp.', 'Bạn yêu thích thế giới gốm thủ công? Hãy tiếp tục theo dõi chuyên mục Nhật Ký Xưởng Lò để khám phá những câu chuyện hậu trường, kỹ thuật chế tác và bí mật phía sau mỗi tác phẩm gốm được tạo nên từ đất, lửa và bàn tay nghệ nhân.'], image: { src: 'assets/men-hoa-bien-phu-men.png', alt: 'Nghệ nhân phủ lớp men lên một chiếc cốc gốm', caption: 'Thử nghiệm cách phủ men trên sản phẩm trước khi đưa vào lò nung.' } }
      ] },
    { id: 'say-va-nung', sec: 'lab', tag: 'Quy trình', tags: ['nung', 'quy trình'], title: 'Sấy Và Nung Gốm: Bí Quyết Khắc Phục Lỗi Nứt Vỡ Sản Phẩm', excerpt: 'Tìm hiểu các giai đoạn sấy và nung gốm, nguyên nhân gây nứt vỡ và cách hạn chế lỗi bằng quy trình phù hợp.', read: 12, date: '2026-09-18', author: 'Thầy Hiền', views: 3340, seed: 3, thumb: { src: 'assets/say-nung-gom-nut.png', alt: 'Vết nứt trên sản phẩm gốm trước khi hoàn thiện' },
      body: ['Nứt vỡ là một trong những rủi ro thường gặp khi làm gốm. Một tác phẩm đẹp trên bàn xoay vẫn có thể hư hỏng nếu độ ẩm thoát không đều, đất chưa được chuẩn bị kỹ hoặc lịch nung không phù hợp. Sấy và nung là hai giai đoạn cần được kiểm soát cẩn thận để giảm ứng suất trong xương đất và bảo vệ thành quả của người thợ. Hãy cùng CHẠM GỐM tìm hiểu nguyên nhân gây nứt và những cách phòng tránh thường dùng tại xưởng.'],
      sections: [
        { title: 'Tại Sao Gốm Thường Bị Nứt Vỡ Trước Khi Hoàn Thiện?', body: ['Đất sét chứa các hạt khoáng liên kết trong một cấu trúc có độ ẩm nhất định. Khi nước tự do bay hơi, đất co lại. Nếu các phần của sản phẩm khô hoặc co ngót với tốc độ khác nhau, ứng suất có thể tích tụ và làm xuất hiện vết nứt.', 'Co ngót không đều: miệng mỏng thường khô nhanh hơn phần đáy dày. Chỗ nối, quai, góc nhọn hoặc thay đổi đột ngột về độ dày cũng dễ tạo ứng suất.', 'Khối đất không đồng nhất: nhào đất chưa kỹ hoặc ghép nối thiếu chắc có thể làm sản phẩm yếu và khó tạo hình. Bọt khí cần được hạn chế; trong một số điều kiện nung, hơi nước và khí thoát ra quá nhanh có thể gây nứt hoặc hư hỏng.', 'Thay đổi nhiệt độ quá nhanh: gia nhiệt hay làm nguội không phù hợp với loại đất, độ dày sản phẩm và lịch nung có thể làm phát sinh sốc nhiệt.'], image: { src: 'assets/say-nung-gom-nut.png', alt: 'Chi tiết một sản phẩm gốm xuất hiện vết nứt', caption: 'Nứt có thể xuất hiện khi độ ẩm, độ dày hoặc nhiệt độ thay đổi không đồng đều.' } },
        { title: 'Giai Đoạn Sấy Khô: Cuộc Chiến Với Độ Ẩm', body: ['Sấy khô là bước đệm quan trọng trước khi sản phẩm vào lò. Hãy để gốm khô từ từ ở nơi thoáng, tránh nắng gắt và luồng gió nóng trực tiếp. Thời gian khô tùy kích thước, độ dày, độ ẩm không khí và loại đất.', 'Leather hard (khô da): đất đã se và đủ cứng để tiện gọt hoặc chạm khắc, nhưng bên trong vẫn còn ẩm. Đây thường là thời điểm thuận lợi để chỉnh sửa và gắn thêm chi tiết bằng kỹ thuật ghép phù hợp.', 'Bone dry (khô kiệt): sản phẩm khô đồng đều, màu sáng hơn và không còn cảm giác ẩm lạnh. Gốm ở trạng thái này vẫn rất giòn, nên cần nâng đỡ cẩn thận khi di chuyển.', 'Với sản phẩm có quai hoặc cấu trúc phức tạp, có thể che lỏng bằng nilon để làm chậm quá trình thoát ẩm. Kiểm tra thường xuyên và điều chỉnh cách che phủ để các phần dày, mỏng khô tương đối đồng đều.'], image: { src: 'assets/say-nung-gom-moc.png', alt: 'Các sản phẩm gốm mộc đang được hong khô trên kệ', caption: 'Hong khô từ từ giúp các sản phẩm gốm mộc giảm chênh lệch độ ẩm.' } },
        { title: 'Quy Trình Nung Gốm: Chinh Phục Ngọn Lửa', body: ['Khi sản phẩm đã khô kiệt, người thợ lựa chọn lịch nung theo loại đất, độ dày và mục đích sử dụng. Nhiệt độ và tốc độ tăng giảm cần theo thông số của phối liệu và hướng dẫn vận hành lò.', 'Nung sơ bộ (bisque firing): chu trình nung đầu tiên giúp sản phẩm trở nên cứng hơn và chuẩn bị bề mặt cho công đoạn phủ men. Dải nhiệt độ thay đổi theo loại đất và quy trình của xưởng; sau khi nguội, kiểm tra sản phẩm trước khi phủ men.', 'Nung men (glaze firing): sau khi phủ men và làm sạch phần tiếp xúc với tấm kê, sản phẩm được nung theo dải nhiệt phù hợp với cả xương đất lẫn men. Trong quá trình này, men có thể nóng chảy và liên kết với bề mặt gốm. Để tránh hư hỏng, không dùng một mức nhiệt chung cho mọi công thức và luôn để lò nguội theo quy trình trước khi mở cửa.'] },
        { title: 'Bí Quyết Khắc Phục Lỗi Nứt Vỡ Từ Xưởng Lò', body: ['Kiểm soát độ dày: khi tạo hình, cố gắng giữ độ dày tương đối đồng đều và tránh chuyển tiếp quá gấp giữa đáy, thân và miệng.', 'Đồng đều độ ẩm khi ghép: trước khi gắn quai vào cốc, để quai và thân đạt trạng thái gần tương đương, thường là khô da. Làm nhám và dùng hồ đất phù hợp, sau đó che sản phẩm để mối nối khô từ từ.', 'Nâng nhiệt từ tốn: tuân theo biểu đồ nung đã được kiểm chứng cho loại đất và kích thước sản phẩm. Một số xưởng dùng tốc độ gia nhiệt chậm ở giai đoạn đầu; tốc độ cụ thể cần dựa trên lịch nung, không áp dụng con số duy nhất cho mọi lò.', 'Ghi nhật ký mẻ nung: lưu lại loại đất, độ dày, cách sấy, vị trí xếp lò và lịch nhiệt để đối chiếu khi phát sinh lỗi.'] },
        { title: 'Kiên Nhẫn Qua Từng Giai Đoạn', body: ['Mỗi loại đất, dáng gốm và chiếc lò đều có đặc tính riêng. Quan sát sản phẩm, thử nghiệm từng thay đổi nhỏ và ghi chép kết quả là cách thiết thực để người thợ hiểu vật liệu, hạn chế lỗi và hoàn thiện quy trình của mình.', 'Bạn yêu thích thế giới gốm thủ công? Hãy tiếp tục theo dõi chuyên mục Nhật Ký Xưởng Lò để khám phá những câu chuyện hậu trường, kỹ thuật chế tác và bí mật phía sau mỗi tác phẩm gốm được tạo nên từ đất, lửa và bàn tay nghệ nhân.'] }
      ] },
    { id: 'lo-cui-lo-dien', sec: 'lab', tag: 'Thiết bị', tags: ['lò củi', 'lò điện', 'nung'], title: 'Lò Nung Gốm: So Sánh Gốm Nung Củi Truyền Thống Và Lò Điện', excerpt: 'Lò củi tạo nên dấu ấn ngẫu hứng của tro và lửa; lò điện đem lại khả năng kiểm soát ổn định. Mỗi phương pháp mở ra một hướng sáng tạo riêng.', read: 9, date: '2026-10-11', author: 'CHẠM GỐM', views: 3010, seed: 4, thumb: { src: 'assets/lo-nung-cui-thumb.png', alt: 'Những chiếc bát gốm trong lò nung củi rực lửa' },
      body: ['Ngọn lửa là linh hồn của gốm, nhưng cách chúng ta tạo ra ngọn lửa ấy đang dần thay đổi theo dòng chảy thời gian. Sự giao thoa giữa giá trị truyền thống của lò nung gốm chạy bằng củi và tính tiện dụng của lò điện hiện đại tạo nên những trường phái chế tác mang dấu ấn riêng. Nếu lò củi gợi sự ngẫu hứng của tro bụi, lò điện đại diện cho khả năng kiểm soát và tính ổn định. Cùng CHẠM GỐM đặt hai phương pháp lên bàn cân để hiểu hơn hành trình “lửa thử vàng” của mỗi tác phẩm.'],
      sections: [
        { title: 'Gốm Nung Củi Truyền Thống: Bản Giao Hưởng Của Tro Và Lửa', body: ['Trong nhiều thế hệ, lò củi như lò bầu hay lò hộp giữ vai trò quan trọng ở các làng nghề gốm. Một mẻ nung có thể kéo dài nhiều giờ hoặc nhiều ngày tùy loại lò và cách làm; người thợ theo dõi màu lửa, điều chỉnh củi và quan sát diễn biến trong lò bằng kinh nghiệm tích lũy qua năm tháng.', 'Dấu ấn dễ nhận ra của lò củi là tro bay có thể bám lên bề mặt gốm. Ở điều kiện nhiệt độ thích hợp, tro và lớp men tương tác, tạo nên những vệt chảy, sắc độ và kết cấu khó lặp lại hoàn toàn. Mỗi vị trí trong lò chịu tác động khác nhau của nhiệt, ngọn lửa và tro, vì vậy các sản phẩm trong cùng một mẻ cũng có thể mang diện mạo riêng.', 'Người thợ có thể điều chỉnh lượng không khí và nhiên liệu để tạo môi trường oxy hóa hoặc khử. Khi điều kiện phù hợp với thành phần men, môi trường khử làm biến đổi sắc độ của một số oxit kim loại, cho ra những màu trầm và chiều sâu đặc trưng.'], image: { src: 'assets/lo-nung-cui-menh-lua.png', alt: 'Đồ gốm được nung trong lò củi với ánh lửa cam rực', caption: 'Nhiệt, tro và vị trí xếp lò cùng góp phần tạo nên dấu ấn riêng cho từng sản phẩm nung củi.' } },
        { title: 'Lò Nung Điện Hiện Đại: Kỷ Nguyên Của Sự Chuẩn Xác', body: ['Lò điện sử dụng các thanh điện trở để gia nhiệt và thường được điều khiển bằng bộ điều khiển điện tử. Người thợ có thể cài đặt các chặng tăng nhiệt, thời gian giữ nhiệt và chu trình làm nguội theo loại đất, men cũng như kích thước sản phẩm.', 'Khả năng lặp lại chu trình giúp lò điện phù hợp với xưởng studio, lớp học và những dòng sản phẩm cần màu men ổn định. Lò không đốt nhiên liệu trực tiếp tại chỗ nên không tạo khói từ quá trình đốt củi trong không gian xưởng; tuy vậy, vẫn cần lắp đặt đúng công suất, thông gió phù hợp và tuân thủ hướng dẫn an toàn của nhà sản xuất.', 'Lò điện thường tạo môi trường oxy hóa, do đó một số hiệu ứng men cần điều kiện khử sẽ không thể tái hiện theo cách nung củi nếu không sử dụng thiết bị chuyên dụng. Kết quả cuối cùng vẫn phụ thuộc vào cách xếp lò, độ chính xác của cảm biến, lịch nung và sự tương thích giữa đất với men.'], image: { src: 'assets/lo-nung-dien.png', alt: 'Các sản phẩm gốm được xếp trong một lò nung điện', caption: 'Lò điện cho phép cài đặt chu trình nhiệt phù hợp với từng loại đất và men.' } },
        { title: 'So Sánh Chi Tiết: Lò Củi Và Lò Điện', body: ['Không có phương pháp nào tốt nhất cho mọi mục đích. Lựa chọn phù hợp phụ thuộc vào phong cách tác phẩm, quy mô xưởng, nguồn lực vận hành và mức độ kiểm soát mà nghệ nhân mong muốn.'], table: { label: 'So sánh lò nung củi truyền thống và lò nung điện', headers: ['Tiêu chí', 'Lò nung củi truyền thống', 'Lò nung điện hiện đại'], rows: [
          ['Kiểm soát nhiệt độ', 'Dựa nhiều vào kinh nghiệm, quan sát và điều chỉnh trong suốt mẻ nung.', 'Có thể lập trình các chặng nhiệt; cần hiệu chỉnh và theo dõi thiết bị định kỳ.'],
          ['Bề mặt và màu men', 'Tro bay và biến đổi khí quyển có thể tạo hiệu ứng ngẫu hứng, độc bản.', 'Thường cho kết quả ổn định hơn trong điều kiện cùng lịch nung và cách xếp lò.'],
          ['Vận hành', 'Cần chuẩn bị nhiên liệu, thời gian và người có kinh nghiệm theo lò.', 'Ít thao tác trực tiếp trong chu trình; cần nguồn điện và lắp đặt phù hợp.'],
          ['Chi phí', 'Phụ thuộc loại củi, thời lượng nung, nhân lực và điều kiện địa phương.', 'Phụ thuộc công suất lò, biểu giá điện, thời lượng nung và hiệu suất thiết bị.'],
          ['Khả năng lặp lại', 'Khó tạo hai mẻ giống hệt nhau vì điều kiện lửa, tro và vị trí xếp lò thay đổi.', 'Dễ tái lập chu trình hơn, nhưng kết quả vẫn chịu ảnh hưởng của vật liệu và cách xếp lò.']
        ] } },
        { title: 'Xu Hướng Lựa Chọn Của Các Xưởng Gốm Hiện Nay', body: ['Sự xuất hiện của lò điện không làm mất đi giá trị của lò nung củi; hai phương pháp đang phục vụ những nhu cầu khác nhau. Xưởng sản xuất, không gian workshop và studio thường chọn lò điện nhờ khả năng chủ động lịch nung, độ tiện dụng và tính lặp lại của quy trình.', 'Trong khi đó, nhiều nghệ nhân theo đuổi gốm mỹ thuật, gốm trà đạo hoặc hiệu ứng tro vẫn gìn giữ lò củi như một phần trong thực hành sáng tác. Họ chấp nhận thời gian và độ bất định cao hơn để tìm kiếm dấu vết của lửa trên từng món gốm. Cũng có xưởng kết hợp cả hai, lựa chọn lò theo sản phẩm và hiệu ứng mong muốn.', 'Bạn yêu thích thế giới gốm thủ công? Hãy tiếp tục theo dõi chuyên mục Nhật Ký Xưởng Lò để khám phá những câu chuyện hậu trường, kỹ thuật chế tác và bí mật phía sau mỗi tác phẩm được tạo nên từ đất, lửa và bàn tay nghệ nhân.'], quote: 'Một chiếc lò cho ta khả năng kiểm soát; chiếc lò kia mời ta đối thoại với điều bất ngờ.' }
      ] },
    { id: 'nhat-ky-mau-gom-hong', sec: 'lab', tag: 'Rủi ro', tags: ['lỗi', 'kinh nghiệm', 'nung', 'lò điện'], title: 'Mẻ Gốm Hỏng: Bài Học Đắt Giá Về Chênh Lệch Nhiệt Độ Lò Nung', excerpt: 'Một mẻ nung gặp sai lệch nhiệt đã để lại sản phẩm biến dạng, men chưa chín và men chảy tràn — bài học về kiểm tra, ghi chép và vận hành lò an toàn.', read: 8, date: '2026-10-11', author: 'CHẠM GỐM', views: 2890, seed: 0, thumb: { src: 'assets/me-gom-hong-thumb.png', alt: 'Các sản phẩm gốm xếp trong lò nung đỏ rực' },
      body: ['Đằng sau những mẻ gốm thành công với lớp men hỏa biến là cả những lần thử sai. Nghề gốm đòi hỏi sự kiên nhẫn và cẩn trọng; đôi khi, một chu trình nung không như dự tính có thể làm hỏng nhiều sản phẩm cùng lúc. Câu chuyện về mẻ gốm gặp chênh lệch nhiệt độ này là lời nhắc để người làm nghề kiểm tra thiết bị, cách xếp lò và dữ liệu nung trước khi bắt đầu.'],
      sections: [
        { title: 'Ngày Ngọn Lửa “Nổi Giận”: Chuyện Từ Xưởng Lò', body: ['Đó là những ngày cuối năm, khi xưởng đang gấp rút hoàn thành đơn hàng bộ ấm chén quà tặng. Sau các công đoạn tạo hình, sửa dáng và tráng men, gần một trăm sản phẩm được đưa vào lò điện. Chu trình nung đã cài đặt theo lịch quen thuộc, với nhiệt độ đỉnh dự kiến khoảng 1.250°C — mức này chỉ phù hợp với một số loại đất và men nhất định.', 'Khi lò nguội đủ để mở theo hướng dẫn vận hành, người thợ phát hiện sản phẩm ở các vị trí khác nhau có biểu hiện trái ngược: một số món men khô, sần và chưa chảy đều; một số chiếc đĩa lại cong vênh, lớp men chảy tràn và dính vào tấm kê. Phần lớn mẻ nung không đạt yêu cầu, gây thiệt hại đáng kể cho xưởng.'], image: { src: 'assets/chenh-lech-nhiet-lo.png', alt: 'Ánh lửa mạnh trong lòng lò nung gốm', caption: 'Sau một chu trình nung, sai khác giữa các vùng trong lò có thể khiến sản phẩm cho kết quả không đồng đều.' } },
        { title: 'Phân Tích Nguyên Nhân Thất Bại', body: ['Sau khi ghi nhận vị trí xếp và tình trạng từng sản phẩm, đội ngũ rà soát lại cách đóng lò cùng dữ liệu vận hành. Không nên kết luận chỉ từ hình dạng phế phẩm: cần đối chiếu lịch nung, vị trí cảm biến, kết quả chóp nhiệt, tình trạng dây điện trở và đặc tính của đất, men để tìm nguyên nhân xác thực.', 'Trong tình huống này, hai yếu tố cần được xem xét là cách xếp lò quá dày và một vòng dây gia nhiệt có dấu hiệu hư hỏng. Sản phẩm xếp sát có thể cản trở lưu thông khí nóng và làm thay đổi phân bố nhiệt; dây điện trở hỏng cũng có thể khiến công suất gia nhiệt và độ đồng đều của lò suy giảm. Mức nhiệt thực tế tại mỗi vị trí còn phụ thuộc vào thiết kế lò, vị trí cảm biến, lịch nung và cách xếp tải.', 'Nếu một vùng nhận nhiệt không đủ, men có thể chưa đạt độ chín dự kiến; quá nhiệt hoặc giữ nhiệt quá lâu có thể làm men chảy nhiều, phồng rộp hoặc làm xương gốm biến dạng. Tuy nhiên, hiện tượng men rộp cũng có thể liên quan đến khí thoát ra từ xương đất, lớp men, bụi bẩn hoặc lịch nung; cần thử nghiệm và kiểm tra trước khi quy lỗi cho một nguyên nhân duy nhất.'], image: { src: 'assets/men-chay-tran.png', alt: 'Các sản phẩm gốm xếp gần nhau trong lò nung rực lửa', caption: 'Cách bố trí sản phẩm cần tuân theo hướng dẫn của lò và bảo đảm không cản trở vùng gia nhiệt.' } },
        { title: 'Dấu Hiệu Nhận Biết Lỗi Chênh Lệch Nhiệt Độ', body: ['Một số dấu hiệu dưới đây có thể giúp khoanh vùng vấn đề. Hãy ghi lại vị trí của từng món trong lò và so sánh với kết quả đo nhiệt, bởi chúng cũng có thể xuất phát từ phối liệu, tạo hình hoặc cách phủ men.'], list: [
          'Cong vênh: sản phẩm mất dáng, đặc biệt ở đĩa và khay rộng; có thể liên quan đến nhiệt quá cao, xương đất không phù hợp, cách kê đỡ hoặc độ dày không đồng đều.',
          'Men chưa chín, sần hoặc rộp: bề mặt có thể khô ráp do chưa đủ nhiệt; các nốt phồng và lỗ kim cũng có thể do khí thoát, lớp men hoặc chu trình nung.',
          'Men chảy tràn: men chảy khỏi bề mặt và dính vào tấm kê khi độ chảy, lượng men, nhiệt độ hoặc thời gian giữ vượt giới hạn của phối liệu.',
          'Màu men không đồng nhất: các sản phẩm cùng công thức cho sắc độ khác nhau giữa vị trí trong lò; cần đối chiếu vùng nhiệt, cách xếp và điều kiện khí quyển.'
        ] },
        { title: 'Cách Khắc Phục Và Bài Học Kinh Nghiệm', body: ['Sau sự cố, xưởng chuẩn hóa các bước trước và sau mỗi mẻ nung. Đây là những nguyên tắc chung; khoảng cách xếp, tải trọng tối đa, chu trình nung và lịch bảo trì phải theo tài liệu của nhà sản xuất, loại lò và phối liệu đang sử dụng.'], list: [
          'Xếp lò thông thoáng: phân bố sản phẩm phù hợp, tránh che khuất bộ phận gia nhiệt hoặc cản luồng khí. Không áp dụng một khoảng cách cố định cho mọi lò; tuân thủ hướng dẫn của nhà sản xuất và bảo đảm men không chạm tấm kê.',
          'Đối chiếu nhiệt bằng chóp đo nhiệt (pyrometric cones): đặt chóp phù hợp với dải nung tại các vị trí đại diện theo hướng dẫn sử dụng. Chóp phản ánh nhiệt công (heatwork), không phải phép đo chính xác một nhiệt độ duy nhất, nên cần đọc cùng dữ liệu bộ điều khiển và cảm biến.',
          'Kiểm tra, bảo trì thiết bị: kiểm tra dây điện trở, cảm biến, rơ-le và lớp cách nhiệt theo lịch bảo trì của nhà sản xuất; dừng sử dụng và nhờ kỹ thuật viên có chuyên môn kiểm tra nếu phát hiện hư hỏng điện hoặc bất thường.',
          'Ghi nhật ký mẻ nung: lưu loại đất và men, cách xếp, vị trí sản phẩm, biểu đồ nhiệt, kết quả chóp và lỗi quan sát được. Thử thay đổi từng yếu tố trên mẻ nhỏ để kiểm chứng trước khi sản xuất số lượng lớn.'
        ] },
        { title: 'Đứng Lên Sau Mỗi Mẻ Nung', body: ['Một mẻ hỏng là tổn thất thật, nhưng cũng cho thấy điều gì cần được kiểm tra kỹ hơn ở lần nung tiếp theo. Kiên nhẫn thu thập dữ liệu, đối chiếu dấu hiệu và tuân thủ hướng dẫn an toàn giúp xưởng hạn chế rủi ro thay vì chỉ dựa vào phỏng đoán.', 'Bạn yêu thích thế giới gốm thủ công? Hãy tiếp tục theo dõi chuyên mục Nhật Ký Xưởng Lò để khám phá những câu chuyện hậu trường, kỹ thuật chế tác và bí mật phía sau mỗi tác phẩm được tạo nên từ đất, lửa và bàn tay nghệ nhân.'], quote: 'Mỗi mẻ nung để lại một bài học — nếu ta ghi lại và chịu khó lắng nghe.' }
      ] },
    { id: 'dap-noi-cham-khac', sec: 'lab', tag: 'Kỹ thuật', tags: ['kỹ thuật', 'đất mộc', 'chạm khắc', 'đắp nổi'], title: 'Kỹ Thuật Chạm Khắc Gốm Và Đắp Nổi Trên Xương Đất Mộc', excerpt: 'Tìm hiểu cách chọn độ ẩm, dụng cụ, kỹ thuật khắc chìm và đắp nổi để trang trí gốm mộc bền đẹp.', read: 9, date: '2026-10-11', author: 'CHẠM GỐM', views: 2470, seed: 1, thumb: { src: 'assets/cham-khac-thumb.png', alt: 'Nghệ nhân dùng dụng cụ chạm khắc hoa văn trên bình gốm mộc' },
      body: ['Trong hành trình chế tác gốm thủ công, nếu kỹ thuật vuốt bàn xoay kiến tạo nên hình dáng thì nghệ thuật đắp nổi và chạm khắc giúp thổi hồn vào tác phẩm. Những đường nét chìm nổi trên bề mặt xương đất mộc vừa thể hiện kỹ năng của nghệ nhân, vừa gửi gắm câu chuyện và dấu ấn riêng. Cùng CHẠM GỐM khám phá kỹ thuật trang trí trên đất sét, nơi sự tỉ mỉ biến một bề mặt mộc thành tác phẩm giàu cảm xúc.'],
      sections: [
        { title: 'Xương Đất Mộc Là Gì? Thời Điểm Vàng Để Chạm Khắc Gốm', body: ['Xương đất mộc là sản phẩm đã tạo hình nhưng chưa trải qua lần nung đầu tiên. Trạng thái của đất thay đổi liên tục khi khô, vì vậy chọn đúng thời điểm giúp thao tác thuận lợi và giảm nguy cơ làm méo hoặc nứt sản phẩm.', 'Đất còn quá ướt dễ biến dạng dưới lực tay; đất quá khô lại giòn, dễ sứt và khó tạo đường cắt mượt. Trạng thái “khô da” (leather-hard) thường thích hợp cho nhiều thao tác khắc và gắn chi tiết: bề mặt đã se, giữ dáng tốt nhưng vẫn còn đủ ẩm để dụng cụ cắt gọt. Độ ẩm phù hợp cụ thể tùy loại đất, độ dày và kỹ thuật, nên hãy thử trên mẫu nhỏ trước khi làm trên sản phẩm hoàn chỉnh.'] },
        { title: 'Bộ Dụng Cụ “Hành Nghề” Điêu Khắc Gốm', body: ['Không cần một bộ đồ nghề phức tạp để bắt đầu; hãy chọn dụng cụ sạch, phù hợp với độ cứng của đất và thao tác mong muốn. Một số dụng cụ thường dùng gồm:'], list: [
          'Dao vòng (loop tool): nạo bớt đất, tạo rãnh hoặc gọt nhẹ bề mặt.',
          'Kim nhọn: rạch nét mảnh, đánh dấu đường viền hoặc tạo họa tiết chấm.',
          'Dao tỉa: cắt gọt phần đất thừa và làm rõ cạnh; thao tác nhẹ để tránh cắt quá sâu.',
          'Cọ mềm và mút ẩm: phủi vụn đất, làm sạch hoặc làm mịn bề mặt một cách tiết chế.',
          'Hồ đất (slip): hỗn hợp đất và nước tương thích với thân gốm, thường dùng khi gắn thêm chi tiết.'
        ] },
        { title: 'Kỹ Thuật Khắc Chìm (Carving): Nghệ Thuật Của Sự Tiết Chế', body: ['Khắc chìm là lấy đi một phần đất trên bề mặt để tạo đường nét hoặc mảng lõm. Độ sâu và bề rộng của nét khắc cần cân đối với độ dày thành gốm; đường khắc quá sâu có thể làm thành yếu hoặc thủng. Khi phủ men, màu sắc và độ tụ men trong rãnh phụ thuộc công thức men, cách phủ và lịch nung, nên hiệu ứng thực tế có thể khác nhau giữa các loại men.', 'Có thể bắt đầu bằng những đường phác nhẹ trên bề mặt đất đã se. Sau đó, dùng dao vòng hoặc dụng cụ khắc phù hợp đi theo nét vẽ với lực đều, lấy đất từng lớp mỏng thay vì cố khoét sâu trong một lần.'], list: [
          'Phác thảo: đánh dấu nhẹ hoa văn như hoa lá, sóng nước hoặc hình học; tránh ấn sâu làm biến dạng bề mặt.',
          'Khắc nét: dùng dụng cụ phù hợp, giữ tay ổn định và kiểm tra độ sâu thường xuyên, nhất là ở thành mỏng.',
          'Làm sạch: dùng cọ mềm phủi vụn đất; hạn chế chà bằng nước quá nhiều vì có thể làm nhòe hoặc mềm vùng khắc.'
        ], quote: 'Chạm khắc không chỉ là lấy đi phần đất thừa, mà còn là kiên nhẫn tìm ra vẻ đẹp đang ẩn trong khối đất mộc.' },
        { title: 'Kỹ Thuật Đắp Nổi: Kiến Tạo Chiều Sâu Ba Chiều', body: ['Đắp nổi là gắn thêm đất lên thân sản phẩm để tạo hình khối nổi. Mối ghép bền phụ thuộc vào độ ẩm tương thích, bề mặt tiếp xúc, loại đất và quá trình làm khô; chỉ quét hồ lên bề mặt nhẵn thường chưa đủ để tạo liên kết chắc chắn.'], list: [
          'Tạo chi tiết: nặn hoặc tạo khuôn chi tiết từ đất tương thích với thân gốm; tránh làm chi tiết quá dày so với nền.',
          'Cào xước (scoring): tạo vết xước nhẹ trên cả vị trí gắn và mặt sau chi tiết, không làm rách hoặc phá yếu thành gốm.',
          'Dùng hồ đất: thoa một lớp hồ vừa đủ lên vùng tiếp xúc đã cào xước; hồ nên có thành phần đất tương thích.',
          'Gắn và miết: ép nhẹ để hai mặt tiếp xúc tốt, miết kín viền và loại bỏ khe hở. Đỡ phần nhô ra nếu chi tiết nặng hoặc có nguy cơ kéo lệch.'
        ], image: { src: 'assets/dap-noi-gom.png', alt: 'Nghệ nhân tạo hoa văn đắp nổi trên bình gốm lớn', caption: 'Chi tiết nổi cần được gắn chắc và có độ dày phù hợp với thân gốm.' } },
        { title: 'So Sánh Hai Kỹ Thuật Trang Trí Gốm Mộc', body: ['Khắc chìm và đắp nổi đều có thể tạo nhịp điệu, chiều sâu cho bề mặt, nhưng khác nhau ở cách tác động lên đất. Bảng dưới đây tóm tắt đặc điểm để bạn chọn hướng thể hiện phù hợp.'], table: { label: 'So sánh kỹ thuật khắc chìm và đắp nổi', headers: ['Đặc điểm', 'Khắc chìm (Carving)', 'Đắp nổi (Sprigging)'], rows: [
          ['Bản chất', 'Lấy bớt đất khỏi bề mặt để tạo rãnh và mảng lõm.', 'Gắn thêm đất lên bề mặt để tạo chi tiết nổi.'],
          ['Hiệu ứng', 'Tạo đường nét âm; biểu hiện sau phủ men tùy thuộc men và lịch nung.', 'Tạo khối và bóng đổ; lớp men có thể tích tụ khác nhau trên bề mặt khối.'],
          ['Rủi ro thường gặp', 'Khắc quá sâu làm mỏng hoặc thủng thành gốm.', 'Mối ghép nứt hoặc bong nếu độ ẩm và thao tác gắn không phù hợp.'],
          ['Điểm cần chú ý', 'Kiểm soát lực tay và độ sâu theo độ dày sản phẩm.', 'Đồng bộ độ ẩm, cào xước và miết kín vùng tiếp xúc.']
        ] } },
        { title: 'Bí Quyết Hạn Chế Nứt Vỡ Sau Khi Trang Trí', body: ['Các phần đất khác độ ẩm hoặc độ dày có thể khô và co ngót không đồng đều, làm xuất hiện vết nứt quanh mối ghép. Hãy để chi tiết và thân gốm đạt trạng thái gần nhau trước khi gắn; dùng lượng hồ vừa đủ và miết kín đường nối. Sau khi hoàn thiện, che sản phẩm lỏng để quá trình khô diễn ra từ từ, đặc biệt với chi tiết dày hoặc phần nhô ra. Tránh hong nóng hoặc phơi nắng gắt đột ngột.', 'Khi sản phẩm khô đồng đều, kiểm tra kỹ các mối ghép và làm theo quy trình nung sơ phù hợp với loại đất. Độ dày, kích thước và lịch nung cần căn cứ vào vật liệu và hướng dẫn của xưởng; ghi lại những điều chỉnh để có thể rút kinh nghiệm qua từng mẻ.', 'Nghệ thuật trang trí trên xương đất mộc là khoảng thời gian tĩnh tại, nơi tâm trí tập trung vào từng nét khắc và mảng đất. Bạn yêu thích thế giới gốm thủ công? Hãy tiếp tục theo dõi chuyên mục Nhật Ký Xưởng Lò để khám phá kỹ thuật chế tác và những câu chuyện phía sau mỗi tác phẩm.'], quote: 'Mỗi đường nét trên đất mộc bắt đầu từ sự quan sát, rồi hoàn thiện bằng đôi tay kiên nhẫn.' }
      ] }
  ];

  const tagList = ['đất sét', 'men', 'hỏa biến', 'nung', 'lò củi', 'lò điện', 'bàn xoay', 'kỹ thuật', 'quy trình', 'kinh nghiệm'];

  const projects = [
    { id: 'manh-gom-no-hoa', name: 'Mảnh Gốm Nở Hoa', tag: 'Dự án chủ lực', seed: 0, thumb: { src: 'assets/manh-gom-no-hoa-thumb.png', alt: 'Các em nhỏ làng nghề vui vẻ bên khung cửa gỗ' }, lead: 'Biến những mảnh gốm vỡ thành tranh ghép và trang sức, dành toàn bộ lợi nhuận cho quỹ học bổng trẻ em làng nghề.', story: 'Năm đầu tiên, nhóm tình nguyện chỉ có sáu người và vài thùng mảnh gốm nhặt ở lò. Họ ngồi xếp mảnh thành hoa, rồi đem bán trong chợ phiên cuối tuần. Giờ đây, mỗi mảnh vỡ góp một phần học phí cho em nhỏ.', results: [{ n: 128, l: 'học bổng đã trao' }, { n: 3200, l: 'mảnh gốm được tái sinh' }, { n: 14, l: 'làng nghề tham gia' }] },
    { id: 'lop-hoc-mien-phi', name: 'Lớp học miễn phí cho trẻ em yếu thế', tag: 'Giáo dục', seed: 1, thumb: { src: 'assets/lop-hoc-mien-phi-thumb.png', alt: 'Em nhỏ chăm chú tập nặn gốm trên bàn xoay' }, lead: 'Mỗi cuối tuần, các nghệ nhân dạy nặn gốm miễn phí cho trẻ em có hoàn cảnh khó khăn.', story: 'Nhiều em chưa từng chạm tay vào đất. Sau vài buổi, các em nặn được chiếc cốc đầu tiên — và đôi mắt sáng lên khi tự tay cầm sản phẩm ra lò. Lớp học không chỉ dạy nghề, mà còn dạy sự tự tin.', results: [{ n: 320, l: 'em nhỏ tham gia' }, { n: 48, l: 'buổi học mỗi năm' }, { n: 12, l: 'nghệ nhân tình nguyện' }] },
    { id: 'gom-ban-quy', name: 'Bộ sưu tập Gieo Mầm', tag: 'Thiện nguyện', seed: 2, thumb: { src: 'assets/gom-ban-quy-thumb.png', alt: 'Các sản phẩm gốm thủ công được trưng bày trên kệ' }, lead: 'Bộ sưu tập gốm do nghệ nhân tặng, 100% doanh thu dành cho quỹ cộng đồng.', story: 'Mỗi mùa, các nghệ nhân quyên tặng những tác phẩm tâm đắc để bán gây quỹ minh bạch. Toàn bộ doanh thu hỗ trợ “Chạm Cảm Xúc” — các lớp học làm gốm trị liệu miễn phí dành cho trẻ em yếu thế.', results: [{ n: 450, l: 'món gốm được bán' }, { n: 620, l: 'triệu đồng gây quỹ' }, { n: 100, l: '% doanh thu vào quỹ' }] },
    { id: 'tai-che-manh-vo', name: 'Tái chế mảnh gốm vỡ', tag: 'Môi trường', seed: 3, thumb: { src: 'assets/tai-che-manh-vo-thumb.png', alt: 'Hai người đang phân loại và làm việc với các sản phẩm gốm' }, lead: 'Nghiền, tái sử dụng và ghép mảnh vỡ thành vật liệu mới, giảm rác thải từ các lò gốm.', story: 'Mỗi mẻ nung luôn có phế phẩm. Thay vì chôn lấp, nhóm thu gom, nghiền nhỏ làm cốt liệu cho men và đất, hoặc ghép thành mặt bàn, gạch lát và đồ decor.', results: [{ n: 6, l: 'tấn gốm vỡ được tái sử dụng' }, { n: 9, l: 'sản phẩm tái chế mới' }, { n: 22, l: 'xưởng đồng hành' }] },
    { id: 'dat-set-den-truong-que', name: 'Đất sét đến trường quê', tag: 'Giáo dục', seed: 4, thumb: { src: 'assets/dat-set-den-truong-thumb.png', alt: 'Nghệ nhân hướng dẫn trang trí một chiếc bình gốm lớn' }, lead: 'Mang đất sét, bàn xoay và nghệ nhân đến các trường tiểu học vùng xa.', story: 'Xe tải nhỏ chở theo hai bàn xoay, vài thùng đất và một lò nung mini. Cả sân trường biến thành xưởng gốm trong một ngày, và các em mang về những chiếc bát nhỏ nặn bằng tay mình.', results: [{ n: 18, l: 'trường đã đến' }, { n: 2400, l: 'học sinh trải nghiệm' }, { n: 5, l: 'bộ dụng cụ được tặng' }] },
    { id: 'trien-lam-thien-nguyen', name: 'Triển lãm Thiện nguyện Thường niên', tag: 'Nghệ thuật', seed: 0, thumb: { src: 'assets/trien-lam-thien-nguyen-thumb.png', alt: 'Không gian triển lãm trưng bày các tác phẩm gốm thủ công' }, lead: 'Triển lãm thường niên: mỗi tác phẩm là một câu chuyện, mỗi vé vào cửa là một phần quỹ cộng đồng.', story: 'Triển lãm quy tụ tác phẩm của nghệ nhân, họa sĩ và cả những học viên nhỏ tuổi. Không gian xưởng trở thành gallery nghệ thuật kết hợp trà mộc và nhạc Acoustic.', results: [{ n: 4, l: 'mùa triển lãm' }, { n: 6800, l: 'lượt khách tham quan' }, { n: 210, l: 'tác phẩm được trưng bày' }] },
    { id: 'gom-va-song-xanh', name: 'Gốm Và Sống Xanh', tag: 'Lối sống', seed: 1, thumb: { src: 'assets/gom-va-song-xanh-thumb.png', alt: 'Những món gốm dùng hằng ngày được bày trên kệ' }, lead: 'Khuyến khích dùng ly, chén, bình bằng gốm thay đồ nhựa dùng một lần, ngay từ quán cà phê đầu ngõ.', story: 'Nhóm làm việc với các quán cà phê nhỏ, thiết kế bộ ly gốm riêng cho từng quán. Khách mang ly cũ đổi lấy một lần tặng đồ uống; ly vỡ được thu về để tái chế trong dự án Tái chế mảnh gốm vỡ.', results: [{ n: 35, l: 'quán cà phê đồng hành' }, { n: 12000, l: 'ly nhựa được thay thế' }, { n: 800, l: 'khách mang ly riêng' }] }
  ];

  const projectDetails = {
    'manh-gom-no-hoa': {
      purpose: 'Biến phế phẩm sau mỗi mẻ lò thành tác phẩm nghệ thuật, giảm rác thải gốm sứ khó phân hủy, tôn vinh vẻ đẹp của sự không hoàn hảo và gây quỹ giáo dục dài hạn.',
      beneficiaries: 'Trẻ em có hoàn cảnh khó khăn tại các làng nghề gốm truyền thống Bát Tràng, Phù Lãng và Chu Đậu.',
      operation: [
        'Xưởng thiết lập các điểm thu gom mảnh gốm vỡ và sản phẩm lỗi men từ những lò nung đối tác.',
        'Tình nguyện viên làm sạch, phân loại theo dải màu và độ dày, đồng thời mài nhẵn cạnh sắc để bảo đảm an toàn.',
        'Những phế phẩm được tái chế thành các tác phẩm nghệ thuật; lợi nhuận từ dòng sản phẩm này được đưa vào Quỹ học bổng CHẠM.'
      ],
      impact: 'Quỹ học bổng hỗ trợ học phí, xe đạp đến trường và sách vở đầu năm học, giúp gia đình thợ lò vơi bớt gánh nặng sinh kế.'
    },
    'gom-ban-quy': {
      purpose: 'Tôn vinh tay nghề thủ công bậc thầy và xây dựng nguồn tài chính ổn định cho các dự án trị liệu tâm lý bằng nghệ thuật dành cho trẻ em yếu thế.',
      beneficiaries: 'Trẻ tự kỷ, trẻ khiếm thị và trẻ mồ côi tại các trung tâm bảo trợ xã hội, Làng trẻ SOS.',
      operation: [
        'Nghệ nhân thâm niên và thợ bậc thầy tự nguyện chế tác, hiến tặng những tác phẩm tâm đắc, thường là gốm vuốt tay độc bản, men hỏa biến hoặc men rạn cổ.',
        'Tác phẩm được trưng bày tại khu vực riêng của Tiệm Gốm và trên website. Mỗi món đi kèm chứng nhận độc bản cùng thông điệp viết tay của nghệ nhân.',
        'Toàn bộ số tiền bán gốm được đóng góp cho tổ chức thiện nguyện.'
      ],
      impact: 'Doanh thu duy trì dự án “Chạm Cảm Xúc” — chuỗi lớp học làm gốm trị liệu miễn phí. Qua việc nhào nặn đất sét, trẻ được xoa dịu tinh thần, biểu đạt cảm xúc và rèn luyện sự tập trung trong không gian an toàn, thấu cảm.'
    },
    'trien-lam-thien-nguyen': {
      purpose: 'Tổng kết hành trình sáng tạo trong năm, kết nối cộng đồng yêu gốm và gây quỹ tập trung cho chiến dịch mùa đông.',
      beneficiaries: 'Học sinh tại các điểm trường miền núi đặc biệt khó khăn ở Hà Giang, Lai Châu và Điện Biên.',
      operation: [
        'Triển lãm diễn ra vào tháng 12 hằng năm. Không gian xưởng được cải tạo thành gallery nghệ thuật, kết hợp trà mộc và nhạc Acoustic nhẹ nhàng.',
        'Trưng bày các tác phẩm nổi bật của nghệ nhân cùng những bài tốt nghiệp ấn tượng của học viên khóa dài hạn.',
        'Mỗi tác phẩm kể một câu chuyện; vé vào cửa góp vào quỹ cộng đồng.'
      ],
      impact: 'Nguồn thu được giải ngân 100% cho chiến dịch “Mùa đông có nắng”. Đội ngũ xưởng trực tiếp khảo sát, thi công “Thư viện Chạm” với tủ sách, truyện tranh, dụng cụ học tập và trao áo ấm, chăn bông cho trẻ em vùng cao trước mùa rét đậm.'
    }
  };

  return { categories, products, productCats, workshops, workshopDetails, schedule, courses, courseDetails, courseBenefits, village, lab, tagList, projects, projectDetails };
})();