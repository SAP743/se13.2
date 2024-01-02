# Khái niệm
Blockchain là một công nghệ lưu trữ và truyền tải thông tin một cách an toàn và minh bạch. Nó là một loại hệ thống phân tán, trong đó thông tin
được lưu trữ trong các khối (blocks) và mỗi khối được liên kết với nhau thông qua các liên kết mã hóa (cryptographic hash). Blockchain được xem
như một cuốn sổ giao dịch công cộng (public ledger), nơi mọi giao dịch được ghi lại và không thể thay đổi sau khi được xác nhận.

Lịch sử của blockchain bắt đầu vào năm 2008, khi một người hoặc một nhóm người sử dụng bí danh Satoshi Nakamoto công bố bài viết mô tả một hệ thống
tiền điện tử gọi là Bitcoin và công nghệ blockchain đằng sau nó. Bitcoin là tiền điện tử đầu tiên được xây dựng trên nền tảng blockchain và đã trở
thành ứng dụng tiêu biểu của công nghệ này. 

Sau khi công bố bài viết, vào năm 2009, Satoshi Nakamoto phát hành phiên bản đầu tiên của phần mềm Bitcoin, mở đường cho việc triển khai blockchain
thực tế. Blockchain của Bitcoin được thiết kế để giải quyết vấn đề kép chuẩn hóa giao dịch trong một mạng phân tán mà không cần sự tin cậy vào bên thứ ba.

Kể từ đó, nhiều loại blockchain khác nhau đã được phát triển với các ứng dụng và tính năng đa dạng. Ethereum, được ra mắt vào năm 2015, là một ví dụ tiêu
biểu. Ethereum không chỉ hỗ trợ tiền điện tử như Bitcoin mà còn cung cấp một nền tảng để phát triển và triển khai các ứng dụng phi tập trung (decentralized
applications - DApps) thông qua hợp đồng thông minh (smart contracts).

Blockchain đã thu hút sự quan tâm lớn từ các ngành công nghiệp khác nhau. Nó có tiềm năng ứng dụng rộng rãi trong lĩnh vực tài chính, chuỗi cung ứng, quản lý
dữ liệu y tế, bầu cử điện tử, quản lý sở hữu trí tuệ, và nhiều lĩnh vực khác. Việc sử dụng blockchain giúp tăng tính minh bạch, đảm bảo tính toàn vẹn dữ liệu
và loại bỏ sự phụ thuộc vào bên thứ ba trong các hệ thống truyền thống.

Tuy nhiên, blockchain cũng đối mặt với một số thách thức như vấn đề về quyền riêng tư, khả năng mở rộng, và tiêu thụ năng lượng cao. Các nhà nghiên cứu và các
doanh nghiệp tiếp tục nghiên cứu và phát triển blockchain để tìm ra các giải pháp cho những thách thức này và mở rộng phạm vi ứng dụng của công nghệ này trong
tương lai.

# Cơ chế đồng thuận
## Thuật toán đồng thuận Block chain là gì?
huật toán đồng thuận blockchain là một quy tắc hoặc cơ chế để các node tuân theo, nhằm đảm bảo các giao dịch được thực hiện trên blockchain là chính xác, minh bạch và giống nhau trên tất cả các node của mạng.

Cách hoạt động của cơ chế đồng thuận trên blockchain
Về bản chất, blockchain bao gồm nhiều node kết hợp lại tạo ra một mạng lưới. Để một giao dịch được ghi lại trên blockchain, nó phải được xác thực đồng thời bởi tất cả các node trên mạng lưới dựa trên cơ chế đồng thuận. 

Trước tiên, cần hiểu rằng cấu trúc của blockchain bao gồm nhiều block (khối) liên kết với nhau và tạo thành một chain (chuỗi). Mỗi block sẽ chứa thông tin về mã băm (hash) của khối trước đó. Mã hash này được tạo ra dựa trên các thông tin đầu vào đã được xác định sẵn của một khối, bao gồm cả thông tin giao dịch đã được xác thực bởi node.

