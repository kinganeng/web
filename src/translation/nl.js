// p2p

const messages = {
  p2p_need_username: 'Selecteer een alias als u de P2P-service wilt gebruiken. Wees voorzichtig, u kunt slechts één keer een alias ingeven.',
  action: {
    'publish-advert': 'Advertentie publiceren',
    'return_to_adverts': 'Terug naar de advertentielijst',
    'on': 'Aan',
    'off': 'Uit',
    'add': 'Toevoegen',
    'create': 'Creëren',
    'delete': 'Verwijderen',
    'open': 'Openen',
    'close': 'Sluiten',
    'pause': 'Pauze',
    'read': 'Lezen',
    'cancel': 'Annuleren',
    'canceled': 'Geannuleerd',
    'search': 'Zoeken',
    'send': 'Versturen',
    'clear': 'Wissen',
    'back': 'Terug',
    'save': 'Opslaan',
    'take': 'Nemen',
    'like': 'Leuk vinden',
    'dislike': 'Niet leuk vinden',
    'register-for-free': 'Gratis registreren',
    'buy': 'Kopen',
    'sell': 'Verkopen',
    'quick-buy': 'Snelle aankoop',
    'quick-sell': 'Snelle verkoop',
    'buy-online': 'Online kopen',
    'buy-offline': 'Offline kopen',
    'sell-online': 'Online verkopen',
    'sell-offline': 'Offline verkopen',
    'show-more': 'Meer tonen',
    'details': 'Details',
    'setting': 'Instelling',
    'my-adverts': 'Mijn Advertenties',
    'order-active': 'Actieve orders',
    'order-completed': 'Voltooide orders',
    'order-canceled': 'Geannuleerde orders',
    'processing': 'Wordt verwerkt...',
    'not-register': 'Nog niet geregistreerd?',
    'password-recovery':  'Wachtwoordherstel',
    'is-register': 'Heeft u reeds een account?',
    'new_wallet': 'Nieuwe portefeuille',
    'add_hash': 'Nieuwe hash oevoegen',
    'send_request': 'Verzoek versturen',
    'complain': 'Klacht indienen',
    'activate': 'Activeren',
    'deactivate': 'Desactiveren',
    'ask-qrcode': 'QR-code vragen',
    'update': 'Bijwerken',
    need_update_search: 'Zoekopdracht moet worden bijgewerkt',
    copy: 'Kopie',
    editing: 'Bewerken',
    create_order: 'Order creëren',
    edit: 'Bewerken',
    return_list: 'Terug naar de lijst',
  },
  message: {
    p2p_shot_info: 'Lees de korte handleiding om te leren hoe u de P2P-service gebruikt.',
    p2p_need_username: 'Selecteer een alias als u de P2P-service wilt gebruiken. Wees voorzichtig, u kunt slechts één keer een alias ingeven.',
    refresh_page_and_return: 'Ververs de pagina of ga terug naar de startpagina.',
    return_to_list_wallet: 'Terug naar de lijst met portefeuilles',
    select_location: 'Locatie selecteren',
    price_rate: 'De prijs van de transactie aan de huidige marktwaarde',
    not_pair_rates: 'De tarieven voor uw valutapaar werden niet gevonden',
    title_currency_buy: 'Valuta verkoop %{currency}',
    title_currency_sell: 'Valuta aankoop %{currency}',
    question_sell: 'Hoeveel wenst u te verkopen',
    question_buy: 'Hoeveel wenst u te kopen',
    user_last_seen: 'Gebruiker laatst online gezien %{time}',
    order_low_buy: 'Het kleinste bedrag dat u voor deze ad kunt kopen is %{value} %{currency}',
    order_high_buy: 'Het grootse bedrag dat u voor deze ad kunt kopen is %{value} %{currency}',
    order_low_sell: 'Het kleinste bedrag dat u voor deze ad kunt verkopen is %{value} %{currency}',
    order_high_sell: 'Het grootse bedrag dat u voor deze ad kunt verkopen is %{value} %{currency}',
    direct_exchange_rate: 'Directe wisselkoers',
    reverse_exchange_rate: 'Omgekeerde wisselkoers',
    order_confirm_warning: `Door de automatische aanvaarding van het order te activeren, gaat u ermee akkoord dat de start van de uitvoering zal worden geïnitieerd 
    door d eklant en u beschikt vanaf dat moment over %{minutes} minuten om het order te voltooien`,
    exchange_currency_sell: 'De valuta die u wenst te verkopen',
    'payment-currency_sell': 'Valuta die u wenst te ontvangen',
    exchange_currency_buy: 'De valuta die u wenst te kopen',
    'payment-currency_buy': 'Valuta die u wenst te wisselen',
    order_confirm_text: 'Een deal starten om %{payment} voor %{exchange} te wisselen?',
    refresh_rate_order: 'De ad heeft het tarief bijgewerkt. Verdergaan?',
    show_order: 'Ad weergegeven',
    hide_order: 'Ad verborgen',
    error_send_message: 'Er was een fout tijdens het verzenden van het bericht.',
    success_send_message: 'Bericht geleverd.',
    code_send_to_email: 'Code werd naar e-mail verstuurd.',
    quest_activation_code: 'Activatiecode aanvragen.',
    request_success_activation: 'De activatie-e-mail werd opnieuw naar u verzonden'
  },
  form: {
    'all': 'Alle',
    'title': 'Titel',
    'description': 'Omschrijving',
    'sms-verified': 'SMS is geverifieerd',
    'sms-not-required': 'SMS is niet vereist',
    'id-not-required': 'ID is niet vereist',
    'seller': 'Verkoper',
    'country': 'Land',
    'rate': 'Tarief',
    'price': 'Prijs',
    'location': 'Locatie', 'password': 'Wachtwoord',
    'optional-field': 'Optioneel veld',
    'email': 'E-mail',
    'all-adverts': 'Alle advertenties',
    'username': 'Gebruikersnaam',
    'currency': 'Valuta',
    'amount': 'Bedrag',
    'limits': 'Limieten',
    'type': 'Type',
    'amount-min': 'Minimumbedrag',
    'amount-min-info': 'Minimum transactielimiet',
    'amount-max': 'Maximumbedrag',
    'amount-max-info': 'Maximum transactielimiet',
    'amount-limit': 'Bedraglimiet',
    'payment-method': 'Betalingsmethode',
    'payment-system': 'Betalingssysteem',
    'payment-rate': 'Tarief voor een valuta-wisseleenheid',
    'payment-currency': 'Betalingsvaluta',
    'status': 'Status',
    'date-created': 'Creatiedatum',
    'date-updated': 'Bijgewerkt',
    'select-currency': 'Valuta selecteren',
    'order-type': 'Ordertype',
    'additional-info': 'Bijkomende informatie',
    'field-required': 'Veld is vereist',
    'select_currency': 'Valuta selecteren',
    'balance': 'Balans',
    'refill': 'deposit',
    'withdraw': 'Afhalen',
    'hash': 'Hash',
    'price_per_unit': 'Prijs per eenheid',
    'comment': 'Commentaar',
    'buy': 'Kopen',
    'your_message': 'Uw bericht...',
    'field_require': 'Velden zijn vereist',
    'paymentway': 'Betalingssysteem',
    'address': 'Adres',
    'time-expired-minutes': 'Verstreken tijd (Minuten)',
    'select': 'Selecteren',
    'numeric-code': 'Numerische code',
    'wexcode_next': 'Probeer het opnieuw',
    'city': 'Stad',
    'exchange_currency': 'Wisselvaluta',
    'select_type_advert': 'Advertentietype selecteren',
    tfa_code: 'TFA-code',
    platform: 'Platform',
    autoconfirmation_order: 'Autoconfirmatie',
    user_price: 'Gebruikersprijs',
    price_from_platform: 'Prijs vanaf het platform',
    profit: 'Winst',
    order: 'Order',
    user_buyer: 'Koper',
    user_seller: 'Verkoper',
    exchange_currency_sell: 'Valuta die u wenst te verkopen',
    'payment-currency_sell': 'Valuta die u wenst te ontvangen',
    exchange_currency_buy: 'Valuta die u wenst te kopen',
    'payment-currency_buy': 'Valuta die u wenst te wisselen'
  },

};
const newError = {
  "32700": "Onbekende error op de server",
  "32701": "Onbekende error op de server",
  "32702": "Onbekende error op de server",
  "32703": "API-methode niet gevonden",
  "32704": "De sessie is niet geldig",
  "32705": "De sessie is niet geldig",
  "32706": "Verkeerde TFA-code",
  "32707": "Verkeerde TFA-code",
  "40000": "Valuta niet gevonden",
  "40001": "Valuta niet gevonden",
  "40002": 'Ongeldig valutatype',
  "41000": "Portefeuille werd niet gecreëerd",
  "41001": "Ongeldige coupon",
  "41002": "Ongeldige coupon",
  "41003": "Fout bij de ingave van de WEX-code",
  "41004": "Ongeldig hash-adres",
  "41005": "Portefeuille niet gevonden",
  "41006": "Onvoldoende fondsen",
  "41007": "Onvoldoende fondsen",
  "41008": "Onvoldoende fondsen",
  "41009": "Fout: creatie van de transactie is mislukt",
  "41010": "De verkoper werd niet gevonden",
  "41011": "Koper niet gevonden",
  "41012": "De verkoper werd niet gevonden",
  "41013": "Koper niet gevonden",
  "42000": "Betalingssysteem niet gevonden",
  "43000": "Betalingssysteem niet gevonden",
  "43001": "Betalingssysteem niet gevonden",
  "44000": "Ik probeer niet gevonden",
  "44001": "Ik probeer niet gevonden",
  "45000": "De tijd van de transactie is niet gespecifieerd",
  "45001": "De tijd van de transactie is niet gespecifieerd",
  "45002": "Autobatterijen is niet gespecifieerd",
  "45003": "Autobatterijen is niet gespecifieerd",
  "45004": "Het transactietype is niet gespecifieerd",
  "45005": "Het transactietype is niet gespecifieerd",
  "45006": "Het minimumbedrag is niet correct", "45007": "Het maximumbedrag is niet correct",
  "45008": "Het maximumbedrag van de wisselverrichting is ongeldig",
  "45009": "Het maximumbedrag van de wisselverrichting is ongeldig",
  "45010": "De locatie is niet gespecifieerd",
  "45011": "Tarieven zijn niet gespecifieerd",
  "45012": "Tarieven zijn niet gespecifieerd",
  "45013": "Tarieven zijn niet gespecifieerd",
  "45014": "Tarieven zijn niet gespecifieerd",
  "45015": "De platformtarieven zijn niet gespecifieerd",
  "45016": "De platformtarieven zijn niet gespecifieerd",
  "45017": "De rentevoetwaarde is niet gespecifieerd",
  "45018": "De rentevoetwaarde is niet gespecifieerd",
  "45019": "Tarieven zijn niet gespecifieerd",
  "45020": "Onvoldoende fondsen om ads te creëren",
  "45021": "Ad creëren mislukt",
  "45022": "Advertentie niet gevonden",
  "45023": "De status van de transactie is niet gespecifieerd",
  "45024": "De status van de transactie is niet gespecifieerd",
  "45025": "Wijziging van de transactiestatus mislukt",
  "45026": "Ad niet gevonden",
  "45027": "Fout tijdens het bijwerken van de advertenties",
  "46000": "Transactie niet gevonden",
  "46001": "Transactie niet gevonden",
  "46002": "Token-ads niet gespecifieerd",
  "46003": "Token-ads niet gespecifieerd",
  "46004": "Het bedrag voor de transactie is niet gespecifieerd",
  "46005": "Het bedrag voor de transactie is niet gespecifieerd",
  "46006": "Transactie creëren mislukt",
  "46007": "De status van de transactie kan niet worden gewijzigd",
  "46008": "De transactie is niet bijgewerkt",
  "46009": "De status van de transactie is niet gespecifieerd",
  "46010": "De status van de transactie is niet gespecifieerd",
  "47000": "Geen berichttype specifiëren",
  "47001": "Geen berichttype specifiëren",
  "47002": "Het bericht is leeg",
  "47003": "Het bericht is leeg",
  "47004": "Verzenden mislukt",
  "47005": "De bericht-ID is gespecifieerd",
  "47006": "Verzenden mislukt",
  "48000": "De locatie is niet gespecifieerd",
  "48001": "De locatie is niet gespecifieerd",
  "49000": "Fout tijdens de creatie van de portefeuille",
  "50000": "Fout tijdens het versturen",
  "50001": "De evaluatie specifiëren",
  "50002": "De evaluatie specifiëren",
  "50003": "Commentaar is vereist",
  "51000": "De gebruiker werd niet gevonden",
  "51001": "E-mail is niet gespecifieerd",
  "51002": "Ongeldig e-mailformaat",
  "51003": "E-mail is reeds in gebruik",
  "51004": "Gebruikersnaam is niet gespecifieerd",
  "51005": "Ongeldig gebruikersnaamformaat",
  "51006": "Gebruikersnaam is reeds in gebruik",
  "51007": "Het wachtwoord is niet gespecifieerd",
  "51008": "Ongeldig wachtwoord",
  "51009": "Limiet overschreden log",
  "51010": "Wijziging wachtwoord mislukt",
  "51011": "Fout tijdens het registreren",
  "51012": "Ongeldige activatiecode werd niet gevonden",
  "51013": "Ongeldige activatiecode werd niet gevonden",
  "51014": "Activeren gebruiker mislukt",
  "51015": "De transactie is voor een gegeven gebruiker niet beschikbaar.",
  "51016": "De status van de TFA specifiëren",
  "51017": "TFA is reeds geactiveerd",
  "51018": "Het TFA-type is niet gespecifieerd",
  "51019": "Verkeerd type TFA",
  "52000": "De naam van de API ingeven",
  "52001": "Ongeldig naamformaat",
  "52002": "API creëren mislukt",
  "52003": "API niet gevonden",
  "52004": "API niet gevonden",
  "52005": "Bijwerken API mislukt",
  "52006": "API-sleutel niet gevonden",
  "52007": "Ongeldige API-sleutel",
  "52008": "Bijwerken API mislukt",
  "52009": "Bijwerken API mislukt",
  "52010": "Bijwerken API mislukt",
  "52011": "Bijwerken API mislukt",
  "53000": "IP werd niet gevonden",
  "53001": "IP werd niet gevonden",
  "53002": "IP toevoegen mislukt",
  "53003": "IP verwijderen mislukt",
  "53004": "IP werd niet gevonden",
  "54000": "Onmogelijk om API bij te werken",
  "54001": "Onmogelijk om API bij te werken",
  "54002": "Onmogelijk om API bij te werken",
  "51020": "Bevestiging recaptcha mislukt",
  "51021": "Bevestiging recaptcha mislukt",
  "51022": "Opnieuw versturen van de activatie-e-mail zal na 60 seconden mogelijk zijn",
  "51015_activation_request": "Uw account is reeds geactiveerd. <a href='/user/login'>Welkom</a>" ,
  "51000_activation_request": "U heeft mogelijke een tikfout gemaakt of uw e-mail is nog niet geregistreerd."
};
const error = {
  'error': 'Fout',
'order-not-found': 'Er zijn geen orders met een dergelijke status',
  '404': 'Pagina niet gevonden',
...newError,
  error_send_code: 'Er is een fout opgetreden, de code is niet verstuurd. Probeer het opnieuw',
  error_check_data: 'Controleer de ingevoerde gegevens',
  invalid_ip: 'IP-adres heeft een ongeldig formaat',
  advert_create: {
  '-33001': 'Type werd niet gevonden',
    '-33002': 'Type is niet geldig',
    '-33003': 'Valuta niet gevonden',
    '-33004': 'Valuta is niet geldig',
    '-33005': `De minimum transactielimietwaarde kan niet kleiner zijn dan nul`,
    '-33006': `De bedraglimietwaarde kan niet kleiner zijn dan nul`,
    '-33007': `De minimum transactielimiet kan niet groter zijn dan de maximum transactielimiet`,
    '-33008': `Bedraglimiet niet gevonden`,
    '-33009': `Bedraglimiet is niet geldig`,
    '-33010': `De bedraglimietwaarde kan niet kleiner zijn dan de minimum transactielimiet`,
    '-33011': `Betalingsvaluta werd niet gevonden`,
    '-33012': `Betalingsvaluta is niet geldig`,
    '-33013': `Het veld "Wisselvaluta" is gelijk aan "Betalingsvaluta"`,
    '-33014': 'Tarief voor een valuta-wisseleenheid werd niet gevonden',
    '-33015': 'Tarief voor een valuta-wisseleenheid is niet geldig',
    '-33016': 'Betalingssysteem werd niet gevonden',
    '-33017': 'Betalingssysteem bestaat niet',
    '-33018': 'Land werd niet gevonden',
    '-33019': 'Land bestaat niet',
    '-33020': 'Tijd vervallen werd niet gevonden',
    '-33021': 'Tijd vervallen werd is niet geldig',
    '-33022': 'Locatie is niet geldig',
    '-33023': 'Portefeuille bestaat niet',
    '-33024': 'Evenwicht niet gevonden',
    '-33025': 'Er was een fout tijdens de creatie van de advertentie',
    '-33037': 'Evenwicht niet gevonden',
},
advert_info: {
  '-33001': "Uuid van de advertentie werd niet gevonden",
    '-33002': 'Advertentie bestaat niet',
},
advert_set_status: {
  '-33001': 'Uuid van de advertentie werd niet gevonden',
    '-33002': "Status van de advertentie werd niet gevonden",
    '-33003': "Status van de advertentie is niet geldig",
    '-33004': 'Advertentie bestaat niet',
    '-33005': 'Orderstatusfout',
},
event_create: {
  '-33001': 'Uuid van het order is niet gevonden',
    '-33002': 'Order bestaat niet',
    '-33003': 'Toegang is verboden voor dit order',
    '-33004': 'Type werd niet gevonden',
    '-33005': 'Type is niet geldig',
    '-33006': 'Waarde niet gevonden',
    '-33007': 'Waarde is niet geldig',
    '-33008': 'Er was een fout tijdens de creatie van het evenement',
},
order_create: {
  '-33001': 'Advertentie-ID werd niet gevonden',
    '-33002': 'Advertentie bestaat niet',
    '-33003': 'Bedrag werd niet gevonden',
    '-33004': 'Bedrag is niet geldig',
    '-33005': 'Account bestaat niet',
    '-33006': 'Evenwicht niet gevonden',
    '-33007': 'Er was een fout tijdens de creatie van het order',
    '-33008': 'Orderstatusfout',
},
order_event_list: {
  '-33001': 'Uuid van het order is niet gevonden',
    '-33002': 'Order bestaat niet',
    '-33003': 'Toegang is verboden voor dit order',
},
order_info: {
  '-33001': 'Uuid van het order is niet gevonden',
    '-33002': 'Order bestaat niet',
},
order_info_details: {
  '-33001': 'Uuid van het order is niet gevonden',
    '-33002': 'Order bestaat niet',
},
order_set_status: {
  '-33001': 'Uuid van het order is niet gevonden',
    '-33002': 'Order bestaat niet',
    '-33003': 'Status van het order werd niet gevonden',
    '-33004': 'Status van het order is niet geldig',
    '-33005': 'Instellingsstatus is niet toegelaten',
},
place_search: {
  '-33001': 'Land werd niet gevonden',
    '-33002': 'Land bestaat niet',
    '-33003': 'Zoeken werd niet gevonden',
    '-33004': 'Onbekende fout',
},
user_auth_tfa_enable: {
  '-33001': 'Activeren niet gevonden',
},
user_login: {
  '-33001': 'E-mail werd niet gevonden',
    '-33002': 'E-mail is niet geldig',
    '-33003': 'Wachtwoord werd niet gevonden',
    '-33004': 'Param wachtwoord is niet geldig',
    '-33005': 'Verkeerde e-mail of wachtwoord',
    '-33006': 'Gebruiker is niet geactiveerd',
    '-33007': 'Verkeerde e-mail of wachtwoord',
    '-33008': 'Verkeerde e-mail of wachtwoord',
    '-33009': 'Verkeerde e-mail of wachtwoord',
    '-33010': 'Login-limiet overschreden'
},
advert_update: {
  '-33024': 'Fout tijdens het bijwerken van de ad',
},
common_error: {
  '-32000': 'Fout op de server',
    '-32007': 'Sessie is niet geldig',
    '-32008': 'Sessie is niet geldig',
    '-32009': 'Ongeldige TFA-code',
    '-32010': 'Verkeerd e-mailadres',
},
};

