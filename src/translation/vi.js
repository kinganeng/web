//p2p
const messages = {
  p2p_need_username: 'Để sử dụng dịch vụ P2P, hãy chọn một biệt danh. Hãy cẩn thận vì bạn chỉ có thể nhập biệt danh một lần.',
  action: {
    'publish-advert': 'Đăng tải quảng cáo',
    'return_to_adverts': 'Quay lại danh sách quảng cáo',
    'on': 'Bật',
    'off': 'Tắt',
    'add': 'Thêm',
    'create': 'Tạo',
    'delete': 'Xóa',
    'open': 'Mở',
    'close': 'Đóng',
    'pause': 'Tạm dừng',
    'read': 'Đọc',
    'cancel': 'Hủy',
    'canceled': 'Đã hủy',
    'search': 'Tìm kiếm',
    'send': 'Gửi',
    'clear': 'Xóa',
    'back': 'Quay lại',
    'save': 'Lưu',
    'take': 'Lấy',
    'like': 'Thích',
    'dislike': 'Không thích',
    'register-for-free': 'Đăng ký miễn phí',
    'buy': 'Mua',
    'sell': 'Bán',
    'quick-buy': 'Mua nhanh',
    'quick-sell': 'Bán nhanh',
    'buy-online': 'Mua trực tuyến',
    'buy-offline': 'Mua ngoại tuyến',
    'sell-online': 'Bán trực tuyến',
    'sell-offline': 'Bán ngoại tuyến',
    'show-more': 'Hiển thị thêm',
    'details': 'Chi tiết',
    'setting': 'Cài đặt',
    'my-adverts': 'Quảng cáo của tôi',
    'order-active': 'Đơn hàng hiện hoạt',
    'order-completed': 'Đơn hàng đã hoàn thành',
    'order-canceled': 'Đơn hàng đã hủy',
    'processing': 'Đang xử lý...',
    'not-register': 'Bạn chưa đăng ký?',
    'password-recovery': ' Khôi phục mật khẩu',
    'is-register': 'Bạn đã có tài khoản?',
    'new_wallet': 'Ví mới',
    'add_hash': 'Thêm hàm băm mới',
    'send_request': 'Gửi yêu cầu',
    'complain': 'Than phiền',
    'activate': 'Kích hoạt',
    'deactivate': 'Hủy kích hoạt',
    'ask-qrcode': 'Yêu cầu mã Qr',
    'update': 'Cập nhật',
    need_update_search: 'Cần cập nhật tìm kiếm',
    copy: 'Sao chép',
    editing: 'Đang chỉnh sửa',
    create_order: 'Tạo đơn hàng',
    edit: 'Chỉnh sửa',
    return_list: 'Quay lại danh sách',
  },
  message: {
    p2p_need_username: 'Để sử dụng dịch vụ P2P, hãy chọn một biệt danh. Hãy cẩn thận vì bạn chỉ có thể nhập biệt danh một lần.',
    refresh_page_and_return: 'Làm mới trang hoặc quay lại trang chính.',
    return_to_list_wallet: 'Quay lại danh sách ví.',
    select_location: 'Chọn một địa điểm',
    price_rate: 'Giá của giao dịch có giá trị thị trường hiện tại',
    not_pair_rates: 'Không tìm thấy tỷ giá cho cặp tiền tệ của bạn',
    title_currency_buy: 'Bán đồng tiền %{currency}',
    title_currency_sell: 'Mua đồng tiền %{currency}',
    question_sell: 'Bạn muốn bán bao nhiêu?',
    question_buy: 'Bạn muốn mua bao nhiêu?',
    user_last_seen: 'Người dùng được nhìn thấy trực tuyến lần cuối %{time}',
    order_low_buy: 'Số tiền nhỏ nhất bạn có thể mua đối với quảng cáo này là %{value} %{currency}',
    order_high_buy: 'Số tiền lớn nhất bạn có thể mua đối với quảng cáo này là %{value} %{currency}',
    order_low_sell: 'Số tiền nhỏ nhất bạn có thể bán đối với quảng cáo này là %{value} %{currency}',
    order_high_sell: 'Số tiền lớn nhất bạn có thể bán đối với quảng cáo này là %{value} %{currency}',
    direct_exchange_rate: 'Tỷ giá hối đoái trực tiếp',
    reverse_exchange_rate: 'Tỷ giá hối đoái đảo chiều',
    order_confirm_warning: `Bằng việc cho phép tự động chấp nhận đơn hàng, bạn đồng ý rằng việc bắt đầu thực hiện sẽ được tiến hành 
    bởi khách hàng và bạn sẽ có %{minutes} phút từ lúc đó để hoàn thành đơn hàng`,
    exchange_currency_sell: 'Đồng tiền bạn muốn bán',
    'payment-currency_sell': 'Đồng tiền bạn muốn nhận',
    exchange_currency_buy: 'Đồng tiền bạn muốn mua',
    'payment-currency_buy': 'Đồng tiền bạn muốn trao đổi',
    order_confirm_text: 'Bắt đầu thỏa thuận để trao đổi %{payment} lấy %{exchange}?',   refresh_rate_order: 'Quảng cáo đã cập nhật tỷ giá. Tiếp tục?',
    show_order: 'Quảng cáo được hiển thị',
    hide_order: 'Quảng cáo bị ẩn',
    error_send_message: 'Đã xảy ra lỗi khi gửi tin nhắn.',
    success_send_message: 'Đã gửi tin nhắn.',
    code_send_to_email: 'Mã đã được gửi đến email.',
    quest_activation_code: 'Yêu cầu mã kích hoạt.',
    request_success_activation: 'Email kích hoạt đã được gửi lại đến bạn'
  },
  form: {
    'all': 'Tất cả',
    'title': 'Tiêu đề',
    "description": 'Mô tả',
    'sms-verified': 'SMS đã được xác minh',
    'sms-not-required': 'Không cần SMS',
    'id-not-required': 'Không cần ID',
    'seller': 'Người bán',
    'country': 'Quốc gia',
    'rate': 'Tỷ giá',
    'price': 'Giá',
    'location': 'Địa điểm', 'password': 'Mật khẩu',
    'optional-field': 'Trường không bắt buộc',
    'email': 'Email',
    'all-adverts': 'Tất cả các quảng cáo',
    'username': 'Tên người dùng',
    'currency': 'Tiền tệ',
    'amount': 'Số tiền',
    'limits': 'Giới hạn',
    'type': 'Loại',
    'amount-min': 'Số tiền tối thiểu',
    'amount-min-info': 'Giới hạn giao dịch tối thiểu',
    'amount-max': 'Số tiền tối đa',
    'amount-max-info': 'Giới hạn giao dịch tối đa',
    'amount-limit': 'Giới hạn số tiền',
    'payment-method': 'Phương thức thanh toán',
    'payment-system': 'Hệ thống thanh toán',
    'payment-rate': 'Tỷ giá hối đoái cho một đơn vị tiền tệ',
    'payment-currency': 'Đồng  tiền thanh toán',
    'status': 'Trạng thái',
    'date-created': 'Ngày tạo',
    'date-updated': 'Đã cập nhật',
    'select-currency': 'Chọn đồng tiền',
    'order-type': 'Loại đơn hàng',
    'additional-info': 'Thông tin bổ sung',
    'field-required': 'Trường này là bắt buộc',
    'select_currency': 'Chọn đồng tiền',
    'balance': 'Số dư',
    'refill': 'tiền gửi',
    'withdraw': 'Rút',
    'hash': 'Hàm băm',
    'price_per_unit': 'Đơn giá',
    'comment': 'Bình luận',
    'buy': 'Mua',
    'your_message': 'Tin nhắn của bạn...',
    'field_require': 'Các trường này là bắt buộc',
    'paymentway': 'Hệ thống thanh toán',
    'address': 'Địa chỉ',
    'time-expired-minutes': 'Thời gian đã hết(Phút)',
    'select': 'Chọn',
    'numeric-code': 'Mã số',
    'wexcode_next': 'Vui lòng thử lại',
    'city': 'Thành phố',
    'exchange_currency': 'Đồng tiền trao đổi',
    'select_type_advert': 'Chọn loại quảng cáo',
    tfa_code: 'Mã TFA',
    platform: 'Nền tảng',
    autoconfirmation_order: 'Tự động xác nhận',
    user_price: 'Giá cho người dùng',
    price_from_platform: 'Giá từ nền tảng',
    profit: 'Lợi nhuận',
    order: 'Đơn hàng',
    user_buyer: 'Người mua',
    user_seller: 'Người bán',
    exchange_currency_sell: 'Đồng tiền bạn muốn bán',
    'payment-currency_sell': 'Đồng tiền bạn muốn nhận',
    exchange_currency_buy: 'Đồng tiền bạn muốn mua',
    'payment-currency_buy': 'Đồng tiền bạn muốn trao đổi',
  },
};
const newError = {
  "32700": "Lỗi không xác định trên máy chủ",
  "32701": "Lỗi không xác định trên máy chủ",
  "32702": "Lỗi không xác định trên máy chủ",
  "32703": "Không tìm thấy phương thức API",
  "32704": "Phiên không hợp lệ",
  "32705": "Phiên không hợp lệ",
  "32706": "Sai mã TFA",
  "32707": "Sai mã TFA",
  "40000": "Không tìm thấy đồng tiền",
  "40001": "Không tìm thấy đồng tiền",
  "40002": "Loại tiền tệ không hợp lệ",
  "41000": "Ví chưa được tạo",
  "41001": "Coupon không hợp lệ",
  "41002": "Coupon không hợp lệ",
  "41003": "Có lỗi khi nhập mã WEX",
  "41004": "Địa chỉ băm không hợp lệ",
  "41005": "Không tìm thấy ví",
  "41006": "Không đủ tiền",
  "41007": "Không đủ tiền",
  "41008": "Không đủ tiền",
  "41009": "Lỗi: không thể tạo giao dịch",
  "41010": "Không tìm thấy người bán",
  "41011": "Không tìm thấy người mua",
  "41012": "Không tìm thấy người bán",
  "41013": "Không tìm thấy người mua",
  "42000": "Không tìm thấy hệ thống thanh toán",
  "43000": "Không tìm thấy hệ thống thanh toán",
  "43001": "Không tìm thấy hệ thống thanh toán",
  "44000": "Tôi thử nhưng không tìm thấy",
  "44001": "Tôi thử nhưng không tìm thấy",
  "45000": "Thời gian giao dịch không được chỉ rõ",
  "45001": "Thời gian giao dịch không được chỉ rõ",
  "45002": "Autobatterien không được chỉ rõ",
  "45003": "Autobatterien không được chỉ rõ",
  "45004": "Loại giao dịch không được chỉ rõ",
  "45005": "Loại giao dịch không được chỉ rõ",
  "45006": "Số tiền tối thiểu không đúng", "45007": "Số tiền tối đa không đúng",
  "45008": "Số tiền trao đổi tối đa không hợp lệ",
  "45009": "Số tiền trao đổi tối thiểu không hợp lệ",
  "45010": "Địa điểm không được chỉ rõ",
  "45011": "Tỷ giá không được chỉ rõ",
  "45012": "Tỷ giá không được chỉ rõ",
  "45013": "Tỷ giá không được chỉ rõ",
  "45014": "Tỷ giá không được chỉ rõ",
  "45015": "Tỷ giá trên nền tảng giao dịch không được chỉ rõ",
  "45016": "Tỷ giá trên nền tảng giao dịch không được chỉ rõ",
  "45017": "Giá trị lãi suất không được chỉ rõ",
  "45018": "Giá trị lãi suất không được chỉ rõ",
  "45019": "Tỷ giá không được chỉ rõ",
  "45020": "Không đủ tiền để tạo quảng cáo",
  "45021": "Không thể tạo quảng cáo",
  "45022": "Không tìm thấy quảng cáo",
  "45023": "Trạng thái của giao dịch không được chỉ rõ",
  "45024": "Trạng thái của giao dịch không được chỉ rõ",
  "45025": "Không thể thay đổi trạng thái của giao dịch",
  "45026": "Không tìm thấy quảng cáo",
  "45027": "Có lỗi khi cập nhật quảng cáo",
  "46000": "Không tìm thấy giao dịch",
  "46001": "Không tìm thấy giao dịch",
  "46002": "Quảng cáo token không được chỉ rõ",
  "46003": "Quảng cáo token không được chỉ rõ",
  "46004": "Số tiền cho giao dịch không được chỉ rõ",
  "46005": "Số tiền cho giao dịch không được chỉ rõ",
  "46006": "Không thể tạo giao dịch",
  "46007": "Không thể thay đổi trạng thái của giao dịch",
  "46008": "Giao dịch không được cập nhật",
  "46009": "Trạng thái của giao dịch không được chỉ rõ",
  "46010": "Trạng thái của giao dịch không được chỉ rõ",
  "47000": "Không chỉ rõ loại tin nhắn",
  "47001": "Không chỉ rõ loại tin nhắn",
  "47002": "Tin nhắn đang trống",
  "47003": "Tin nhắn đang trống",
  "47004": "Không thể gửi",
  "47005": "Id tin nhắn được chỉ rõ",
  "47006": "Không thể gửi",
  "48000": "Địa điểm không được chỉ rõ",
  "48001": "Địa điểm không được chỉ rõ",
  "49000": "Có lỗi khi tạo ví",
  "50000": "Có lỗi khi gửi",
  "50001": "Chỉ rõ đánh giá",
  "50002": "Chỉ rõ đánh giá",
  "50003": "Bình luận là cần thiết",
  "51000": "Không tìm thấy người dùng",
  "51001": "Email không được chỉ rõ",
  "51002": "Định dạng email không hợp lệ",
  "51003": "Email đã được sử dụng",
  "51004": "Tên người dùng không được chỉ rõ",
  "51005": "Định dạng tên người dùng không hợp lệ",
  "51006": "Tên người dùng đã được sử dụng",
  "51007": "Mật khẩu không được chỉ rõ",
  "51008": "Mật khẩu không hợp lệ",
  "51009": "Nhật ký vượt quá giới hạn",
  "51010": "Không thể thay đổi mật khẩu",
  "51011": "Có lỗi khi đăng ký",
  "51012": "Không tìm thấy mã kích hoạt không hợp lệ",
  "51013": "Không tìm thấy mã kích hoạt không hợp lệ",
  "51014": "Không thể kích hoạt người dùng",
  "51015": "Đối với một người dùng cụ thể, thao tác không khả dụng.",
  "51016": "Chỉ rõ trạng thái của TFA",
  "51017": "TFA đã được kích hoạt",
  "51018": "Loại TFA không được chỉ rõ",
  "51019": "Loại TFA sai",
  "52000": "Nhập tên của API",
  "52001": "Định dạng tên không hợp lệ",
  "52002": "Không thể tạo API",
  "52003": "Không tìm thấy API",
  "52004": "Không tìm thấy API",
  "52005": "Không thể cập nhật API",
  "52006": "Không tìm thấy mã khóa API",
  "52007": "Mã khóa API không hợp lệ",
  "52008": "Không thể cập nhật API",
  "52009": "Không thể cập nhật API",
  "52010": "Không thể cập nhật API",
  "52011": "Không thể cập nhật API",
  "53000": "Không tìm thấy ip",
  "53001": "Không tìm thấy ip",
  "53002": "Không thể thêm IP",
  "53003": "Không thể xóa IP",
  "53004": "Không tìm thấy ip",
  "54000": "Không thể cập nhật API",
  "54001": "Không thể cập nhật API",
  "54002": "Không thể cập nhật API",
  "51020": "Không thể xác thực mã Recaptcha",
  "51021": "Không thể xác thực mã Recaptcha",
  "51022": "Có thể gửi lại email kích hoạt sau 60 giây",
  "51015_activation_request": "Tài khoản của bạn đã được kích hoạt. <a href='/user/login'>Chào mừng bạn</a>" ,
  "51000_activation_request": "Có lẽ bạn đã nhập sai hoặc email của bạn chưa được đăng ký."
};
const error = {
  'error': 'Lỗi',
  'order-not-found': 'Không có đơn hàng nào có trạng thái như vậy',
  '404': 'Không tìm thấy trang',
  ...newError,
  error_send_code: 'Đã xảy ra lỗi, mã không được gửi. Hãy thử lại.',
  error_check_data: 'Vui lòng kiểm tra dữ liệu đã nhập',
  invalid_ip: 'Địa chỉ Ip có định dạng không hợp lệ',
  advert_create: {
    '-33001': 'Không tìm thấy loại này',
    '-33002': 'Loại này không hợp lệ',
    '-33003': 'Không tìm thấy đồng tiền',
    '-33004': 'Đồng tiền không hợp lệ',
    '-33005': `Giá trị giới hạn giao dịch tối thiểu không thể nhỏ hơn không`,
    '-33006': `Giá trị giới hạn số tiền không thể nhỏ hơn không`,
    '-33007': `Giới hạn giao dịch Tối thiểu không được vượt quá giới hạn giao dịch Tối đa`,
    '-33008': `Không tìm thấy giới hạn số tiền`,
    '-33009': `Không tìm thấy giới hạn số tiền`,
    '-33010': `Giá trị giới hạn số tiền không thể nhỏ hơn giới hạn giao dịch Tối thiểu`,
    '-33011': `Không tìm thấy đồng tiền thanh toán`,
    '-33012': `Đồng tiền thanh toán không hợp lệ`,
    '-33013': `Trường "Đồng tiền trao đổi" bằng với "Đồng tiền thanh toán"`,
    '-33014': 'Không tìm thấy tỷ giá cho một đơn vị tiền tệ trao đổi',
    '-33015': 'Tỷ giá cho một đơn vị tiền tệ trao đổi không hợp lệ',
    '-33016': 'Không tìm thấy hệ thống thanh toán',
    '-33017': 'Hệ thống thanh toán không hợp lệ',
    '-33018': 'Không tìm thấy quốc gia',
    '-33019': 'Quốc gia không tồn tại',
    '-33020': 'Không tìmm thấy thời gian hết hạn',
    '-33021': 'Thời gian hết hạn không hợp lệ',
    '-33022': 'Địa điểm không hợp lệ',
    '-33023': 'Ví không tồn tại',
    '-33024': 'Không tìm thấy số dư',
    '-33025': 'Đã xảy ra lỗi khi tạo quảng cáo',
    '-33037': 'Không tìm thấy số dư',
  },
  advert_info: {
    '-33001': 'Không tìm thấy uuid của quảng cáo',
    '-33002': 'Quảng cáo không tồn tại',
  },
  advert_set_status: {
    '-33001': 'Không tìm thấy uuid của quảng cáo',
    '-33002': 'Không tìm thấy trạng thái của quảng cáo',
    '-33003': 'Trạng thái của quảng cáo không hợp lệ',
    '-33004': 'Quảng cáo không tồn tại',
    '-33005': 'Lỗi trạng thái đơn hàng',
  },
  event_create: {
    '-33001': 'Không tìm thấy uuid của đơn hàng',
    '-33002': 'Đơn hàng không tồn tại',
    '-33003': 'Quyền truy cập bị cấm đối với đơn hàng này',
    '-33004': 'Không tìm thấy loại này',
    '-33005': 'Loại này không hợp lệ',
    '-33006': 'Không tìm thấy giá trị',
    '-33007': 'Giá trị không hợp lệ',
    '-33008': 'Đã xảy ra lỗi khi tạo sự kiện',
  },
  order_create: {
    '-33001': 'Không tìm thấy advert_id',
    '-33002': 'Quảng cáo không tồn tại',
    '-33003': 'Không tìm thấy số tiền',
    '-33004': 'Số tiền không hợp lệ',
    '-33005': 'Tài khoản không tồn tại',
    '-33006': 'Không tìm thấy số dư',
    '-33007': 'Đã xảy ra lỗi khi tạo đơn hàng',
    '-33008': 'Lỗi trạng thái đơn hàng',
  },
  order_event_list: {
    '-33001': 'Không tìm thấy uuid của đơn hàng',
    '-33002': 'Đơn hàng không tồn tại',
    '-33003': 'Quyền truy cập bị cấm đối với đơn hàng này',
  },
  order_info: {
    '-33001': 'Không tìm thấy uuid của đơn hàng',
    '-33002': 'Đơn hàng không tồn tại',
  },
  order_info_details: {
    '-33001': 'Không tìm thấy uuid của đơn hàng',
    '-33002': 'Đơn hàng không tồn tại',
  },
  order_set_status: {
    '-33001': 'Không tìm thấy uuid của đơn hàng',
    '-33002': 'Đơn hàng không tồn tại',
    '-33003': 'Không tìm thấy trạng thái của đơn hàng',
    '-33004': 'Trạng thái của đơn hàng không hợp lệ',
    '-33005': 'Trạng thái đã đặt không được phép',
  },
  place_search: {
    '-33001': 'Không tìm thấy quốc gia',
    '-33002': 'Quốc gia không tồn tại',
    '-33003': 'Không tìm thấy tìm kiếm',
    '-33004': 'Lỗi không xác định',
  },
  user_auth_tfa_enable: {
    '-33001': 'Không tìm thấy giấy phép',
  },
  user_login: {
    '-33001': 'Không tìm thấy email',
    '-33002': 'Email không hợp lệ',
    '-33003': 'Không tìm thấy mật khẩu',
    '-33004': 'Mật khẩu Param không hợp lệ',
    '-33005': 'Sai email hoặc mật khẩu',
    '-33006': 'Người dùng chưa được kích hoạt',
    '-33007': 'Sai email hoặc mật khẩu',
    '-33008': 'Sai email hoặc mật khẩu',
    '-33009': 'Sai email hoặc mật khẩu',
    '-33010': 'Đã vượt quá giới hạn đăng nhập'
  },
  advert_update: {
    '-33024': 'Có lỗi khi cập nhật quảng cáo',
  },
  common_error: {
    '-32000': 'Có lỗi trên máy chủ',
    '-32007': 'Phiên không hợp lệ',
    '-32008': 'Phiên không hợp lệ',
    '-32009': 'Mã TFA không hợp lệ',
    '-32010': 'Sai địa chỉ email'
  },
};