Khi người dùng thực hiện một giao dịch, các node sẽ dựa trên thuật toán đồng thuận của blockchain (như PoS, PoW, PoA…) để xác thực và ghi giao dịch vào khối mới trên blockchain. Sau đó, tất cả các node đều phải tải xuống thông tin về khối giao dịch mới được xác thực, để đảm bảo tính thống nhất và toàn vẹn dữ liệu trên mạng lưới. 

Thuật toán đồng thuận cũng giúp việc thay đổi dữ liệu trên blockchain là không thể:
-	Khi một block bị thay đổi dữ liệu thì mã hash của block cũng bị thay đổi theo. 
-	Chúng sẽ được so sánh với dữ liệu của khối khác để đảm bảo tính đúng đắn và phù hợp giữa mã hash của khối trước và sau nó. 
-	Nếu thấy có sự khác biệt, dữ liệu kia sẽ không được phép ghi vào blockchain.

## Các thuật toán đồng thuận blockchain phổ biến 
1.	Proof of Work (PoW)
Proof of Work (PoW) hay bằng chứng công việc là cơ chế đồng thuận phi tập trung đầu tiên, được sử dụng để bảo mật blockchain Bitcoin.
PoW yêu cầu các node sử dụng sức mạnh tính toán của máy tính để giải các bài toán và tạo ra mã hash. Node đầu tiên giải bài toán và giành quyền xác thực giao dịch thì sẽ được nhận phần thưởng là đồng coin native của blockchain (ví dụ như BTC, ETH). Quá trình này được gọi là “mining” (đào coin), và node này được gọi là miner node (thợ đào).
Nếu một miner node giải bài toán, xác thực và ghi giao dịch lên khối mới, khối này sẽ được gửi tới tất cả các node khác trong mạng lưới. Khi có đủ số lượng node xác thực khối, chúng sẽ đạt được sự đồng thuận và giao dịch sẽ được xử lý. 

Tuy nhiên, PoW sẽ có một số nhược điểm như: 
-	PoW sử dụng sức mạnh máy tính để bảo mật cho blockchain, do đó yêu cầu điện năng tiêu thụ lớn và chi phí đắt đỏ cho các phần cứng bắt buộc.
-	Một block trên blockchain PoW cần nhiều thời gian hơn để được tạo ra và xác thực, khiến cho thuật toán này kém hiệu quả và tốn tài nguyên hơn các thuật toán đồng thuận khác.

2.	Proof of Stake (PoS)
Proof of Stake (PoS) hay bằng chứng cổ phần, thay vì sử dụng sức mạnh máy tính, Proof of Stake yêu cầu các node tham gia xác thực giao dịch phải đặt cược (stake) một số lượng nhất định đồng coin native của blockchain để giành quyền tham gia xác thực và tạo khối. 
Số token này nhằm đảm bảo các node hoạt động tốt, tức là nếu node đó offline quá lâu hoặc có những hành vi gian lận, số token đã stake có thể bị thu một phần hoặc mất toàn bộ tuỳ thuộc vào mức độ và quy định slashing (phạt).
Trong cơ chế PoS, node sẽ đóng vai trò là các validator thay vì miner như trong PoW.
Các validator trong mạng lưới PoS sẽ nhận được phí giao dịch làm phần thưởng. Khi một giao dịch diễn ra, các validator sẽ được chọn để xác thực giao dịch dựa trên số lượng token và thời gian stake.
Với cách hoạt động trên, Proof of Stake là thuật toán tiết kiệm chi phí, thân thiện với môi trường hơn Proof of Work.

