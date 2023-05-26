import React, { useEffect, useState } from 'react'
import Grid from '../components/Grid'
import axios from 'axios'
import jsonFile from "../raw.json"
import Dashboard from '../components/Dashboard'
import { getURL } from 'next/dist/shared/lib/utils'
export default function Home() {
    const [count, setCount] = React.useState(0)
    const [username, setUsername] = React.useState('')
    const [webhook, setWebhook] = React.useState('https://api.upsx.dev/result/saveResults')
    const [url, setUrl] = React.useState('')
    const [gameInfo, setGameInfo] = React.useState({})
    const [sid, setSid] = React.useState('')
    const [token, setToken] = React.useState('')
    const [gameCode, setGameCode] = React.useState('')
    const [balance, setBalance] = React.useState(0)
    const [patterns, setPatterns] = React.useState([])
    const [psid, setPsid] = React.useState('')
    const [gameList, setGameList] = React.useState([])
    const [isLogin, setIsLogin] = React.useState(false)
    const [buyFreeSpin, setBuyFreeSpin] = React.useState(false)
    const [proxyServers, setProxyServers] = React.useState([
        "http://159.223.63.88:9988",
        "http://159.223.60.12:9988",
        "http://157.230.34.139:9988",
        "http://159.223.63.91:9988",
        "http://157.230.255.152:9988",
        "http://139.59.106.234:9988",
        "http://188.166.185.55:9988",
        "http://159.89.194.203:9988",
        "http://159.223.59.109:9988",
        "http://165.22.105.28:9988",
        "http://174.138.18.98:9988",
        "http://188.166.240.65:9988",
        "http://178.128.117.45:9988",
        "http://188.166.246.123:9988",
        "http://134.209.111.132:9988",
        "http://206.189.92.1:9988",
        "http://128.199.71.149:9988",
        "http://165.22.251.96:9988",
        "http://165.22.104.51:9988",
        "http://143.198.205.57:9988",
        "http://188.166.229.123:9988",
        "http://159.65.133.223:9988",
        "http://139.59.108.109:9988",
        "http://128.199.250.186:9988",
        "http://157.230.255.120:9988",
        "http://188.166.223.125:9988",
        "http://188.166.250.8:9988",
        "http://159.223.38.154:9988",
        "http://157.245.157.206:9988",
        "http://178.128.113.20:9988",
        "http://159.223.36.79:9988",
        "http://139.59.235.158:9988",
        "http://157.245.48.102:9988",
        "http://206.189.86.46:9988",
        "http://104.248.150.160:9988",
        "http://128.199.76.116:9988",
        "http://157.245.149.141:9988",
        "http://188.166.250.94:9988",
        "http://165.22.240.133:9988",
        "http://157.245.146.126:9988",
        "http://188.166.219.92:9988",
        "http://128.199.129.148:9988",
        "http://178.128.103.155:9988",
        "http://159.223.92.97:9988",
        "http://128.199.191.212:9988",
        "http://167.172.65.19:9988",
        "http://104.248.152.35:9988",
        "http://157.230.47.49:9988",
        "http://174.138.18.51:9988",
        "http://206.189.152.161:9988",
        "http://139.59.119.87:9988",
        "http://128.199.64.11:9988",
        "http://165.22.249.164:9988",
        "http://128.199.162.33:9988",
        "http://128.199.108.237:9988",
        "http://128.199.66.135:9988",
        "http://128.199.231.36:9988",
        "http://134.209.99.70:9988",
        "http://139.59.105.188:9988",
        "http://143.198.200.233:9988",
        "http://167.172.66.65:9988",
        "http://128.199.192.34:9988",
        "http://68.183.226.252:9988",
        "http://167.172.75.178:9988",
        "http://146.190.90.189:9988",
        "http://128.199.121.43:9988",
        "http://157.245.206.247:9988",
        "http://159.223.34.244:9988",
        "http://159.223.93.155:9988",
        "http://188.166.217.175:9988",
        "http://157.230.246.41:9988",
        "http://134.209.97.161:9988",
        "http://157.245.58.60:9988",
        "http://167.99.68.163:9988",
        "http://146.190.110.224:9988",
        "http://128.199.167.143:9988",
        "http://178.128.98.131:9988",
        "http://167.172.82.198:9988",
        "http://188.166.229.215:9988",
        "http://159.223.62.129:9988",
        "http://128.199.223.36:9988",
        "http://159.89.192.80:9988",
        "http://178.128.97.74:9988",
        "http://165.22.249.47:9988",
        "http://157.245.148.50:9988",
        "http://165.22.109.62:9988",
        "http://139.59.233.243:9988",
        "http://206.189.150.190:9988",
        "http://165.22.49.233:9988",
        "http://128.199.130.233:9988",
        "http://174.138.28.64:9988",
        "http://143.198.94.247:9988",
        "http://188.166.178.196:9988",
        "http://178.128.21.155:9988",
    ])
    const [proxyServer, setProxyServer] = React.useState('')
    const tmp_webhook = typeof window !== 'undefined' ? localStorage.getItem('webhook') : ""
    function test() {
        const url = 'https://wbgame.jlwinwin.com/ms/?ssoKey=743a24cbb6d9d3508293c40876205649a58cefa5&lang=en-US&apiId=1244&be=moc.niwniwlj.ipabewbw&domain_gs=niwniwlj&domain_platform=moc.niwniwlj.mroftalp-tolsbw&gameId=101&gs=moc.niwniwlj.df-tolsbw&legalLang=true'
        console.log(queryStringToObject(url))
    }
    function queryStringToObject(queryString) {
        const params = new URLSearchParams(queryString);
        return Object.fromEntries(params);
    }
    async function handlerSubmit(e) {
        e.preventDefault()
        try {
            let gameUrl = url;
            if (!gameUrl) {
                gameUrl = await getGameUrl(username, gameCode)
                setUrl(gameUrl)
            }
            const urlDataUrl = urlData(gameUrl)
            const verify = await verifySession(urlDataUrl.params.get('ot'), urlDataUrl.gameId, urlDataUrl.params.get('btt'), urlDataUrl.params.get('ops'))
            const gameName = urlData(verify.data.dt.geu).gameName;
            setGameCode(gameName)
            const token = verify.data.dt.tk;
            setToken(token)
            const info = await getGameInfo(gameName, token, urlDataUrl.params.get("btt"))
            setSid(info.dt.ls.si.sid)
            setBalance(info.dt.bl)
            setGameInfo(info)
            setIsLogin(true)
        } catch (error) {
            console.error(error)
            setIsLogin(false)
        }
    }
    async function spin() {
        try {
            const spin = await spinGame(token, sid)
            const lastPattern = [...patterns];
            let pattern = []

            setSid(spin.dt.si.sid)
            setBalance(spin.dt.si.bl)

            if (pattern.length == 0) {
                if (spin.dt.si.psid == spin.dt.si.sid) {
                    pattern.push(spin.dt.si)
                }
            } else {
                if (spin.dt.si.psid == spin.dt.si.sid) {
                    pattern = []
                    lastPattern.push(pattern)
                    setPatterns(lastPattern)
                    pattern.push(spin.dt.si)
                } else {
                    pattern.push(spin.dt.si)
                }
            }
        } catch (error) {
            console.error(error)
        }
    }
    async function saveToWebhook() {
        try {
            for (const pattern of patterns) {
                await saveWebHook(pattern, gameCode)
            }
        } catch (error) {
            console.log(error)
        }
    }
    async function saveWebHook(result, gameCode) {
        try {
            const { data } = await axios.post(webhook, {
                result,
                gameCode,
            })
        } catch (e) {
            console.error(e)
        }
    }
    const [gameCodeSelected, setGameCodeSelected] = useState([])
    async function spinAutomatic() {
        try {
            let lastSid = sid;
            setPatterns([])
            const lastPattern = [...patterns];
            let pattern = []
            let c = 0;
            let currentIndex = 0;
            // for (let x = 0; x < gameCodeSelected.length; x++) {
            while (true && c < count) {
                const spin = await spinGame(token, lastSid)
                if (pattern.length == 0) {
                    if (spin.dt.si.psid == spin.dt.si.sid) {
                        pattern.push(spin.dt.si)
                    }
                } else {
                    if (spin.dt.si.psid == spin.dt.si.sid) {
                        await saveWebHook(pattern, gameCode)
                        c++;
                        pattern = []
                        lastPattern.push(pattern)
                        setPatterns(lastPattern)
                        pattern.push(spin.dt.si)
                    } else {
                        pattern.push(spin.dt.si)
                    }
                }
                setSid(spin.dt.si.sid)
                setBalance(spin.dt.si.bl)
                setPsid(spin.dt.si.psid)
                lastSid = spin.dt.si.sid;
            }
            // }
        } catch (error) {

        }
    }
    async function getGameUrl(username, gameCode) {
        const url = "https://pgapi.upsx.dev/user/login";
        const data = {
            username,
            gameCode,
        };
        const { data: dt } = await axios.post(url, data);
        return dt.game.data.url;
    }
    async function getGames() {
        const url = "https://pgapi.upsx.dev/user/games";
        const { data: dt } = await axios.get(url);
        setGameList(dt.data.games)
    }
    async function spinGame(token, sid) {
        const url = `${proxyServer}/spin?game=${gameCode}`;
        const data = {
            id: sid,
            wk: "0_C",
            btt: 1,
            atk: token,
            pf: 1,
            cs: gameInfo.dt.cs[0],
            ml: gameInfo.dt.ml[0],
            fb: buyFreeSpin ? 2 : 0,
        };
        const response = await axios.post(url, data);
        return response.data;
    }
    async function verifySession(token, gameId, btt, os) {
        const url = `${proxyServer}/verifyOperatorPlayerSession`;
        const data = {
            tk: randomString(32),
            otk: token,
            gi: gameId,
            vc: 0,
            pf: 1,
            btt,
            l: "th",
            os: os,
        };
        const response = await axios.post(url, data);
        return response;
    }
    function randomString(length) {
        const chars = "0123456789abcdefghiklmnopqrstuvwxyz";
        let randomstring = "";
        for (let i = 0; i < length; i++) {
            const rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum, rnum + 1);
        }
        return randomstring;
    }
    function urlData(url) {
        // get path domain and params
        const udt = new URL(url);
        const path = udt.pathname;
        const domain = udt.origin;
        const params = udt.searchParams;
        const gameId = path.split("/")[1];
        const gameName = path.split("/")[2] || "";
        return { path, domain, params, gameId, gameName };
    }

    async function getGameInfo(gameName, token, btt) {
        const url = `${proxyServer}/GetGameInfo?game=${gameName}`;
        const data = {
            atk: token,
            pf: 1,
            btt,
        };
        const response = await axios.post(url, data);
        return response.data;
    }
    function handleBlurSaveToLocalStorage(e) {
        const { name, value } = e.target;
        localStorage.setItem('webhook', value);
    }
    useEffect(() => {
        getGames()
    }, [])
    const max = Math.max(...patterns.map(obj => {
        return obj[obj.length - 1].aw
    }));
    return (
        <Dashboard>
            <div className='w-full max-w-5xl mx-auto py-7'>
                <div className="text-center text-2xl font-bold text-sky-800 mb-3 border-b py-3">โปรแกรมเก็บค่า PGSLOT</div>
                <div className="grid grid-cols-2 gap-4">
                    <form onSubmit={handlerSubmit} className='col-span-1'>
                        <div className="flex flex-col gap-3 mb-3">
                            <div className="flex gap-1">
                                <div className="flex flex-col gap-2 w-2/3">
                                    <label htmlFor="game_code">รหัสเกม</label>
                                    <div className="max-h-96 overflow-y-auto">
                                        {gameList.map((game, index) => <div className='flex items-center gap-2'>
                                            <input type="radio" name="game_code" id={game.code} value={game.code} onChange={(e) => setGameCode(e.target.value)} />
                                            <label htmlFor={game.code}>{game.name} <span className="text-green-500">{game.code}</span> <span className="text-pink-500">[{game.rank}]</span></label>
                                        </div>)}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 w-1/3">
                                    <label htmlFor="feature">ซื้อฟีเจอร์</label>
                                    <select type="text" className='form-input' id='feature'
                                        onChange={(e) => setBuyFreeSpin(e.target.value)}
                                    >
                                        <option value={false}>ไม่ซื้อ</option>
                                        <option value={true}>ซื้อ</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="username">URL เข้าเกม</label>
                                <input type="text" className='form-input' id='username'
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="count">เก็บค่า (ครั้ง)</label>
                                <input type="number" step={1} className='form-input' id='count'
                                    value={count}
                                    onChange={(e) => setCount(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="username">ชื่อผู้ใช้งาน</label>
                                <input type="text" className='form-input' id='username'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <button type='button' className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setUsername(randomString(10))}>สุ่ม</button>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="username">Webhook ใช้สำหรับเก็บ Dataset</label>
                                <input type="text" step={1} className='form-input' id='username'
                                    value={webhook}
                                    onChange={(e) => setWebhook(e.target.value)}
                                    onBlur={handleBlurSaveToLocalStorage}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="feature">Proxy Server Rate Limit Bypass</label>
                                <select type="text" className='form-input' id='feature'
                                    onChange={(e) => setProxyServer(e.target.value)}
                                >
                                    <option value="">-- เลือก Proxy Server --</option>
                                    {proxyServers.map((i, key) => <option key={key} value={i}>{key + 1} | {i}</option>)}
                                </select>
                            </div>
                            {/* <div>
                                {tmp_webhook ? <button onClick={() => setWebhook(tmp_webhook)} className="rounded-full px-2 bg-sky-50 text-sky-500">{tmp_webhook || "-"}</button> : ''}
                            </div> */}
                            <div className="flex flex-col gap-1">
                                <button type='submit' className="bg-blue-500 text-white px-4 py-2 rounded-md">ล็อกอินเกม</button>
                                <button type='button' onClick={test} className="bg-blue-500 text-white px-4 py-2 rounded-md">test</button>
                            </div>
                            {isLogin && <div className='flex flex-col gap-1'>
                                <button type='button' onClick={spin} className="bg-blue-500 text-white px-4 py-2 rounded-md">สปินเทส</button>
                                <button type='button' onClick={spinAutomatic} className="bg-blue-500 text-white px-4 py-2 rounded-md">หมุนอัตโนมัติ</button>
                            </div>}
                        </div>
                        <div className='p-5 rounded-xl shadow-xl bg-white'>
                            <h1 className="text-lg font-bold py-2">{isLogin ? "รายงานผลปัจจุบัน" : "ยังไม่ได้ล็อกอิน"}</h1>
                            <ul>
                                <li>จำนวน : {patterns.length} รูปแบบ</li>
                                <li>อ้างอิง Flow : {sid || "-"}</li>
                                <li>ยอดเงินปัจจุบัน : {balance || "-"}</li>
                                <li>เครดิตสเต็บ : {gameInfo?.dt?.cs?.[0] || "-"}</li>
                                <li>ตัวคูณ : {gameInfo?.dt?.ml?.[0] || "-"}</li>
                                <li>โทเคน : {token || "-"}</li>
                            </ul>
                        </div>
                    </form>
                    <div>
                        <div className="mb-3 p-4 shadow-lg rounded-xl bg-white text-lg font-bold">
                            อัตราการชนะสูงสุด : <span className="text-green-500">{max}</span> เท่า
                        </div>
                        <div className='max-h-96 overflow-y-auto rounded-xl bg-white shadow-lg p-4'>
                            <h1 className="text-xl py-2 font-bold">สรุป</h1>
                            {patterns.length < 1 && <p>- ยังไม่มีการบันทึก -</p>}
                            {patterns.map((i, key) => <div key={key} >
                                - Flow Item : {i.length} รูปแบบ, ชนะทั้งหมด : {i[i.length - 1].aw}, เข้าฟรีสปิน : {i[i.length - 1].fs ? "ใช่ / ผลชนะ => " + i[i.length - 1].fs.aw : "ไม่ใช่"}
                            </div>)}
                        </div>

                    </div>
                </div>
            </div>
        </Dashboard>
    )
}