const p2p = { ...messages, error };


export default {
  form: {
    email: 'E-mailadres',
    password: 'Wachtwoord',
    confirm_pwd: 'Bevestig wachtwoord',
    auth_code: 'Authenticatiecode',
    your_login: 'Uw login',
    login: 'Login',
    enter_google_2fa_code: 'Voer de 6-cijferige code in',
    old_pwd: 'Oud wachtwoord',
    new_pwd: 'Nieuw wachtwoord',
    title: 'Titel',
    expired_time: 'Verlopen tijd',
    currency: 'Valuta',
    amount: 'Aantal',
    select_currency: 'Kies valuta',
    send_to: 'Verstuur naar',
    ...p2p.form,
  },
  action: {
    login: 'Login',
    create_acc: 'Account aanmaken',
    authenticate: 'Authenticeren',
    cancel: 'Annuleren',
    restore: 'Herstellen',
    change: 'Wijzingen',
    show_qr: 'QR-code weergeven',
    enable: 'Inschakelen',
    save_qr: 'QR-code opslaan',
    disable: 'Uitschakelen',
    create: 'Aanmaken',
    add: 'Toevoegen',
    save: 'Opslaan',
    copy: 'Kopiëren',
    send: 'Versturen',
    exchange: 'Exchange',
    ...p2p.action,
  },
  page: {
    activation_acc: 'Accountactivatie',
    sign_in: 'Registreren',
    sign_up: 'Aanmelden',
    sign_out: 'Uitloggen',
    create_your_acc: 'Uw account aanmaken',
    forgot_pwd: 'Wachtwoord vergeten?',
    not_registered: 'Hebt u nog geen account? Maak er één aan.',
    already_registered: 'Hebt u al een account? Meld u aan.',
    success_registered: 'Bedankt voor uw aanmelding! Het bericht met instructies voor activering is naar uw e-mail verzonden.',
    success_activated_acc: 'Uw account is succesvol geactiveerd.',
    error_activated_acc: 'FOUT. Uw account is niet geactiveerd.',
    request_new_pwd: 'Nieuw wachtwoord aanvragen',
    success_recovery_mail_pwd: 'Succes! Het bericht met de instructies voor het herstellen van het wachtwoord is naar uw e-mail verzonden.',
    enable_2fa: 'Schakel tweestapsverificatie in',
    disable_2fa: 'Schakel tweestapsverificatie uit',
    text_google_2fa: ` Activeer voor de veiligheid van uw account de tweefactorauthenticatie (2FA).Hiervoor hebt u de 6-cijferige code nodig. Om deze code te verkrijgen, downloadt u Google Authenticator en scant u de QR code.`,
    text_google_2fa_disable: `Als u 2FA wilt uitschakelen, voert u de 6-cijferige code in die wordt verstrekt door de Google Authenticator-app en klikt u vervolgens op 'Uitschakelen'. `,
    qr_code: 'QR-code',
    your_secret_key: 'Uw geheime sleutel',
    change_password: 'Wijzig wachtwoord',
    create_user_api: 'Gebruikers-API aanmaken',
    title: 'Titel',
    date: 'Datum',
    status: 'Status',
    active: 'Actief',
    deactive: 'Inactief',
    have_not_api_key: 'U hebt deze sleutel niet',
    your_api_keys: 'Uw API-sleutels',
    api_methods_acc: 'Methoden accounts',
    api_convert_currency: 'Methoden geheime valuta',
    api_withdraw: 'Methoden opnemen',
    actions: 'Acties',
    ip_address: 'IP-adres',
    settings: 'Instellingen',
    make_deposit: 'Doe een storting',
    autoconvert_into_cnx: 'Autoconverteren in CNX',
    deposit_qr: 'Doe een storting door hieronder te scannen',
    deposit_copy: 'of direct te storten op',
    choose_withdraw_type: 'Kies een opnametype',
    you_give: 'U geeft',
    you_receive: 'U ontvangt',
    exchange_rate: 'Wisselkoers',
    fee: 'Kosten',
    pair: 'Paar',
    price: 'Prijs',
    volume: 'Volume',
    charts: 'Grafieken',
    today: 'Vandaag',
    this_week: 'Deze week',
    all: 'Alles',
    this_month: 'Deze maand',
    last_month: 'Afgelopen maand',
    this_year: 'Dit jaar',
    previous: 'Vorige',
    next: 'Volgende',
    deposit: 'Storten',
    transactions:'Transacties',
    withdraw:'Herroepen',
    exchange:'Uitwisselen',
    restore: 'Herstellen',
    balances: 'Saldo’s',
    fiat: 'Fiat'
  },
  message: {
    success: 'Succes',
    status_change_autoconvert_into_cnx: ' Status is met succes gewijzigd.',
    ...p2p.message,
  },
  error: {
    fill_all_field: 'Vul al de Velden in!',
    wrong_user: 'Access denied: verkeerde gebruiker of wachtwoord',
    not_activated_acc: 'We hebben u een bericht gestuurd met de link naar uw e-mailadres. Volg de link in uw bericht om uw account te activeren.',
    invalid_auth_key: 'Ongeldige authenticatiecode!',
    invalid_format: 'Ongeldig formaat, %{field}!',
    unknown_error: 'Onbekende fout!',
    enter_6_dig: 'Voer de 6-cijferige code in',
    register_error: 'Fout bij registratie!',
    different_pwd: 'De wachtwoorden zijn verschillend!',
    fail_change_pwd: 'Wachtwoord wijzigen is mislukt!',
    wrong_user_restore_pwd: 'Verkeerde gebruiker!',
    fail_activated_2fa: 'Kan 2FA niet activeren!',
    is_empty: '%{field} is leeg!',
    should_num: '%{field} moet numeriek zijn!',
    error_send: 'Fout verzenden',
    error: 'Fout',
    exchange_not_balance: 'Het is mogelijk dat u niet genoeg geld hebt om transacties in het account te verhandelen.',
    ...p2p
  },
  fee: {
    cnx: 'Het minimale bedrag = 0,001 CNX | Geen kosten',
    btc: 'Het minimale bedrag = 0,002 BTC | Kosten = 0,001 BTC',
    eth: 'Het minimale bedrag = 0,002 ETH | Kosten = 0,001 ETH'
  },
  statusTransaction: {
    created: 'Aangemaakt',
    moderated: 'Gematigd',
    unconfirmed: 'Niet bevestigd',
    confirmed: 'Bevestigd',
    admin_moderate_success: 'Goedgekeurd door beheerder',
    admin_moderate_cancel: 'Geannuleerd door beheerder',
    admin_moderate_wait: 'Gematigd door beheerder',
    moderate: 'Matig'
  },
  validate: {
    'empty_field': 'Veld mag niet leeg zijn',
    'empty_fields': 'Alle velden mogen niet leeg zijn',
    'invalid_email': 'E-mail moet geldig zijn',
    'invalid_username': "Ongeldig gebruikersnaam",
    'invalid_repassword': 'Wachtwoorden stemmen niet overeen',
    'invalid_select_currency': 'U moet een valuta selecteren',
    'invalid_password_short': 'Uw wachtwoord moet uit ten minste 8 karakters bestaan',
  },
  order_status: {
    created_buyer: 'Wachten op bevestiging van de verkoper',
    accepted_buyer: 'Wachten op de fondsen van de koper',
    paid_buyer: 'Betaald',
    moderated_buyer: 'Met matiging',
    confirmed_buyer: 'Bevestigd',
    completed_buyer: 'De deal was een succes',
    timeout_confirmed_buyer: 'De transactietijd is voorbij, de geldtransfer werd uitgevoerd',
    canceled_buyer: 'Deal geannuleerd door de verkoper',
    timeout_canceled_buyer: 'Transactietijd is vervallen',
    created_seller: 'Wachten op bevestiging van de koper',
    accepted_seller: 'Wachten op transfer van de fondsen van de koper',
    paid_seller: 'Betaald',
    moderated_seller: 'Met matiging',
    confirmed_seller: 'Bevestigd',
    completed_seller: 'De deal was een succes',
    timeout_complete_seller: 'De transactietijd is voorbij, de geldtransfer werd uitgevoerd',
    canceled_seller: 'Deal geannuleerd door de koper',
    timeout_canceled_seller: 'Transactietijd is vervallen',
  },
  status_adverts: {
    actived: 'Actief',
    removed: 'Verwijderd',
    canceled: 'Inactief',
  },
  status_orders: {
    created: 'Wachten op goedkeuring',
    accepted: 'Wachten op transfer van de fondsen',
    paid: 'Betaald',
    moderated: 'Gematigdheid',
    confirmed: 'Bevestigd',
    completed:'Deal werd met succes voltooid',
    timeout_confirmed: 'Transactietijd is vervallen',
    timeout_canceled: 'Transactietijd is vervallen',
    canceled: 'Deal werd geannuleerd',
  },
  user_status: {
    activated: 'Gebruiker is geactiveerd',
    blocked: 'Gebruiker is geblokkeerd',
  },
  menu: {
    'buy': 'Kopen',
    'sell': 'Verkopen',
    'guide': 'Gids',
    'support': 'Steun',
    'terms-of-service': 'Servicevoorwaarden',
    'orders': 'Orders',
    'rates': 'Tarieven'
  },
  user: {
    'user': 'Gebruiker',
    'registration': 'Registratie',
    'login': 'Login',
    'logout': 'Logout',
    'account': 'Account',
    'profile': 'Profiel',
    'username': 'Gebruikersnaam',
    'password': 'Wachtwoord',
    'name': 'Naam',
    'phone': 'Telefoon',
    'adverts': 'Advertenties',
    'wallet': 'Portefeuille',
  },
  "coupon": {
    "checking_coupon": "Kaartcontrole",
    "scanning_coupon": "Scan de kaart",
    "begin_scanning_coupon": "Scan de kaart",
    "not_access_camera": "U moet toegang tot de camera verlenen en de pagina vernieuwen",
    "kortingsbon": "Kaart",
    "check": "Controleer",
    "create_coupon": "Maak een code",
    "time_of_action": "Actietijd",
    "ontvanger": "Ontvanger",
    "select_currency": "Selecteer een valuta",
    "activate_coupon": "Activeer de kaart",
    "apply_coupon": "Kaart aanvullen",
    "toepassen": "Een storting doen",
    "deactivate_coupon": "Deactiveren van de kaart",
    "deactiveren": "Deactiveren ",
    "informatie": "Informatie over de kaart",
    "creator": "Eigenaar",
    "given": "Met een wachtwoord beveiligd",
    "not_given": "Is niet met een wachtwoord beveiligd",
    "time_of_redeem": "Activeringstijd",
    "invalid_qrcode": "Ongeldige Qr-code",
    "check_coupon_fail": "De kaartgegevens zijn niet gevonden",
    "field_empty": "Veld \"%{field}\" moet worden ingevuld",
    "take_currency": "U moet een valuta opgeven",
    "success_create_coupon": "De kaart is met succes aangemaakt",
    "error_length_comment": "De opmerking overschrijdt het toegestane aantal tekens (255)",
    "error_create_coupon": "Er is een fout opgetreden bij het maken van een kaart",
    "need_password": "U moet een wachtwoord opgeven",
    "activate_coupon_success": "De kaart is geactiveerd",
    "activate_coupon_error": "Er is een fout opgetreden bij het activeren van de kaart",
    "not_found_coupon": "De kaart werd niet gevonden",
    "coupon_was_used": "De kaart is al gebruikt",
    "fail_apply_coupon": "Kan de kaart niet bijvullen",
    "coupon_refilled": "De kaart is bijgevuld",
    "jouw_coupon": "Uw kaarten",
    "optional_field": "Niet verplicht",
    "types": {
      "debit": "Kaart",
      "empty": "Wegwerpkaart",
      "joker": "Joker"
    },
    "status": {
      "actived": "Niet geactiveerd",
      "redeemed": "Uitgegeven",
      "created": "Wachten op bijvulling"
    }
  }
}