3.	Delegated Proof of Stake (DPoS)
Delegated Proof of Stake (DPoS) hay bằng chứng uỷ quyền cổ phần, là thuật toán đồng thuận được phát triển từ Proof of Stake.
Thay vì trở thành validator, DPoS cho phép người nắm giữ token (holder) stake token và chọn một người đại diện (delegator) để uỷ quyền xác thực giao dịch, duy trì bảo mật cho blockchain. Đổi lại, holder sẽ được chia sẻ phần thưởng từ việc gián tiếp vận hành mạng lưới. 
Thông thường, delegator sẽ được chọn dựa trên danh tiếng (chứ không phải tài sản) của họ và có số lượng giới hạn khoảng 20-100 delegator trên mỗi block. 
So với PoS, DPoS được đánh giá là nhanh hơn và hiệu suất tốt hơn. DPoS giúp đảm bảo sự minh bạch, công bằng và đáng tin cậy thông qua việc liên tục thực hiện các hoạt động bỏ phiếu và xáo trộn trong hệ thống, nhằm đảm bảo những delegator được chọn là trung thực và có trách nhiệm.

4.	Proof of Authority (PoA)
Proof of Authority (PoA) hay bằng chứng uỷ quyền là thuật toán đồng thuận dựa trên danh tiếng, phát triển dựa trên Proof of Stake. 
Thay vì stake coin, validator stake “uy tín” của mình để được tham gia vào mạng lưới node xác thực giao dịch và khối của blockchain, đồng thời đóng vai trò như là những người vận hành của hệ thống.
PoA đề cao giá trị danh tính, tức là những người được chọn để trở thành validator phải thật sự đáng tin cậy. Điều này khiến cho các blockchain PoA phải đối mặt với sự đánh đổi giữa tính phi tập trung và khả năng mở rộng:
Vì tính chất chỉ lựa chọn những người uy tín và có danh tiếng, blockchain PoA thường có ít validator node, dẫn đến việc ít phi tập trung hơn so với những thuật toán đồng thuận khác.
PoA có số lượng validator giới hạn, giúp giảm thời gian xác nhận giao dịch, tăng thông lượng và khả năng mở rộng cho mạng lưới.
Nói cách khác, thuật toán đồng thuận PoA sẽ phù hợp hơn với các hệ thống tập trung.

# Ứng dụng của Blockchain


- Tài chính – Ngân hàng
•	Xác thực thông tin khách hàng, khả năng tín dụng trực tiếp mà không cần qua trung gian
•	Tính bảo mật cao và tiện lợi với các công nghệ xác minh danh tính, thanh thanh toán nhanh chóng và cập nhật giao dịch liên tục
•	Quản lý và hạn chế rủi ro về trục trặc kỹ thuật và vỡ nợ trước khi thực hiện giao dịch
•	Hệ thống quản lý thông minh cho phép các tính năng liên tục đổi mới và cải tiến dựa trên sự chấp thuận của tất cả người dùng trong chuỗi
- Giáo dục
•	Theo dõi và lưu trữ dữ liệu học tập của học sinh, sinh viên như: Bảng điểm, trường đại học, trường dạy nghề, chứng chỉ,….
•	Đánh giá mức độ phù hợp của ứng viên trong quá trình đào tạo, từ đó sẽ có những điều chỉnh hợp lý
•	Đánh giá năng lực của cá nhân so với yêu cầu đầu vào dựa trên dữ liệu học vấn đã được nghi lại
•	Quản lý mức độ đánh giá sự uy tín trong các bài nghiên cứu khoa học
- Sản xuất
•	Quản lý các kho bãi sản xuất, hàng tồn kho
•	Kiểm soát nguồn cung nguyên liệu trong chuỗi cung ứng
•	Theo dõi số lượng hàng mua vào và bán ra, kiểm tra quy trình sản xuất 
•	Truy xuất nguồn gốc hàng hóa, sản phẩm
- Y tế
•	Liên kết và phát triển ứng quản lý chất lượng và quản lý bệnh lý
•	Kiểm soát chuỗi cung ứng thuốc và vật tư y tế như theo dõi nguồn đầu vào, nguồn gốc và hạn sử dụng của các trang thiết bị y tế
•	Đảm bảo tính minh bạch và khả năng tự động hóa đối với giao dịch khám chữa bệnh, quyền sở hữu dữ liệu tình trạng sức khỏe của người bệnh, kết quả xét nghiệm lâm sàng
Bên cạnh đó, ứng dụng blockchain còn xuất hiện trong nhiều lĩnh vực khác như thương mại điện tử, an ninh mạng, bất động sản,… Sự phổ biến của công nghệ blockchain là rất lớn, với những tín hiệu thực tế hiện nay rất có thể công nghệ này sẽ đi vào từng ngóc ngách của đời sống con người.