const p2p = { ...messages, error };



export default {
  "form": {
    "email": "Email",
    "password": "Mật khẩu",
    "confirm_pwd": "Xác nhận mật khẩu",
    "auth_code": "Mã xác thực",
    "your_login": "Thông tin đăng nhập của bạn",
    "login": "Đăng nhập",
    "enter_google_2fa_code": "Nhập mã gồm 6 chữ số",
    "old_pwd": "Mật khẩu cũ",
    "new_pwd": "Mật khẩu mới",
    "title": "Tiêu đề",
    "expired_time": "Thời gian hết hạn",
    "currency": "Tiền tệ",
    "amount": "Số tiền",
    "select_currency": "Chọn loại tiền tệ",
    "send_to": "Gửi tới",
    ...p2p.form,
  },
  "action": {
    "login": "Đăng nhập",
    "create_acc": "Tạo tài khoản",
    "authenticate": "Xác thực",
    "cancel": "Hủy bỏ",
    "restore": "Khôi phục",
    "change": "Thay đổi",
    "show_qr": "Hiện mã QR",
    "enable": "Bật",
    "save_qr": "Mã QR",
    "disable": "Vô hiệu hóa",
    "create": "Tạo",
    "add": "Thêm",
    "save": "Lưu",
    "copy": "Sao chép",
    "send": "Gửi",
    "exchange": "Chuyển đổi",
    ...p2p.action,
  },
  "page": {
    "activation_acc": "Kích hoạt tài khoản",
    "sign_in": "Đăng nhập",
    "sign_up": "Đăng ký",
    "sign_out": "Đăng xuất",
    "create_your_acc": "Tạo tài khoản của bạn",
    "forgot_pwd": "Quên mật khẩu?",
    "not_registered": "Chưa có tài khoản? Hãy tạo tài khoản.",
    "already_registered": "Đã có tài khoản? Đăng nhập.",
    "success_registered": "Cảm ơn bạn đã đăng ký! Nội dung hướng dẫn kích hoạt đã được gửi đến e-mail của bạn.",
    "success_activated_acc": "Tài khoản của bạn đã được kích hoạt thành công.",
    "error_activated_acc": "LỖI. Tài khoản của bạn chưa được kích hoạt.",
    "request_new_pwd": "Yêu cầu mật khẩu mới",
    "success_recovery_mail_pwd": "Thành công! Nội dung hướng dẫn khôi phục mật khẩu đã được gửi đến e-mail của bạn.",
    "enable_2fa": "Bật xác minh hai bước",
    "disable_2fa": "Tắt xác minh hai bước",
    "text_google_2fa": "Để bảo vệ tài khoản của bạn, hãy kích hoạt xác thực hai yếu tố (2FA). Để làm thao tác này, bạn cần mã 6 chữ số. Để lấy mã này, hãy tải Google Authenticator và quét mã QR.",
    "text_google_2fa_disable": "Nếu bạn muốn tắt 2FA, hãy nhập mã 6 chữ số cung cấp bởi ứng dụng Google Authenticator rồi nhấp vào &quot;Tắt&quot;.",
    "qr_code": "Mã QR",
    "your_secret_key": "Chìa khóa bí mật của bạn",
    "change_password": "Thay đổi mật khẩu",
    "create_user_api": "Tạo API người dùng",
    "title": "Tiêu đề",
    "date": "Ngày",
    "status": "Trạng thái",
    "active": "Đang hoạt động",
    "deactive": "Không hoạt động",
    "have_not_api_key": "Bạn không có chìa khóa này",
    "your_api_keys": "Chìa khóa API của bạn",
    "api_methods_acc": "Tài khoản Methods",
    "api_convert_currency": "Tiền tệ mật Methods",
    "api_withdraw": "Rút Methods",
    "actions": "Hành động",
    "ip_address": "Địa chỉ IP",
    "settings": "Cài đặt",
    "make_deposit": "Gửi tiền",
    "autoconvert_into_cnx": "Tự động chuyển đổi sang CNX",
    "deposit_qr": "Gửi tiền bằng cách quét vào bên dưới",
    "deposit_copy": "hoặc gửi tiền trực tiếp đến",
    "choose_withdraw_type": "Chọn kiểu rút tiền",
    "you_give": "Bạn gửi",
    "you_receive": "Bạn nhận",
    "exchange_rate": "Tỷ giá hối đoái",
    "fee": "Phí",
    "pair": "Cặp",
    "price": "Giá",
    "volume": "Khối lượng giao dịch",
    "charts": "Biểu đồ",
    "today": "Hôm nay",
    "this_week": "Tuần này",
    "all": "Tất cả",
    "this_month": "Tháng này",
    "last_month": "Tháng trước",
    "this_year": "Năm nay",
    "previous": "Quay lại",
    "next": "Tiếp tục",
    "deposit": "Tiền gửi",
    "transactions": "Giao dịch",
    "withdraw": "Rút tiền",
    "exchange": "Chuyển đổi",
    "restore": "Khôi phục",
    "balances": "Số dư",
    "fiat": "Định danh"
  },
  "message": {
    p2p_shot_info: 'Để tìm hiểu cách sử dụng dịch vụ P2P, hãy đọc hướng dẫn ngắn.',
    "success": "Thành công",
    "status_change_autoconvert_into_cnx": "Thay đổi trạng thái thành công.",
    ...p2p.message,
  },
  "error": {
    "fill_all_field": "Hãy điền tất cả các trường!",
    "wrong_user": "Truy cập bị từ chối: sai tên người dùng hoặc mật khẩu",
    "not_activated_acc": "Bạn có tin nhắn kèm liên kết tới e-mail của bạn. Mở liên kết trong tin nhắn để kích hoạt tài khoản của bạn.",
    "invalid_auth_key": "Mã xác thực không hợp lệ!",
    "invalid_format": "Định dạng không hợp lệ,%{field}!",
    "unknown_error": "Lỗi không xác định!",
    "enter_6_dig": "Nhập mã gồm 6 chữ số",
    "register_error": "Lỗi khi đăng ký!",
    "different_pwd": "Mật khẩu không khớp.",
    "fail_change_pwd": "Không thể thay đổi mật khẩu!",
    "wrong_user_restore_pwd": "Sai tên người dùng!",
    "fail_activated_2fa": "Không thể kích hoạt 2FA!",
    "is_empty": "%{field} bị bỏ trống!",
    "should_num": "%{field} phải là số!",
    "error_send": "Đã gửi lỗi",
    "error": "Lỗi",
    "exchange_not_balance": "Có thể bạn không đủ tiền để giao dịch trong tài khoản.",
    ...p2p.error,
  },
  "fee": {
    "cnx": "Số tiền tối thiểu = 0,001 CNX | Miễn phí",
    "btc": "Số tiền tối thiểu = 0,002 BTC | Phí = 0,001 BTC",
    "eth": "Số tiền tối thiểu = 0,002 ETH | Phí = 0,001 ETH"
  },
  "statusTransaction": {
    "created": "Đã tạo",
    "moderated": "Được quản lý",
    "unconfirmed": "Chưa xác nhận",
    "confirmed": "Đã xác nhận",
    "admin_moderate_success": "Được quản trị viên phê duyệt",
    "admin_moderate_cancel": "Đã hủy bởi quản trị viên",
    "admin_moderate_wait": "Được quản trị viên quản lý",
    "moderate": "Quản lý"
  },
  validate: {
    'empty_field': 'Trường không được thể trống',
    'empty_fields': 'Tất cả các trường không được thể trống',
    'invalid_email': 'Email phải hợp lệ',
    'invalid_username': 'Tên người dùng không hợp lệ',
    'invalid_repassword': 'Mật khẩu không khớp',
    'invalid_select_currency': 'Bạn phải chọn một đồng tiền',
    'invalid_password_short': 'Mật khẩu của bạn phải dài ít nhất 8 ký tự',
  },
  order_status: {
    created_buyer: 'Đang chờ xác nhận của nhà cung cấp',
    accepted_buyer: 'Đang chờ chuyển tiền của người mua',
    paid_buyer: 'Đã thanh toán',
    moderated_buyer: 'Đang kiểm duyệt',
    confirmed_buyer: 'Đã xác nhận',
    completed_buyer: 'Thỏa thuận thành công',
    timeout_confirmed_buyer: 'Thời gian giao dịch đã hết, tiền đã được chuyển',
    canceled_buyer: 'Thỏa thuận bị hủy bởi người bán',
    timeout_canceled_buyer: 'Thời gian giao dịch đã hết',
    created_seller: 'Đang chờ người mua xác nhận',
    accepted_seller: 'Đang chờ chuyển tiền của người mua',
    paid_seller: 'Đã thanh toán',
    moderated_seller: 'Đang kiểm duyệt',
    confirmed_seller: 'Đã xác nhận',
    completed_seller: 'Thỏa thuận thành công',
    timeout_complete_seller: 'Thời gian giao dịch đã hết, tiền đã được chuyển',
    canceled_seller: 'Thỏa thuận bị hủy bởi người mua',
    timeout_canceled_seller: 'Thời gian giao dịch đã hết'
  },
  status_adverts: {
    actived: 'Hiện hoạt',
    removed: 'Đã xóa',
    canceled: 'Không hoạt động',
  },
  status_orders: {
    created: 'Đang chờ phê duyệt',
    accepted: 'Đang chờ chuyển tiền',
    paid: 'Đã thanh toán',
    moderated: 'Kiểm duyệt',
    confirmed: 'Đã xác nhận',
    completed:'Thỏa thuận đã hoàn thành thành công',
    timeout_confirmed: 'Thời gian giao dịch đã hết',
    timeout_canceled: 'Thời gian giao dịch đã hết',
    canceled: 'Thỏa thuận bị hủy'
  },
  user_status: {
    activated: 'Người dùng được kích hoạt',
    blocked: 'Người dùng bị chặn'
  },
  menu: {
    'buy': 'Mua',
    'sell': 'Bán',
    'guide': 'Hướng dẫn',
    'support': 'Hỗ trợ',
    'terms-of-service': 'Điều khoản dịch vụ',
    'orders': 'Đơn hàng',
    'rates': 'Tỷ giá'
  },
  user: {
    'user': 'Người dùng',
    'registration': 'Đăng ký',
    'login': 'Đăng nhập',
    'logout': 'Đăng xuất',
    'account': 'Tài khoản',
    'profile': 'Hồ sơ',
    'username': 'Tên người dùng',
    'password': 'Mật khẩu',
    'name': 'Tên',
    'phone': 'Số điện thoại',
    'adverts': 'Quảng cáo',
    'wallet': 'Ví'
  },
  "coupon": {
    "checking_coupon": "Đang kiểm tra thẻ",
    "scanning_coupon": "Quẹt thẻ",
    "begin_scanning_coupon": "Quẹt thẻ",
    "not_access_camera": "Bạn cần cấp quyền truy cập vào máy ảnh và làm mới trang",
    "coupon": "Thẻ",
    "check": "Kiểm tra",
    "create_coupon": "Tạo mã",
    "time_of_action": "Thời gian thao tác",
    "receiver": "Người nhận",
    "select_currency": "Chọn một loại tiền tệ",
    "activate_coupon": "Kích hoạt thẻ",
    "apply_coupon": "Nạp tiền vào thẻ",
    "apply": "Gửi tiền",
    "deactivate_coupon": "Hủy kích hoạt thẻ",
    "deactivate": "Hủy kích hoạt",
    "information": "Thông tin về thẻ",
    "creator": "Chủ sở hữu",
    "given": "Bảo vệ bằng mật khẩu",
    "not_given": "Không được bảo vệ bằng mật khẩu",
    "time_of_redeem": "Thời gian kích hoạt",
    "invalid_qrcode": "Mã QR không hợp lệ",
    "check_coupon_fail": "Không tìm thấy dữ liệu thẻ",
    "field_empty": "Field \"%{field}\" phải được điền vào",
    "take_currency": "Bạn cần chỉ định đơn vị tiền tệ",
    "success_create_coupon": "Thẻ đã được tạo thành công",
    "error_length_comment": "Bình luận vượt quá số ký tự cho phép (255)",
    "error_create_coupon": "Đã xảy ra lỗi khi tạo thẻ",
    "need_password": "Bạn cần chỉ định mật khẩu",
    "activate_coupon_success": "Thẻ đã được kích hoạt",
    "activate_coupon_error": "Đã xảy ra lỗi khi kích hoạt thẻ",
    "not_found_coupon": "Không tìm thấy thẻ",
    "coupon_was_used": "Thẻ đã được sử dụng",
    "fail_apply_coupon": "Không thể nạp tiền vào thẻ",
    "coupon_refilled": "Thẻ đã được nạp tiền",
    "your_coupon": "Thẻ của bạn",
    "optional_field": "Không yêu cầu",
    "types": {
      "debit": "Thẻ",
      "empty": "Thẻ dùng một lần",
      "joker": "Joker"
    },
    "status": {
      "actived": "Chưa được kích hoạt",
      "redeemed": "Chi tiêu",
      "created": "Đang chờ nạp tiền"
    }
  }
}