# Ưu điểm của Công Nghệ Blockchain:
1.	Tính Toàn Vẹn:
•	Dữ liệu được thêm vào chuỗi khối và liên kết với các khối trước, đảm bảo tính toàn vẹn.
•	Sửa đổi dữ liệu yêu cầu chỉnh sửa từ khối hiện tại đến khối đầu tiên.
2.	Tính Phi Tập Trung:
•	Lưu trữ thông tin giao dịch trên nhiều máy tính thay vì trên một server tập trung.
•	Mạng lưới có thể phân tán và không yêu cầu sự tập trung.
3.	Tính Minh Bạch:
•	Bản sao của Blockchain trên nhiều Node trên thế giới, tăng cường tính minh bạch.
Nhược Điểm của Công Nghệ Blockchain:
1.	Khó Khăn Trong Sửa Đổi Dữ Liệu:
•	Quá trình phức tạp khi muốn sửa đổi dữ liệu trong một khối.
2.	Cá Nhân Hóa:
•	Rủi ro khi người dùng mất chìa khóa cá nhân, không có cơ sở để khôi phục tài sản.
3.	Không Hiệu Quả:
•	Hệ thống Proof of Work có thể tốn nhiều năng lượng và không hiệu quả.
•	Cạnh tranh giữa các thợ đào có thể làm lãng phí công sức.
4.	Mạng Lưới Lưu Trữ Quá Tải:
•	Dung lượng lưu trữ của Blockchain Bitcoin có thể vượt quá khả năng của các Node, dẫn đến mất mát node và vấn đề về dung lượng.

# Nguyên lý hoạt động
## Nguyên lý mã hoá 
Blockchain mã hóa là một phần quan trọng trong cách hoạt động của công nghệ blockchain. Nó không chỉ đảm bảo tính bảo mật mà còn duy trì tính minh
bạch và không thể thay đổi của dữ liệu. Dưới đây là một số nguyên lý cơ bản về cách blockchain sử dụng mã hóa:

**1.Mã Hóa Hàm Băm (Hashing):**
Mỗi khối trong blockchain chứa một hàm băm duy nhất.
Hàm băm (như SHA-256 trong Bitcoin) chuyển đổi thông tin thành một chuỗi ký tự có độ dài cố định.
Điều này đảm bảo rằng dữ liệu không thể bị thay đổi mà không thay đổi hàm băm, vì vậy bất kỳ sự thay đổi nào trong dữ liệu sẽ tạo ra một hàm
băm hoàn toàn mới.
  
**2.Chuỗi Khối (Blockchain):**
Mỗi khối mới chứa hàm băm của khối trước đó, tạo thành một chuỗi.
Điều này tạo ra một cấu trúc dữ liệu liên kết không thể thay đổi, vì thay đổi bất kỳ khối nào sẽ yêu cầu thay đổi tất cả các khối sau đó. 

**3.Mã Hóa Đối Xứng và Bất Đối Xứng:**
Blockchain thường sử dụng mã hóa bất đối xứng, nơi mỗi người dùng có một cặp khóa công khai và khóa riêng tư.
Khóa công khai có thể được chia sẻ một cách an toàn và được sử dụng để mã hóa thông tin.
Khóa riêng tư được giữ bí mật và được sử dụng để giải mã thông tin hoặc ký giao dịch.
  
**4.Giao Dịch và Chữ Ký Số:**
Khi một giao dịch được tạo ra, nó được ký bằng khóa riêng tư của người gửi.
Chữ ký số này chứng minh rằng giao dịch đã được tạo ra bởi chủ sở hữu của khóa và không thể bị thay đổi sau khi ký.
  
**5.Xác Minh và Đồng Thuận:**
Mỗi giao dịch trong một khối cần được xác minh bởi mạng.
Các thuật toán đồng thuận như Proof of Work (PoW) hoặc Proof of Stake (PoS) được sử dụng để đảm bảo tất cả các nút trong mạng đồng ý về trạng
thái hiện tại của blockchain.
  
**6.An Ninh và Bảo Mật:**
Mã hóa và cấu trúc chuỗi khối cung cấp một cấu trúc bảo mật mạnh mẽ, khiến cho việc thay đổi thông tin sau khi đã được thêm vào blockchain trở
nên cực kỳ khó khăn.
Điều này giúp bảo vệ chống lại gian lận và tấn công.
Blockchain kết hợp những nguyên tắc mã hóa này để tạo ra một hệ thống phân tán, minh bạch và an toàn, nơi thông tin có thể được chia sẻ mà không
cần một bên trung gian tin cậy. Điều này làm cho công nghệ blockchain trở nên lý tưởng cho các ứng dụng như tiền điện tử, hợp đồng thông minh,
quản lý chuỗi cung ứng, và nhiều lĩnh vực khác.

## Quy tắc sổ cái
Mỗi nút trong blockchain đều đang lưu giữ một bản sao của sổ kế toán. Do vậy mỗi nút đều biết số dư tài khoản của bạn là bao nhiêu. Hệ thống blockchain không hề theo dõi số dư tài khoản mà nó chỉ ghi lại mỗi giao dịch được yêu cầu.

Sổ cái trên thực tế không theo dõi số dư, nó chỉ theo dõi mọi giao dịch được phát đi trong mạng lưới Bitcoin. Để biết số dư trên ví điện tử của bạn, bạn cần xác thực và xác nhận tất cả các giao dịch đã diễn ra trên mạng lưới mà có liên quan tới ví điện tử của bạn.

Các nút sẽ kiểm tra tất cả các giao dịch trước đó có liên quan đến ví tiền điện tử bạn sử dụng để gửi Bitcoin thông qua các tham chiếu lịch sử giao dịch. Để đơn giản hóa và tăng tốc quá trình xác minh, một bản ghi đặc biệt sẽ lưu trữ số Bitcoin chưa được dùng sẽ được các nút mạng lưu giữ. Nhờ cơ chế kiểm tra này nên các ví tiền điện tử tránh được tình trạng chi tiêu đúp giao dịch.

Như vậy sở hữu Bitcoin có nghĩa là có các giao dịch được lưu trong sổ kế toán liên hệ đến địa chỉ ví của bạn mà chưa được sử dụng làm giao dịch đầu vào.

Tất cả mã nguồn để thực hiện các giao dịch trên mạng lưới Bitcoin đều là nguồn mở, điều này có nghĩa là bất kỳ ai có máy tính xách tay và kết nối internet đều có thể tham gia vào mạng lưới và thực hiện giao dịch. 
Tuy nhiên, nếu có bất kỳ lỗi lầm nào trong mã nguồn được sử dụng để phát thông báo yêu cầu giao dịch, các Bitcoin liên quan sẽ bị mất vĩnh viễn.

## Nguyên lý tạo khối
Nguyên lý tạo khối trong Blockchain dựa trên việc gom các giao dịch vào nhóm khối cùng một lúc, tạo thành một chuỗi. Mỗi nút trên mạng lưới trở thành một khối và đóng vai trò trong việc tạo liên kết cho các khối tiếp theo. Mỗi khối tích hợp một đoạn mật mã phức tạp và để giải bài toán này, nút phải chọn xác suất giữa các con số ngẫu nhiên. 
Chuỗi mới được tạo mỗi 10 phút khi một nút giải quyết bài toán và gắn tiếp quyền với khối tiếp theo. 
Quy trình này đảm bảo sự đồng thuận trong chuỗi khối và ngăn chặn khả năng xây dựng các khối cùng nhau đồng loạt. Do đó, Blockchain đảm bảo tính an toàn và đồng nhất của hệ thống.




