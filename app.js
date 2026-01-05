const { useState, useMemo, useEffect, useCallback, useId } = React;

// --- Icons (Inline SVGs to prevent dependency issues) ---
const IconBase = ({ children, size = 24, className = "", ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
    >
        {children}
    </svg>
);

const Home = (props) => <IconBase {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></IconBase>;
const Shield = (props) => <IconBase {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></IconBase>;
const Calculator = (props) => <IconBase {...props}><rect width="16" height="20" x="4" y="2" rx="2" /><line x1="8" x2="16" y1="6" y2="6" /><line x1="16" x2="16" y1="14" y2="18" /><path d="M16 10h.01" /><path d="M12 10h.01" /><path d="M8 10h.01" /><path d="M12 14h.01" /><path d="M8 14h.01" /><path d="M12 18h.01" /><path d="M8 18h.01" /></IconBase>;
const DollarSign = (props) => <IconBase {...props}><line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></IconBase>;
const PenTool = (props) => <IconBase {...props}><path d="m12 19 7-7 3 3-7 7-3-3z" /><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="m2 2 7.586 7.586" /><circle cx="11" cy="11" r="2" /></IconBase>;
const CheckCircle = (props) => <IconBase {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></IconBase>;
const AlertTriangle = (props) => <IconBase {...props}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></IconBase>;
const Info = (props) => <IconBase {...props}><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></IconBase>;
const ArrowRightLeft = (props) => <IconBase {...props}><path d="m16 3 4 4-4 4" /><path d="M20 7H4" /><path d="m8 21-4-4 4-4" /><path d="M4 17h16" /></IconBase>;
const MessageCircle = (props) => <IconBase {...props}><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" /></IconBase>;
const Copy = (props) => <IconBase {...props}><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></IconBase>;
const Check = (props) => <IconBase {...props}><polyline points="20 6 9 17 4 12" /></IconBase>;
const Grid = (props) => <IconBase {...props}><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></IconBase>;
const ClipboardList = (props) => <IconBase {...props}><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" /></IconBase>;
const BookOpen = (props) => <IconBase {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></IconBase>;
const Search = (props) => <IconBase {...props}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></IconBase>;
const CheckSquare = (props) => <IconBase {...props}><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></IconBase>;
const Printer = (props) => <IconBase {...props}><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect width="12" height="8" x="6" y="14" /></IconBase>;
const TrendingUp = (props) => <IconBase {...props}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></IconBase>;
const PieChart = (props) => <IconBase {...props}><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></IconBase>;
const Sun = (props) => <IconBase {...props}><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></IconBase>;
const Download = (props) => <IconBase {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></IconBase>;
const Bookmark = (props) => <IconBase {...props}><path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" /></IconBase>;
const RefreshCw = (props) => <IconBase {...props}><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></IconBase>;
const X = (props) => <IconBase {...props}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></IconBase>;
const Moon = (props) => <IconBase {...props}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></IconBase>;
const Share2 = (props) => <IconBase {...props}><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></IconBase>;
const RotateCcw = (props) => <IconBase {...props}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></IconBase>;
const History = (props) => <IconBase {...props}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M12 7v5l4 2" /></IconBase>;
const ChevronLeft = (props) => <IconBase {...props}><path d="m15 18-6-6 6-6" /></IconBase>;
const ChevronRight = (props) => <IconBase {...props}><path d="m9 18 6-6-6-6" /></IconBase>;

const HelpCircle = (props) => <IconBase {...props}><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></IconBase>;
const Trash2 = (props) => <IconBase {...props}><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></IconBase>;

const Percent = (props) => <IconBase {...props}><line x1="19" y1="5" x2="5" y2="19" /><circle cx="6.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></IconBase>;
const Users = (props) => <IconBase {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></IconBase>;
const Building = (props) => <IconBase {...props}><rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></IconBase>;
const Link2 = (props) => <IconBase {...props}><path d="M9 17H7A5 5 0 0 1 7 7h2" /><path d="M15 7h2a5 5 0 1 1 0 10h-2" /><line x1="8" x2="16" y1="12" y2="12" /></IconBase>;
const FileDown = (props) => <IconBase {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M12 18v-6" /><path d="m9 15 3 3 3-3" /></IconBase>;
const Award = (props) => <IconBase {...props}><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></IconBase>;
const Banknote = (props) => <IconBase {...props}><rect width="20" height="12" x="2" y="6" rx="2" /><circle cx="12" cy="12" r="2" /><path d="M6 12h.01M18 12h.01" /></IconBase>;
const BarChart3 = (props) => <IconBase {...props}><path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></IconBase>;
const FileText = (props) => <IconBase {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></IconBase>;
const Calendar = (props) => <IconBase {...props}><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></IconBase>;

// --- Constants ---
// 한국은행 기준금리 (2026.01.01 기준, 변동 시 업데이트 필요)
const BOK_RATE_DEFAULT = 2.50;
const BOK_RATE_DATE_DEFAULT = "2026.01.01";

// --- Utils ---
// LocalStorage cache to minimize redundant access
const localStorageCache = {};

const getSafeLocalStorage = (key, defaultValue = '') => {
    // Check cache first
    if (localStorageCache[key] !== undefined) {
        return localStorageCache[key];
    }
    try {
        const saved = localStorage.getItem(key);
        const value = (saved === null || saved === '') ? defaultValue : saved;
        localStorageCache[key] = value;
        return value;
    } catch (e) {
        console.warn('localStorage access failed:', e);
        return defaultValue;
    }
};

const setSafeLocalStorage = (key, value) => {
    try {
        const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
        localStorage.setItem(key, stringValue);
        localStorageCache[key] = stringValue; // Update cache
    } catch (e) {
        console.warn('localStorage write failed:', e);
    }
};

// Debounced localStorage write (reduces write frequency)
const debouncedSetStorage = (() => {
    const timers = {};
    return (key, value, delay = 300) => {
        clearTimeout(timers[key]);
        timers[key] = setTimeout(() => setSafeLocalStorage(key, value), delay);
    };
})();

// Input validation utilities
const ValidationRules = {
    positive: (value) => parseNumber(value) >= 0,
    required: (value) => value !== '' && value !== null && value !== undefined,
    maxValue: (max) => (value) => parseNumber(value) <= max,
    minValue: (min) => (value) => parseNumber(value) >= min,
    range: (min, max) => (value) => {
        const num = parseNumber(value);
        return num >= min && num <= max;
    }
};

const validateInput = (value, rules) => {
    for (const rule of rules) {
        if (!rule(value)) return false;
    }
    return true;
};

// Custom hook for loading state
const useLoading = (initialState = false) => {
    const [isLoading, setIsLoading] = useState(initialState);
    const withLoading = useCallback(async (fn) => {
        setIsLoading(true);
        try {
            await fn();
        } finally {
            setIsLoading(false);
        }
    }, []);
    return [isLoading, setIsLoading, withLoading];
};

// Custom hook for persisted state with optimized localStorage
const usePersistedState = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        try {
            const saved = getSafeLocalStorage(key, null);
            if (saved === null || saved === undefined) return defaultValue;
            // If already parsed by getSafeLocalStorage, return as is
            if (typeof saved === 'object') return saved;
            // Try parsing if it's a string that looks like JSON
            if (typeof saved === 'string' && (saved.startsWith('{') || saved.startsWith('['))) {
                try {
                    return JSON.parse(saved);
                } catch {
                    return saved;
                }
            }
            return saved;
        } catch (e) {
            console.warn('usePersistedState initialization failed:', e);
            return defaultValue;
        }
    });

    useEffect(() => {
        try {
            debouncedSetStorage(key, typeof value === 'string' ? value : JSON.stringify(value));
        } catch (e) {
            console.warn('usePersistedState save failed:', e);
        }
    }, [key, value]);

    return [value, setValue];
};

const formatNumber = (num) => {
    if (!num && num !== 0) return '';
    return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// 한글 금액 표시 (1억 5천만원 형식)
const formatKoreanNumber = (num) => {
    if (!num && num !== 0) return '';
    const value = Math.round(parseFloat(num) || 0);
    if (value === 0) return '0원';

    const units = [
        { value: 100000000, unit: '억' },
        { value: 10000000, unit: '천만' },
        { value: 10000, unit: '만' },
        { value: 1000, unit: '천' }
    ];

    let result = '';
    let remaining = value;

    for (const { value: unitValue, unit } of units) {
        if (remaining >= unitValue) {
            const count = Math.floor(remaining / unitValue);
            result += count + unit + ' ';
            remaining = remaining % unitValue;
        }
    }

    if (remaining > 0 && value < 10000) {
        result += remaining;
    }

    return result.trim() + '원';
};

// 축약 숫자 표시 (큰 숫자용)
const formatCompactNumber = (num) => {
    if (!num && num !== 0) return '';
    const value = Math.abs(parseFloat(num) || 0);
    const sign = parseFloat(num) < 0 ? '-' : '';

    if (value >= 1e16) return sign + (value / 1e16).toFixed(1) + '경';
    if (value >= 1e12) return sign + (value / 1e12).toFixed(1) + '조';
    if (value >= 1e8) return sign + (value / 1e8).toFixed(1) + '억';
    if (value >= 1e4) return sign + (value / 1e4).toFixed(1) + '만';
    return sign + formatNumber(value);
};

// 클립보드 복사 유틸리티
const copyToClipboard = async (text, showToastFn) => {
    try {
        await navigator.clipboard.writeText(text);
        if (showToastFn) showToastFn('클립보드에 복사되었습니다!');
        return true;
    } catch (err) {
        console.error('Failed to copy:', err);
        return false;
    }
};

const parseNumber = (str) => {
    if (!str) return 0;
    return parseInt(str.toString().replace(/,/g, ''), 10) || 0;
};

const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${month}/${day} ${hours}:${minutes}`;
};

// 계산 히스토리 관리
const saveToHistory = (type, data) => {
    try {
        const history = JSON.parse(localStorage.getItem('calcHistory') || '[]');
        history.unshift({
            type,
            data,
            timestamp: Date.now()
        });
        localStorage.setItem('calcHistory', JSON.stringify(history.slice(0, 20)));
    } catch (e) {
        console.warn('Failed to save history:', e);
    }
};

const getHistory = () => {
    try {
        return JSON.parse(localStorage.getItem('calcHistory') || '[]');
    } catch (e) {
        return [];
    }
};

const clearHistory = () => {
    try {
        localStorage.removeItem('calcHistory');
    } catch (e) {
        console.warn('Failed to clear history:', e);
    }
};

// 보증보험료 계산 유틸
const calculateInsuranceFee = (deposit, years = 1) => {
    // HUG 전세보증보험 기준 (2024 기준 약 0.115%~0.154%)
    const baseRate = 0.00128; // 평균 0.128%
    return Math.floor(deposit * baseRate * years);
};

// 전월세전환율 계산
const calculateConversion = (deposit, rate) => {
    // 월세 = (보증금 × 전환율) / 12
    return Math.floor((deposit * (rate / 100)) / 12);
};

const calculateDepositFromMonthly = (monthly, rate) => {
    // 보증금 = (월세 × 12) / 전환율
    if (rate <= 0) return 0;
    return Math.floor((monthly * 12) / (rate / 100));
};

// --- URL 공유 유틸리티 ---
const generateShareUrl = (calcType, params) => {
    const url = new URL(window.location.href.split('?')[0]);
    url.searchParams.set('calc', calcType);
    Object.entries(params).forEach(([key, value]) => {
        if (value) url.searchParams.set(key, value);
    });
    return url.toString();
};

const parseShareUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return {
        calc: params.get('calc'),
        params: Object.fromEntries(params.entries())
    };
};

// Share Button Component
const ShareButton = React.memo(({ calcType, params, showToast }) => {
    const handleShare = useCallback(async () => {
        const url = generateShareUrl(calcType, params);

        if (navigator.share) {
            try {
                await navigator.share({
                    title: '부동산 마스터 Pro 계산 결과',
                    text: `${calcType} 계산 결과를 확인해보세요!`,
                    url: url
                });
            } catch (err) {
                if (err.name !== 'AbortError') {
                    await copyToClipboard(url, showToast);
                }
            }
        } else {
            await copyToClipboard(url, showToast);
            if (showToast) showToast('공유 링크가 복사되었습니다!');
        }
    }, [calcType, params, showToast]);

    return (
        <button
            onClick={handleShare}
            className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-xl transition-all active:scale-95 header-btn"
            title="결과 공유하기"
            aria-label="계산 결과 공유"
        >
            <Share2 size={18} />
        </button>
    );
});

// Quick History Component (최근 계산 빠른 접근)
const QuickHistory = ({ onSelect }) => {
    const [history, setHistory] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setHistory(getHistory().slice(0, 5)); // 최근 5개만
    }, [isOpen]);

    if (history.length === 0) return null;

    const typeLabels = {
        cost: '비용비교',
        safety: '안전진단',
        fee: '중개보수',
        loan: '대출계산',
        buying: '취득세',
        dsr: 'DSR',
        property: '재산세'
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all"
                title="최근 계산"
                aria-label="최근 계산 기록"
            >
                <History size={18} />
            </button>
            {isOpen && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
                    <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 z-50 animate-fade-in overflow-hidden">
                        <div className="p-3 border-b border-slate-100">
                            <p className="text-xs font-bold text-slate-400 uppercase">최근 계산</p>
                        </div>
                        <div className="max-h-60 overflow-y-auto">
                            {history.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        if (onSelect) onSelect(item);
                                        setIsOpen(false);
                                    }}
                                    className="w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0"
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs font-bold text-blue-500">{typeLabels[item.type] || item.type}</span>
                                        <span className="text-[10px] text-slate-400">{formatDate(item.timestamp)}</span>
                                    </div>
                                    <p className="text-sm font-bold text-slate-700 mt-1 truncate">
                                        {item.result || '결과 없음'}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

// --- Skeleton Loading Component ---
const Skeleton = React.memo(({ className = "" }) => (
    <div className={`animate-pulse bg-slate-200 rounded-xl ${className}`}></div>
));

// --- Error Boundary Component ---
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-8 m-4 bg-red-50 border border-red-200 rounded-3xl text-center">
                    <div className="text-4xl mb-4">⚠️</div>
                    <h2 className="text-lg font-bold text-red-800 mb-2">문제가 발생했습니다</h2>
                    <p className="text-sm text-red-600 mb-4">페이지를 새로고침하거나 다시 시도해 주세요.</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-sm transition-colors"
                    >
                        새로고침
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}

// --- Common Components ---
// Loading Spinner Component
const SPINNER_SIZES = { sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-10 h-10' };

const LoadingSpinner = React.memo(({ size = 'md', className = '' }) => (
    <div className={`animate-spin rounded-full border-2 border-slate-200 border-t-indigo-600 ${SPINNER_SIZES[size]} ${className}`}></div>
));

// Empty State Component with hint support
const EmptyState = React.memo(({ message, hint, icon: Icon = Info, action, actionLabel }) => (
    <div className="text-center py-16 text-slate-400 bg-white rounded-[2rem] border-2 border-dashed border-slate-200 animate-fade-in empty-state-enhanced">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center floating-hint">
            <Icon className="w-8 h-8 opacity-60" />
        </div>
        <p className="font-bold text-slate-500">{message}</p>
        {hint && (
            <p className="text-sm mt-2 text-slate-400 max-w-xs mx-auto">{hint}</p>
        )}
        {action && (
            <button
                onClick={action}
                className="mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-bold rounded-xl transition-all active:scale-95"
            >
                {actionLabel || '시작하기'}
            </button>
        )}
    </div>
));

// Copy Button Component
const CopyButton = React.memo(({ text, showToast, className = '' }) => {
    const [copied, setCopied] = useState(false);
    const timerRef = React.useRef(null);

    // Cleanup timer on unmount
    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    const handleCopy = useCallback(async () => {
        const success = await copyToClipboard(text, showToast);
        if (success) {
            setCopied(true);
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => setCopied(false), 2000);
        }
    }, [text, showToast]);

    return (
        <button
            onClick={handleCopy}
            className={`p-2 rounded-xl transition-all active:scale-95 ${copied
                ? 'bg-green-100 text-green-600'
                : 'bg-white/60 text-slate-500 hover:bg-white'} ${className}`}
            title="결과 복사"
        >
            {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
    );
});

// Tooltip Component for help information
const Tooltip = React.memo(({ children, content }) => {
    const [show, setShow] = useState(false);

    const handleMouseEnter = useCallback(() => setShow(true), []);
    const handleMouseLeave = useCallback(() => setShow(false), []);
    const handleClick = useCallback(() => setShow(s => !s), []);

    return (
        <div className="relative inline-flex items-center">
            <button
                type="button"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                className="p-1 text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="도움말"
            >
                <HelpCircle size={14} />
            </button>
            {show && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 text-white text-xs rounded-lg shadow-lg z-50 w-48 animate-fade-in">
                    {content}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                </div>
            )}
        </div>
    );
});

// Reset Button Component
const ResetButton = React.memo(({ onClick, className = '' }) => (
    <button
        type="button"
        onClick={onClick}
        className={`p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all active:scale-95 ${className}`}
        title="초기화"
        aria-label="입력값 초기화"
    >
        <RotateCcw size={18} />
    </button>
));

// Result Card Component (reusable for calculation results) - with animation and copy
const ResultCard = React.memo(({ title, value, subtitle, copyText, showToast, colorClass = 'from-blue-50 to-indigo-50', borderClass = 'border-blue-100', children, animate = true }) => (
    <div className={`group bg-gradient-to-br ${colorClass} p-6 rounded-[2.5rem] border ${borderClass} shadow-lg relative card-hover card-interactive ${animate ? 'animate-fade-in' : ''}`}>
        {copyText && showToast && (
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <CopyButton text={copyText} showToast={showToast} />
            </div>
        )}
        {title && (
            <div className="text-center mb-4">
                <p className="text-sm font-bold opacity-60 uppercase tracking-widest mb-1">{title}</p>
                <p className="text-4xl font-black result-number result-highlight">{value}</p>
                {subtitle && <p className="text-xs opacity-50 mt-1">{subtitle}</p>}
            </div>
        )}
        {children}
    </div>
));

// Detail Row Component (for result breakdowns)
const DetailRow = React.memo(({ label, value, highlight = false, negative = false }) => (
    <div className={`flex justify-between text-sm ${highlight ? 'font-bold text-slate-800' : 'font-medium text-slate-600'}`}>
        <span>{label}</span>
        <span className={negative ? 'text-green-600' : ''}>{value}</span>
    </div>
));

const NumberInput = React.memo(({
    label,
    value,
    onChange,
    unit = '원',
    placeholder = '0',
    color = 'blue',
    enableUnitToggle = true,
    showKorean = true,
    min = 0,
    max = null,
    required = false,
    errorMessage = ''
}) => {
    const [unitMode, setUnitMode] = useState(() => getSafeLocalStorage('unitMode', '만원'));
    const [isTouched, setIsTouched] = useState(false);
    const [hasError, setHasError] = useState(false);
    const inputId = useId();

    // Save unit mode preference (debounced)
    useEffect(() => {
        debouncedSetStorage('unitMode', unitMode);
    }, [unitMode]);

    // Validate input
    useEffect(() => {
        if (!isTouched) return;
        const numValue = parseNumber(value);
        let isValid = true;

        if (required && !value) isValid = false;
        if (min !== null && numValue < min) isValid = false;
        if (max !== null && numValue > max) isValid = false;

        setHasError(!isValid && value !== '');
    }, [value, min, max, required, isTouched]);

    const handleChange = (e) => {
        const rawValue = e.target.value.replace(/,/g, '');
        if (!isNaN(rawValue) && rawValue !== '') {
            if (enableUnitToggle && unitMode === '만원') {
                onChange(String(Math.round(parseFloat(rawValue || 0) * 10000)));
            } else {
                onChange(rawValue);
            }
        } else if (rawValue === '') {
            onChange('');
        }
    };

    const handleBlur = () => setIsTouched(true);

    const displayValue = useMemo(() => {
        if (!value) return '';
        if (enableUnitToggle && unitMode === '만원') {
            const manwon = Math.round(parseNumber(value) / 10000);
            return formatNumber(manwon);
        }
        return formatNumber(value);
    }, [value, unitMode, enableUnitToggle]);

    const koreanDisplay = useMemo(() => {
        if (!showKorean || !value) return '';
        return formatKoreanNumber(value);
    }, [value, showKorean]);

    const focusColors = {
        blue: 'focus:ring-blue-500',
        orange: 'focus:ring-orange-500',
        green: 'focus:ring-emerald-500',
        violet: 'focus:ring-violet-500',
        cyan: 'focus:ring-cyan-500'
    };

    const errorClasses = hasError ? 'ring-red-400 bg-red-50' : '';

    return (
        <div className="flex flex-col space-y-1.5">
            <div className="flex justify-between items-center">
                <label htmlFor={inputId} className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                    {label}
                    {required && <span className="text-red-500 ml-0.5">*</span>}
                </label>
                {enableUnitToggle && (
                    <div className="flex text-[11px] font-bold">
                        <button
                            onClick={() => setUnitMode('원')}
                            type="button"
                            className={`px-3 py-1.5 min-h-[32px] rounded-l-lg transition-all active:scale-95 ${unitMode === '원' ? 'bg-slate-800 text-white shadow-sm' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                        >원</button>
                        <button
                            onClick={() => setUnitMode('만원')}
                            type="button"
                            className={`px-3 py-1.5 min-h-[32px] rounded-r-lg transition-all active:scale-95 ${unitMode === '만원' ? 'bg-slate-800 text-white shadow-sm' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                        >만원</button>
                    </div>
                )}
            </div>
            <div className="relative group">
                <input
                    id={inputId}
                    type="text"
                    inputMode="numeric"
                    value={displayValue}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={(e) => e.target.select()}
                    placeholder={placeholder}
                    aria-label={label}
                    aria-invalid={hasError}
                    className={`w-full pl-5 pr-14 py-4 text-right border-0 bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 ${focusColors[color]} focus:ring-2 focus:bg-white outline-none transition-all font-bold text-slate-800 text-lg group-hover:ring-slate-300 ${errorClasses}`}
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 text-sm font-medium pointer-events-none">
                    {enableUnitToggle ? unitMode : unit}
                </span>
            </div>
            {hasError && errorMessage && (
                <p className="text-xs text-red-500 ml-1 flex items-center gap-1">
                    <AlertTriangle size={12} /> {errorMessage}
                </p>
            )}
            {showKorean && koreanDisplay && !hasError && (
                <div className="text-xs text-slate-400 ml-1 font-medium">
                    ≈ {koreanDisplay}
                </div>
            )}
        </div>
    );
});

const ToggleGroup = React.memo(({ options, value, onChange, color = 'blue' }) => {
    const activeClasses = {
        blue: 'bg-white text-blue-600 shadow-md ring-1 ring-black/5',
        green: 'bg-white text-emerald-600 shadow-md ring-1 ring-black/5',
        violet: 'bg-white text-violet-600 shadow-md ring-1 ring-black/5',
        orange: 'bg-white text-orange-600 shadow-md ring-1 ring-black/5',
    };

    return (
        <div role="radiogroup" className="flex bg-slate-100/80 p-1.5 rounded-2xl">
            {options.map((option) => (
                <button
                    role="radio"
                    aria-checked={value === option}
                    key={option}
                    onClick={() => onChange(option)}
                    className={`flex-1 py-3 min-h-[44px] text-xs font-bold rounded-xl transition-all active:scale-95 ${value === option
                        ? activeClasses[color] || activeClasses.blue
                        : 'text-slate-400 hover:text-slate-600 hover:bg-white/50'
                        }`}
                >
                    {option}
                </button>
            ))}
        </div>
    );
});

// --- Constants for ToggleGroups ---
const OPTIONS_PROP_TYPE = ['주택', '오피스텔', '상가'];
const OPTIONS_DEAL_TYPE = ['임대차', '매매'];
const OPTIONS_LOAN_METHOD = ['만기일시', '원리금균등', '원금균등'];
const OPTIONS_REGION = ['비규제', '규제(조정)'];
const OPTIONS_COUNT = ['1채', '2채', '3채+'];
const OPTIONS_YEARS = ['1', '2', '3'];

// --- Tabs ---
// 1. Cost Comparison
const CostCompareTab = () => {
    const [jDeposit, setJDeposit] = useState(() => getSafeLocalStorage('jDeposit'));
    const [jLoanAmount, setJLoanAmount] = useState(() => getSafeLocalStorage('jLoanAmount'));
    const [jRate, setJRate] = useState(() => getSafeLocalStorage('jRate', '4.5'));
    const [jRatio, setJRatio] = useState(() => getSafeLocalStorage('jRatio', '80'));
    const [wDeposit, setWDeposit] = useState(() => getSafeLocalStorage('wDeposit'));
    const [wMonthly, setWMonthly] = useState(() => getSafeLocalStorage('wMonthly'));
    const [wRate, setWRate] = useState(() => getSafeLocalStorage('wRate', '5.0'));
    const [income, setIncome] = useState(() => getSafeLocalStorage('income'));

    useEffect(() => { debouncedSetStorage('jDeposit', jDeposit); }, [jDeposit]);
    useEffect(() => { debouncedSetStorage('jLoanAmount', jLoanAmount); }, [jLoanAmount]);
    useEffect(() => { debouncedSetStorage('jRate', jRate); }, [jRate]);
    useEffect(() => { debouncedSetStorage('jRatio', jRatio); }, [jRatio]);
    useEffect(() => { debouncedSetStorage('wDeposit', wDeposit); }, [wDeposit]);
    useEffect(() => { debouncedSetStorage('wMonthly', wMonthly); }, [wMonthly]);
    useEffect(() => { debouncedSetStorage('wRate', wRate); }, [wRate]);
    useEffect(() => { debouncedSetStorage('income', income); }, [income]);

    // 대출금액 입력시 자동 대출비율 계산
    const handleLoanAmountChange = useCallback((value) => {
        setJLoanAmount(value);
        const depVal = parseNumber(jDeposit);
        const loanVal = parseNumber(value);
        if (depVal > 0 && loanVal > 0) {
            const ratio = Math.round((loanVal / depVal) * 100);
            setJRatio(String(Math.min(ratio, 100)));
        }
    }, [jDeposit]);

    // 대출비율 입력시 자동 대출금액 계산
    const handleRatioChange = useCallback((value) => {
        setJRatio(value);
        const depVal = parseNumber(jDeposit);
        const ratioVal = parseFloat(value) || 0;
        if (depVal > 0) {
            const loanAmount = Math.round(depVal * (ratioVal / 100));
            setJLoanAmount(String(loanAmount));
        }
    }, [jDeposit]);

    // 보증금 변경시 대출금액 재계산
    useEffect(() => {
        const depVal = parseNumber(jDeposit);
        const ratioVal = parseFloat(jRatio) || 0;
        if (depVal > 0 && ratioVal > 0) {
            const loanAmount = Math.round(depVal * (ratioVal / 100));
            setJLoanAmount(String(loanAmount));
        }
    }, [jDeposit]);

    const result = useMemo(() => {
        const jDepVal = parseNumber(jDeposit);
        const jRateVal = parseFloat(jRate) || 0;
        const jLoanVal = parseNumber(jLoanAmount) || (jDepVal * (parseFloat(jRatio) / 100));
        const wDepVal = parseNumber(wDeposit);
        const wMonVal = parseNumber(wMonthly);
        const wRateVal = parseFloat(wRate) || 0;

        const jMonthlyCost = (jLoanVal * (jRateVal / 100)) / 12;

        const wMonthlyOppCost = (wDepVal * (wRateVal / 100)) / 12;
        const wTotalCost = wMonVal + wMonthlyOppCost;

        const diff = Math.abs(jMonthlyCost - wTotalCost);
        const winner = jMonthlyCost < wTotalCost ? '전세' : '월세';

        const incomeVal = parseNumber(income);
        let rir = 0;
        if (incomeVal > 0) {
            const currentCost = winner === '전세' ? jMonthlyCost : wTotalCost;
            rir = (currentCost / incomeVal) * 100;
        }

        // Defensive: ensure no NaN/Infinity values
        const safeNum = (val) => (isFinite(val) && !isNaN(val)) ? val : 0;

        return {
            jMonthlyCost: safeNum(jMonthlyCost),
            wTotalCost: safeNum(wTotalCost),
            diff: safeNum(diff),
            winner,
            rir: safeNum(rir),
            incomeVal: safeNum(incomeVal),
            jLoanVal: safeNum(jLoanVal)
        };
    }, [jDeposit, jLoanAmount, jRate, jRatio, wDeposit, wMonthly, wRate, income]);

    const maxVal = Math.max(result.jMonthlyCost, result.wTotalCost, 1);

    // Reset function with useCallback
    const handleReset = useCallback(() => {
        setJDeposit('');
        setJLoanAmount('');
        setJRate('4.5');
        setJRatio('80');
        setWDeposit('');
        setWMonthly('');
        setWRate('5.0');
        setIncome('');
    }, []);

    // Share function with useCallback and timer cleanup
    const [copied, setCopied] = useState(false);
    const copyTimerRef = React.useRef(null);

    // Cleanup timer on unmount
    useEffect(() => {
        return () => {
            if (copyTimerRef.current) {
                clearTimeout(copyTimerRef.current);
            }
        };
    }, []);

    const handleShare = useCallback(() => {
        const text = `[전월세 비교 결과]\n\n📊 ${result.winner} 유리\n💰 매월 약 ${formatNumber(parseInt(result.diff))}원 절약\n\n📍 전세 월비용: ${formatNumber(parseInt(result.jMonthlyCost))}원\n📍 월세 총비용: ${formatNumber(parseInt(result.wTotalCost))}원\n\n- 부동산 마스터 Pro`;
        navigator.clipboard.writeText(text);
        setCopied(true);
        if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
        copyTimerRef.current = setTimeout(() => setCopied(false), 2000);
    }, [result]);

    return (
        <div className="space-y-6 pb-32 animate-slide-up px-1">
            {/* Base Rate Info + Buttons */}
            <div className="flex justify-between items-start gap-2">
                <div className="flex-1 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl flex items-center justify-between border border-blue-100/50 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="bg-white p-2 rounded-full shadow-sm text-blue-600">
                            <TrendingUp size={20} />
                        </div>
                        <div>
                            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-0.5">Bank of Korea Rate ({BOK_RATE_DATE_DEFAULT})</span>
                            <div className="text-lg font-extrabold text-slate-800 flex items-center gap-2 flex-wrap">
                                한국은행 기준금리 {BOK_RATE_DEFAULT.toFixed(2)}%
                                <a href="https://www.bok.or.kr/portal/singl/baseRate/progress.do?dataSeCd=01&menuNo=200656" target="_blank" rel="noopener noreferrer" className="text-[10px] bg-blue-100/50 hover:bg-white text-blue-700 px-2 py-0.5 rounded-full border border-blue-200 transition-all no-print">
                                    최신 확인 →
                                </a>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            // 토스트로 현재 금리 상태 알려주기
                            alert(`✅ 현재 기준금리: ${BOK_RATE_DEFAULT}%\n📅 마지막 금통위 결정일: ${BOK_RATE_DATE_DEFAULT}\n\n최신 금리는 한국은행 공식 홈페이지에서 확인하세요.`);
                        }}
                        className="p-2 bg-white/50 rounded-xl text-blue-600 hover:bg-white transition-all no-print ml-2"
                        title="기준금리 확인"
                        aria-label="기준금리 확인"
                    >
                        <RefreshCw size={16} />
                    </button>
                </div>
                <button
                    onClick={handleReset}
                    className="p-3 bg-white rounded-2xl border border-slate-100 shadow-sm text-slate-400 hover:text-red-500 hover:border-red-200 transition-all no-print"
                    title="입력값 초기화"
                    aria-label="입력값 초기화"
                >
                    <RotateCcw size={20} />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 group hover:border-blue-200 transition-colors">
                    <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                        전세 조건
                    </h3>
                    <div className="space-y-5">
                        <NumberInput label="보증금" value={jDeposit} onChange={setJDeposit} color="blue" />
                        <NumberInput label="대출금액" value={jLoanAmount} onChange={handleLoanAmountChange} color="blue" />
                        <div className="flex gap-3">
                            <div className="flex-1">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5 block ml-1">대출금리 (%)</label>
                                <input type="number" value={jRate} onChange={(e) => setJRate(e.target.value)} className="w-full px-4 py-3 text-right bg-slate-50 border-0 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white font-bold text-slate-700 transition-all font-mono tracking-tight" />
                            </div>
                            <div className="flex-1">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5 block ml-1">대출비율 (%)</label>
                                <input type="number" value={jRatio} onChange={(e) => handleRatioChange(e.target.value)} className="w-full px-4 py-3 text-right bg-slate-50 border-0 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white font-bold text-slate-700 transition-all font-mono tracking-tight" />
                            </div>
                        </div>
                        {parseNumber(jDeposit) > 0 && parseNumber(jLoanAmount) > 0 && (
                            <div className="text-xs text-blue-600 bg-blue-50 px-3 py-2 rounded-xl">
                                💡 대출금: {formatKoreanNumber(jLoanAmount)} ({jRatio}%) → 월 이자: {formatKoreanNumber(result.jMonthlyCost)}
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 group hover:border-orange-200 transition-colors">
                    <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-orange-500 mr-2 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></span>
                        월세 조건
                    </h3>
                    <div className="space-y-5">
                        <NumberInput label="보증금" value={wDeposit} onChange={setWDeposit} color="orange" />
                        <NumberInput label="월세" value={wMonthly} onChange={setWMonthly} color="orange" />
                        <div>
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5 block ml-1">전환율 (%)</label>
                            <div className="relative group">
                                <input
                                    type="number"
                                    value={wRate}
                                    onChange={(e) => setWRate(e.target.value)}
                                    placeholder="0"
                                    className="w-full pl-5 pr-10 py-4 text-right bg-slate-50 border-0 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white font-bold text-slate-700 transition-all font-mono tracking-tight text-lg"
                                />
                                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 text-sm font-medium pointer-events-none">
                                    %
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl shadow-blue-900/20 relative overflow-hidden animate-result-pop">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                <div className="relative z-10">
                    {/* Share Button */}
                    <button
                        onClick={handleShare}
                        className={`absolute top-0 right-0 p-2.5 rounded-xl transition-all no-print ${copied ? 'bg-green-500 text-white' : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'}`}
                        title="결과 공유"
                        aria-label="결과 공유하기"
                    >
                        {copied ? <CheckCircle size={18} /> : <Share2 size={18} />}
                    </button>

                    <div className="text-center mb-10">
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">Recommendation</p>
                        <div className={`text-4xl md:text-5xl font-black flex justify-center items-center gap-4 mb-4 ${result.winner === '전세' ? 'text-blue-400' : 'text-orange-400'}`}>
                            {result.winner === '전세' ? <Home size={40} strokeWidth={2.5} /> : <CheckCircle size={40} strokeWidth={2.5} />}
                            <span>{result.winner} 유리</span>
                        </div>
                        <p className="text-slate-300 font-medium">
                            매월 약 <span className="text-white font-extrabold text-xl mx-1 bg-white/10 px-2 py-1 rounded-lg animate-number-pop">{formatNumber(parseInt(result.diff))}원</span> 더 저렴해요
                        </p>
                    </div>

                    <div className="flex items-end justify-center h-40 gap-8 md:gap-16 px-4 relative z-10">
                        <div className="flex flex-col items-center w-24 group">
                            <span className="mb-3 text-sm font-bold text-blue-300 transition-opacity duration-300">{formatNumber(parseInt(result.jMonthlyCost))}</span>
                            <div
                                className="w-16 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-2xl transition-all duration-700 relative shadow-lg shadow-blue-500/30 group-hover:w-20"
                                style={{ height: `${Math.max(Math.round((result.jMonthlyCost / maxVal) * 120), 16)}px` }}
                            ></div>
                            <span className="mt-4 text-sm font-bold text-slate-400 uppercase tracking-wider">전세</span>
                        </div>
                        <div className="flex flex-col items-center w-24 group">
                            <span className="mb-3 text-sm font-bold text-orange-300 transition-opacity duration-300">{formatNumber(parseInt(result.wTotalCost))}</span>
                            <div
                                className="w-16 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t-2xl transition-all duration-700 relative shadow-lg shadow-orange-500/30 group-hover:w-20"
                                style={{ height: `${Math.max(Math.round((result.wTotalCost / maxVal) * 120), 16)}px` }}
                            ></div>
                            <span className="mt-4 text-sm font-bold text-slate-400 uppercase tracking-wider">월세</span>
                        </div>
                        <div className="absolute bottom-9 w-full border-b border-white/10 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent h-[1px]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 2. Safety Tab
const SafetyTab = () => {
    const [price, setPrice] = useState(() => getSafeLocalStorage('sPrice'));
    const [bond, setBond] = useState(() => getSafeLocalStorage('sBond'));
    const [deposit, setDeposit] = useState(() => getSafeLocalStorage('sDeposit'));

    useEffect(() => { localStorage.setItem('sPrice', price); }, [price]);
    useEffect(() => { localStorage.setItem('sBond', bond); }, [bond]);
    useEffect(() => { localStorage.setItem('sDeposit', deposit); }, [deposit]);

    const analysis = useMemo(() => {
        const priceVal = parseNumber(price);
        const bondVal = parseNumber(bond);
        const depositVal = parseNumber(deposit);
        if (priceVal === 0) return null;

        const totalDebt = bondVal + depositVal;
        const ratio = (totalDebt / priceVal) * 100;

        let status = '안전';
        let colorClass = 'bg-emerald-50 border-emerald-200 text-emerald-900';
        let barColor = 'bg-emerald-500';
        let icon = <CheckCircle className="w-8 h-8 text-emerald-500" />;

        if (ratio > 80) {
            status = '위험 (깡통전세)';
            colorClass = 'bg-red-50 border-red-200 text-red-900';
            barColor = 'bg-red-500';
            icon = <AlertTriangle className="w-8 h-8 text-red-500" />;
        } else if (ratio > 60) {
            status = '주의 필요';
            colorClass = 'bg-orange-50 border-orange-200 text-orange-900';
            barColor = 'bg-orange-500';
            icon = <Info className="w-8 h-8 text-orange-500" />;
        }

        // Defensive: ensure no NaN/Infinity values
        const safeNum = (val) => (isFinite(val) && !isNaN(val)) ? val : 0;

        return { ratio: safeNum(ratio), totalDebt: safeNum(totalDebt), status, colorClass, barColor, icon };
    }, [price, bond, deposit]);

    return (
        <div className="space-y-6 pb-32 animate-slide-up px-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 space-y-5">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <Shield className="w-5 h-5 mr-3 text-emerald-600" />
                    안전 진단 데이터
                </h3>
                <NumberInput label="매매 시세 (KB시세/실거래가)" value={price} onChange={setPrice} color="green" />
                <NumberInput label="선순위 채권 (근저당 등)" value={bond} onChange={setBond} color="green" />
                <NumberInput label="나의 보증금" value={deposit} onChange={setDeposit} color="green" />
            </div>

            {analysis ? (
                <div className={`p-6 rounded-[2rem] border ${analysis.colorClass} transition-all duration-500 shadow-sm relative overflow-hidden`}>
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-white p-3 rounded-2xl shadow-sm ring-1 ring-black/5">
                                {analysis.icon}
                            </div>
                            <div>
                                <h4 className="text-2xl font-black">{analysis.status}</h4>
                                <p className="text-sm font-semibold opacity-70 mt-1">전세가율 {analysis.ratio.toFixed(1)}%</p>
                            </div>
                        </div>

                        <div className="bg-white/60 rounded-2xl p-5 space-y-4 text-sm font-medium backdrop-blur-md border border-white/50">
                            <div className="flex justify-between items-center">
                                <span className="text-slate-600">내 보증금 + 융자</span>
                                <span className="font-bold text-lg">{formatNumber(analysis.totalDebt)}원</span>
                            </div>

                            <div className="w-full bg-slate-200/50 rounded-full h-4 overflow-hidden relative">
                                {/* 안전 구간 표시선 */}
                                <div className="absolute left-[60%] top-0 bottom-0 w-0.5 bg-slate-300 z-10" title="안전선 (60%)"></div>
                                <div className="absolute left-[80%] top-0 bottom-0 w-0.5 bg-slate-300 z-10" title="위험선 (80%)"></div>

                                <div
                                    className={`h-full rounded-full transition-all duration-1000 ease-out shadow-sm ${analysis.barColor}`}
                                    style={{ width: `${Math.min(analysis.ratio, 100)}%` }}
                                ></div>
                            </div>

                            <div className="flex justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                                <span>0%</span>
                                <span className="text-green-600">60% Safe</span>
                                <span className="text-red-500">80% Risk</span>
                                <span>100%</span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200 text-slate-400">
                    <Shield className="w-16 h-16 mb-4 text-slate-200 stroke-1" />
                    <p className="text-sm font-bold">정보를 입력하면 안전도를 분석합니다</p>
                </div>
            )}
        </div>
    );
};

// 3. Fee Tab
const FeeTab = () => {
    const [propType, setPropType] = useState('주택');
    const [dealType, setDealType] = useState('임대차');
    const [amount, setAmount] = useState('');

    const result = useMemo(() => {
        const val = parseNumber(amount);
        if (!val) return null;

        let rate = 0;
        let limit = 0;

        if (propType === '주택') {
            if (dealType === '임대차') {
                if (val < 50000000) { rate = 0.5; limit = 200000; }
                else if (val < 100000000) { rate = 0.4; limit = 300000; }
                else if (val < 600000000) { rate = 0.3; }
                else if (val < 1500000000) { rate = 0.4; }
                else { rate = 0.6; }
            } else {
                if (val < 50000000) { rate = 0.6; limit = 250000; }
                else if (val < 200000000) { rate = 0.5; limit = 800000; }
                else if (val < 900000000) { rate = 0.4; }
                else { rate = 0.5; }
            }
        } else if (propType === '오피스텔') {
            rate = dealType === '임대차' ? 0.4 : 0.5;
        } else {
            rate = 0.9;
        }

        let fee = Math.floor(val * (rate / 100));
        if (limit > 0 && fee > limit) fee = limit;
        const vat = Math.floor(fee * 0.1);

        return { rate, fee, vat, total: fee + vat, limit };
    }, [propType, dealType, amount]);

    return (
        <div className="space-y-6 pb-32 animate-slide-up px-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <Calculator className="w-5 h-5 mr-3 text-emerald-600" />계산 조건
                </h3>
                <div className="space-y-6">
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2 ml-1">물건 종류</label>
                        <ToggleGroup options={OPTIONS_PROP_TYPE} value={propType} onChange={setPropType} color="green" />
                    </div>

                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2 ml-1">거래 종류</label>
                        <ToggleGroup options={OPTIONS_DEAL_TYPE} value={dealType} onChange={setDealType} color="green" />
                    </div>

                    <NumberInput label="거래 금액 (보증금/매매가)" value={amount} onChange={setAmount} color="green" />
                </div>
            </div>

            {result ? (
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-7 rounded-[2.5rem] border border-emerald-100 shadow-lg shadow-emerald-100 relative overflow-hidden">
                    <Calculator className="absolute -bottom-6 -right-6 w-40 h-40 text-emerald-500 opacity-5 rotate-12" />

                    <div className="relative z-10 text-emerald-900">
                        <div className="flex justify-between items-center mb-6">
                            <h4 className="text-sm font-black uppercase tracking-widest opacity-60">Estimated Fee</h4>
                            <span className="bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-emerald-600 shadow-sm border border-emerald-100">{result.rate}% 적용</span>
                        </div>

                        <div className="space-y-3 mb-8 bg-white/60 backdrop-blur-xl p-5 rounded-2xl border border-white/50">
                            <div className="flex justify-between text-slate-600 font-medium text-sm">
                                <span>중개수수료</span>
                                <span>{formatNumber(result.fee)}원</span>
                            </div>
                            <div className="flex justify-between text-slate-600 font-medium text-sm">
                                <span>부가세(10%)</span>
                                <span>{formatNumber(result.vat)}원</span>
                            </div>
                            {result.limit > 0 && (
                                <div className="text-xs font-bold text-emerald-600 text-right mt-1">* 한도액 {formatNumber(result.limit)}원 적용</div>
                            )}
                        </div>

                        <div className="flex justify-between items-end border-t border-emerald-200/50 pt-5">
                            <span className="font-bold text-emerald-800">총 예상 금액</span>
                            <span className="text-4xl font-black text-emerald-700 tracking-tight">{formatNumber(result.total)}<span className="text-xl font-medium ml-1 text-emerald-600 align-baseline">원</span></span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-20 text-slate-300 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
                    금액을 입력해주세요
                </div>
            )}
        </div>
    );
};

// 4. Loan Tab
const LoanTab = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [rate, setRate] = useState('4.0');
    const [period, setPeriod] = useState('24');
    const [method, setMethod] = useState('만기일시');

    const result = useMemo(() => {
        const principal = parseNumber(loanAmount);
        const r = parseFloat(rate) / 100 / 12;
        const n = parseInt(period);

        if (!principal || !n) return null;

        let monthlyPayment = 0;
        let totalInterest = 0;
        let desc = "";

        if (method === '만기일시') {
            monthlyPayment = principal * r;
            totalInterest = monthlyPayment * n;
            desc = "매달 이자만, 원금은 만기에";
        } else if (method === '원리금균등') {
            monthlyPayment = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            totalInterest = (monthlyPayment * n) - principal;
            desc = "원금+이자를 매달 똑같이";
        } else if (method === '원금균등') {
            const firstMonthInterest = principal * r;
            const principalPayment = principal / n;
            monthlyPayment = principalPayment + firstMonthInterest;
            const lastMonthInterest = (principal / n) * r;
            totalInterest = (n * (firstMonthInterest + lastMonthInterest)) / 2;
            desc = "첫 달이 가장 비싸고 감소";
        }

        return { monthlyPayment, totalInterest, totalPayment: principal + totalInterest, desc };
    }, [loanAmount, rate, period, method]);

    return (
        <div className="space-y-6 pb-32 animate-slide-up px-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <DollarSign className="w-5 h-5 mr-3 text-violet-600" /> 대출 조건
                </h3>
                <div className="space-y-5">
                    <NumberInput label="대출 금액" value={loanAmount} onChange={setLoanAmount} color="violet" />

                    <div className="flex gap-3">
                        <div className="flex-1">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2 ml-1">연 이자율 (%)</label>
                            <input type="number" value={rate} onChange={e => setRate(e.target.value)} className="w-full px-4 py-4 border-0 bg-slate-50 rounded-2xl text-right outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white font-bold text-slate-700 transition-all" />
                        </div>
                        <div className="flex-1">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2 ml-1">기간 (개월)</label>
                            <input type="number" value={period} onChange={e => setPeriod(e.target.value)} className="w-full px-4 py-4 border-0 bg-slate-50 rounded-2xl text-right outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white font-bold text-slate-700 transition-all" />
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2 ml-1">상환 방식</label>
                        <ToggleGroup options={OPTIONS_LOAN_METHOD} value={method} onChange={setMethod} color="violet" />
                    </div>
                </div>
            </div>

            {result ? (
                <div className="bg-violet-50 p-6 rounded-[2.5rem] border border-violet-100 shadow-lg shadow-violet-100/50 relative">
                    <div className="absolute top-5 right-5 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full ring-1 ring-violet-200">
                        <span className="text-violet-700 text-xs font-bold">{result.desc}</span>
                    </div>

                    <div className="mt-8 space-y-4">
                        <div className="flex justify-between items-center bg-white p-5 rounded-2xl shadow-sm ring-1 ring-black/5">
                            <span className="text-slate-500 font-bold text-sm uppercase tracking-wide">
                                {method === '원금균등' ? '첫 달 납입금' : '월 예상 납입금'}
                            </span>
                            <span className="text-2xl font-black text-violet-600">{formatNumber(Math.round(result.monthlyPayment))}원</span>
                        </div>

                        <div className="px-4 py-2 space-y-3">
                            <div className="flex justify-between text-sm text-slate-600 font-medium">
                                <span>총 이자 비용</span>
                                <span>{formatNumber(Math.round(result.totalInterest))}원</span>
                            </div>
                            <div className="flex justify-between text-sm text-slate-600 font-medium">
                                <span>총 상환 금액</span>
                                <span className="font-bold text-slate-800">{formatNumber(Math.round(result.totalPayment))}원</span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-20 text-slate-300 bg-white rounded-[2rem] border-2 border-dashed border-slate-200">
                    대출 조건을 입력해주세요
                </div>
            )}
        </div>
    );
};


// 6. Buying Tab (NEW)
const BuyingTab = () => {
    const [price, setPrice] = useState('');
    const [region, setRegion] = useState('non-adj'); // adj (jojeong), non-adj
    const [count, setCount] = useState('1'); // 1, 2, 3+
    const [isFirstTimeBuyer, setIsFirstTimeBuyer] = useState(false); // 생애최초 감면

    const result = useMemo(() => {
        const p = parseNumber(price);
        if (!p) return null;

        let taxRate = 0.01; // Default 1% (1 house, non-adj, <600m)

        if (count === '1') {
            if (p <= 600000000) taxRate = 0.01;
            else if (p <= 900000000) taxRate = 0.01 + ((p - 600000000) / 300000000) * 0.02; // 1~3%
            else taxRate = 0.03;
        } else if (count === '2') {
            taxRate = region === 'adj' ? 0.08 : 0.01; // 8% if adj, else basic (simplified 1-3%)
            if (region !== 'adj') {
                if (p <= 600000000) taxRate = 0.01;
                else if (p <= 900000000) taxRate = 0.01 + ((p - 600000000) / 300000000) * 0.02;
                else taxRate = 0.03;
            }
        } else { // 3+
            taxRate = region === 'adj' ? 0.12 : 0.08;
        }

        const eduTax = taxRate * 0.1; // Local Education Tax (Simplified)
        const specialTax = p > 850000000 ? 0.002 : 0; // Rural Special Tax (Simplified condition)

        let acquisitionTax = Math.floor(p * taxRate);
        let totalTax = Math.floor(p * (taxRate + eduTax + specialTax));

        // 생애최초 감면 적용 (12억 이하, 최대 200만원 감면)
        let firstTimeBuyerDiscount = 0;
        if (isFirstTimeBuyer && count === '1' && p <= 1200000000) {
            firstTimeBuyerDiscount = Math.min(acquisitionTax, 2000000);
            acquisitionTax = acquisitionTax - firstTimeBuyerDiscount;
            totalTax = totalTax - firstTimeBuyerDiscount;
        }

        // Bond Discount (Simplified 10% burden of 2.6% bond rate roughly)
        const bondRate = 0.026; // Approx
        const discountRate = 0.12; // 12% discount cost
        const bondCost = Math.floor(p * bondRate * discountRate);

        return { acquisitionTax, totalTax, bondCost, taxRate: (taxRate * 100).toFixed(2), firstTimeBuyerDiscount };
    }, [price, region, count, isFirstTimeBuyer]);

    return (
        <div className="space-y-6 pb-32 animate-slide-up px-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <Home className="w-5 h-5 mr-3 text-blue-600" /> 매수 세금 계산
                </h3>
                <div className="space-y-5">
                    <NumberInput label="매매 가격" value={price} onChange={setPrice} color="blue" />

                    <div className="flex gap-3">
                        <div className="flex-1">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2 ml-1">지역 구분</label>
                            <ToggleGroup options={OPTIONS_REGION} value={region === 'non-adj' ? '비규제' : '규제(조정)'} onChange={(v) => setRegion(v === '비규제' ? 'non-adj' : 'adj')} color="blue" />
                        </div>
                        <div className="flex-1">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2 ml-1">주택 수</label>
                            <ToggleGroup options={OPTIONS_COUNT} value={count === '1' ? '1채' : count === '2' ? '2채' : '3채+'} onChange={(v) => setCount(v === '1채' ? '1' : v === '2채' ? '2' : '3')} color="blue" />
                        </div>
                    </div>

                    <label className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl cursor-pointer border border-green-100 hover:shadow-md transition-all">
                        <input type="checkbox" checked={isFirstTimeBuyer} onChange={(e) => setIsFirstTimeBuyer(e.target.checked)} className="w-5 h-5 rounded accent-green-500" />
                        <div>
                            <span className="text-sm font-bold text-green-800">🏠 생애최초 주택 구입</span>
                            <p className="text-xs text-green-600">12억 이하 주택, 최대 200만원 취득세 감면</p>
                        </div>
                    </label>
                </div>
            </div>

            {result ? (
                <div className="bg-blue-50 p-6 rounded-[2.5rem] border border-blue-100 shadow-lg relative">
                    <div className="text-center mb-8">
                        <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">예상 총 필요 자금 (세금+채권)</p>
                        <p className="text-4xl font-black text-blue-900">{formatNumber(result.totalTax + result.bondCost)}원</p>
                    </div>

                    <div className="bg-white rounded-2xl p-5 space-y-3 shadow-sm ring-1 ring-black/5">
                        <div className="flex justify-between text-sm font-medium text-slate-600">
                            <span>취득세 ({result.taxRate}%)</span>
                            <span>{formatNumber(result.acquisitionTax)}원</span>
                        </div>
                        {result.firstTimeBuyerDiscount > 0 && (
                            <div className="flex justify-between text-sm font-bold text-green-600">
                                <span>🎉 생애최초 감면</span>
                                <span>-{formatNumber(result.firstTimeBuyerDiscount)}원</span>
                            </div>
                        )}
                        <div className="flex justify-between text-sm font-medium text-slate-600">
                            <span>지방교육세 등</span>
                            <span>{formatNumber(result.totalTax - result.acquisitionTax)}원</span>
                        </div>
                        <div className="h-px bg-slate-100 my-2"></div>
                        <div className="flex justify-between text-sm font-bold text-slate-800">
                            <span>국민주택채권 (할인매도 가정)</span>
                            <span>약 {formatNumber(result.bondCost)}원</span>
                        </div>
                    </div>
                    <p className="text-xs text-center text-blue-300 mt-4">* 실제 세금은 면적, 감면요건(생애최초 등)에 따라 다를 수 있습니다.</p>
                </div>
            ) : (
                <div className="text-center py-20 text-slate-300 bg-white rounded-[2rem] border-2 border-dashed border-slate-200">
                    매매가를 입력해주세요
                </div>
            )}
        </div>
    );
};

// 7. DSR Calculator Tab (NEW)
const DSRTab = () => {
    const [income, setIncome] = useState('');
    const [debt, setDebt] = useState(''); // Annual Principle + Interest
    const [newDebt, setNewDebt] = useState(''); // New Loan Annual P+I

    const result = useMemo(() => {
        const inc = parseNumber(income);
        const d = parseNumber(debt);
        const nd = parseNumber(newDebt);

        if (!inc) return null;

        const totalDebtPayment = d + nd;
        const dsr = (totalDebtPayment / inc) * 100;

        let status = '여유';
        let colorClass = 'bg-emerald-50 border-emerald-200 text-emerald-900';

        if (dsr > 50) {
            status = '초과 (불가)';
            colorClass = 'bg-red-50 border-red-200 text-red-900';
        } else if (dsr > 40) {
            status = '주의 (한도접근)';
            colorClass = 'bg-orange-50 border-orange-200 text-orange-900';
        }

        return { dsr, status, colorClass };
    }, [income, debt, newDebt]);

    return (
        <div className="space-y-6 pb-32 animate-slide-up px-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <DollarSign className="w-5 h-5 mr-3 text-indigo-600" /> DSR 계산 (총부채원리금상환비율)
                </h3>
                <div className="space-y-5">
                    <NumberInput label="연 소득" value={income} onChange={setIncome} color="violet" />
                    <NumberInput label="기존 대출 연 원리금 상환액" value={debt} onChange={setDebt} color="violet" />
                    <NumberInput label="신규 대출 연 원리금 (예상)" value={newDebt} onChange={setNewDebt} color="violet" />
                </div>
            </div>

            {result ? (
                <div className={`p-6 rounded-[2.5rem] border ${result.colorClass} shadow-lg relative overflow-hidden`}>
                    <div className="text-center">
                        <div className="text-sm font-bold opacity-60 uppercase tracking-widest mb-2">My DSR</div>
                        <div className="text-5xl font-black mb-2">{result.dsr.toFixed(2)}%</div>
                        <div className="inline-block px-3 py-1 rounded-full bg-white/50 backdrop-blur-sm font-bold text-sm border border-white/20">
                            {result.status}
                        </div>
                    </div>
                    <div className="w-full bg-white/40 rounded-full h-4 mt-6 backdrop-blur-sm border border-white/30 p-0.5">
                        <div
                            className={`h-full rounded-full transition-all duration-1000 shadow-sm ${result.dsr > 40 ? 'bg-red-500' : 'bg-emerald-500'}`}
                            style={{ width: `${Math.min(result.dsr, 100)}%` }}
                        ></div>
                    </div>
                    <p className="text-xs text-center opacity-60 mt-4">* 1금융권 40%, 2금융권 50% 규제 적용 (2026)</p>
                </div>
            ) : (
                <div className="text-center py-20 text-slate-300 bg-white rounded-[2rem] border-2 border-dashed border-slate-200">
                    소득과 부채 정보를 입력해주세요
                </div>
            )}
        </div>
    );
};


// 8. LTV Tab (Restored)
const LTVTab = () => {
    const [value, setValue] = useState('');
    const [loan, setLoan] = useState('');

    const result = useMemo(() => {
        const v = parseNumber(value);
        const l = parseNumber(loan);
        if (!v) return null;

        const ltv = (l / v) * 100;

        let status = '안전';
        let colorClass = 'bg-emerald-50 border-emerald-200 text-emerald-900';

        if (ltv > 70) {
            status = '위험 (고위험군)';
            colorClass = 'bg-red-50 border-red-200 text-red-900';
        } else if (ltv > 50) {
            status = '주의 (비율 높음)';
            colorClass = 'bg-orange-50 border-orange-200 text-orange-900';
        }

        return { ltv, status, colorClass };
    }, [value, loan]);

    return (
        <div className="space-y-6 pb-32 animate-slide-up px-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <PieChart className="w-5 h-5 mr-3 text-purple-600" /> 주택담보대출 비율 (LTV)
                </h3>
                <div className="space-y-5">
                    <NumberInput label="주택 자산 가치 (매매가)" value={value} onChange={setValue} color="violet" />
                    <NumberInput label="대출 희망 금액" value={loan} onChange={setLoan} color="violet" />
                </div>
            </div>

            {result ? (
                <div className={`p-6 rounded-[2.5rem] border ${result.colorClass} shadow-lg relative overflow-hidden transition-all duration-500`}>
                    <div className="relative z-10">
                        <div className="text-center mb-6">
                            <div className="text-sm font-bold opacity-60 uppercase tracking-widest mb-2">Calculated LTV</div>
                            <div className="text-5xl font-black mb-2">{result.ltv.toFixed(1)}<span className="text-3xl font-bold ml-1">%</span></div>
                            <div className="inline-block px-3 py-1 rounded-full bg-white/50 backdrop-blur-sm font-bold text-sm border border-white/20">
                                {result.status}
                            </div>
                        </div>

                        <div className="w-full bg-white/40 rounded-full h-6 p-1 backdrop-blur-sm border border-white/30">
                            <div
                                className={`h-full rounded-full transition-all duration-1000 shadow-sm ${result.ltv > 70 ? 'bg-red-500' : result.ltv > 50 ? 'bg-orange-500' : 'bg-emerald-500'}`}
                                style={{ width: `${Math.min(result.ltv, 100)}%` }}
                            ></div>
                        </div>
                        <div className="flex justify-between text-[10px] font-bold opacity-50 mt-2 px-1">
                            <span>0%</span>
                            <span>40%</span>
                            <span>60%</span>
                            <span>80%</span>
                            <span>100%</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-20 text-slate-300 bg-white rounded-[2rem] border-2 border-dashed border-slate-200">
                    정보를 입력하면 LTV를 계산합니다
                </div>
            )}
        </div>
    );
}

// 9. Capital Gains Tax Calculator (양도소득세 계산기)
const CapitalGainsTaxTab = () => {
    const [acquisitionPrice, setAcquisitionPrice] = useState('');
    const [salePrice, setSalePrice] = useState('');
    const [expenses, setExpenses] = useState('');
    const [holdingYears, setHoldingYears] = useState('3');
    const [isOneHouse, setIsOneHouse] = useState(false);
    const [isRegulated, setIsRegulated] = useState(false);

    const result = useMemo(() => {
        const acq = parseNumber(acquisitionPrice);
        const sale = parseNumber(salePrice);
        const exp = parseNumber(expenses);
        const years = parseInt(holdingYears) || 0;

        if (!acq || !sale) return null;

        // 양도차익
        const gain = sale - acq - exp;
        if (gain <= 0) return { gain: 0, tax: 0, localTax: 0, total: 0, deduction: 0, taxableGain: 0, rate: 0 };

        // 장기보유특별공제 (1세대1주택: 연 8%, 최대 80% / 일반: 연 2%, 최대 30%)
        let deductionRate = 0;
        if (isOneHouse && years >= 2) {
            deductionRate = Math.min(years * 0.08, 0.8); // 연 8%, 최대 80%
        } else if (years >= 3) {
            deductionRate = Math.min((years - 2) * 0.02, 0.3); // 3년부터 연 2%, 최대 30%
        }

        const deduction = Math.floor(gain * deductionRate);
        const basicDeduction = 2500000; // 기본공제 250만원
        const taxableGain = Math.max(gain - deduction - basicDeduction, 0);

        // 양도소득세율 (2026년 기준 누진세율)
        let tax = 0;
        let rate = 0;
        if (taxableGain <= 14000000) {
            tax = taxableGain * 0.06;
            rate = 6;
        } else if (taxableGain <= 50000000) {
            tax = 840000 + (taxableGain - 14000000) * 0.15;
            rate = 15;
        } else if (taxableGain <= 88000000) {
            tax = 6240000 + (taxableGain - 50000000) * 0.24;
            rate = 24;
        } else if (taxableGain <= 150000000) {
            tax = 15360000 + (taxableGain - 88000000) * 0.35;
            rate = 35;
        } else if (taxableGain <= 300000000) {
            tax = 37060000 + (taxableGain - 150000000) * 0.38;
            rate = 38;
        } else if (taxableGain <= 500000000) {
            tax = 94060000 + (taxableGain - 300000000) * 0.40;
            rate = 40;
        } else if (taxableGain <= 1000000000) {
            tax = 174060000 + (taxableGain - 500000000) * 0.42;
            rate = 42;
        } else {
            tax = 384060000 + (taxableGain - 1000000000) * 0.45;
            rate = 45;
        }

        // 단기보유 중과 (1년 미만: 70%, 2년 미만: 60%)
        if (isRegulated && years < 1) {
            tax = taxableGain * 0.70;
            rate = 70;
        } else if (isRegulated && years < 2) {
            tax = taxableGain * 0.60;
            rate = 60;
        }

        tax = Math.floor(tax);
        const localTax = Math.floor(tax * 0.1); // 지방소득세 10%
        const total = tax + localTax;

        return { gain, deduction, taxableGain, tax, localTax, total, rate };
    }, [acquisitionPrice, salePrice, expenses, holdingYears, isOneHouse, isRegulated]);

    return (
        <div className="space-y-6 pb-32 animate-slide-up px-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-3 text-rose-600" /> 양도소득세 계산기
                </h3>
                <div className="space-y-5">
                    <NumberInput label="취득가액 (매입가)" value={acquisitionPrice} onChange={setAcquisitionPrice} color="blue" />
                    <NumberInput label="양도가액 (매도가)" value={salePrice} onChange={setSalePrice} color="blue" />
                    <NumberInput label="필요경비 (취득세, 중개보수 등)" value={expenses} onChange={setExpenses} color="blue" />

                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2 ml-1">보유 기간 (년)</label>
                        <div className="flex gap-2">
                            {['1', '2', '3', '5', '10'].map(y => (
                                <button
                                    key={y}
                                    onClick={() => setHoldingYears(y)}
                                    className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${holdingYears === y ? 'bg-rose-500 text-white' : 'bg-slate-100 text-slate-500'}`}
                                >
                                    {y}년
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" checked={isOneHouse} onChange={(e) => setIsOneHouse(e.target.checked)} className="w-4 h-4 rounded" />
                            <span className="text-sm font-medium text-slate-700">1세대 1주택</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" checked={isRegulated} onChange={(e) => setIsRegulated(e.target.checked)} className="w-4 h-4 rounded" />
                            <span className="text-sm font-medium text-slate-700">조정대상지역</span>
                        </label>
                    </div>
                </div>
            </div>

            {result ? (
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-[2.5rem] border border-rose-100 shadow-lg relative">
                    <div className="text-center mb-6">
                        <p className="text-sm font-bold text-rose-400 uppercase tracking-widest mb-2">예상 납부 세액</p>
                        <p className="text-4xl font-black text-rose-900">{formatNumber(result.total)}원</p>
                        {result.total > 0 && <p className="text-xs text-rose-500 mt-1">적용세율 {result.rate}%</p>}
                    </div>

                    <div className="bg-white rounded-2xl p-5 space-y-3 shadow-sm ring-1 ring-black/5">
                        <div className="flex justify-between text-sm font-medium text-slate-600">
                            <span>양도차익</span>
                            <span>{formatNumber(result.gain)}원</span>
                        </div>
                        <div className="flex justify-between text-sm font-medium text-slate-600">
                            <span>장기보유특별공제</span>
                            <span className="text-green-600">-{formatNumber(result.deduction)}원</span>
                        </div>
                        <div className="flex justify-between text-sm font-medium text-slate-600">
                            <span>과세표준</span>
                            <span>{formatNumber(result.taxableGain)}원</span>
                        </div>
                        <div className="h-px bg-slate-100 my-2"></div>
                        <div className="flex justify-between text-sm font-medium text-slate-600">
                            <span>양도소득세</span>
                            <span>{formatNumber(result.tax)}원</span>
                        </div>
                        <div className="flex justify-between text-sm font-bold text-slate-800">
                            <span>지방소득세 (10%)</span>
                            <span>{formatNumber(result.localTax)}원</span>
                        </div>
                    </div>
                    <p className="text-xs text-center text-rose-300 mt-4">* 실제 세액은 다양한 요인에 따라 달라질 수 있습니다. 참고용으로만 활용하세요.</p>
                </div>
            ) : (
                <div className="text-center py-20 text-slate-300 bg-white rounded-[2rem] border-2 border-dashed border-slate-200">
                    취득가와 양도가를 입력해주세요
                </div>
            )}
        </div>
    );
};

// 11. Property Tax Calculator (재산세/종부세 계산기)
const PropertyTaxTab = () => {
    const [publicPrice, setPublicPrice] = useState('');
    const [isOneHouse, setIsOneHouse] = useState(true);
    const [houseCount, setHouseCount] = useState('1');

    const result = useMemo(() => {
        const price = parseNumber(publicPrice);
        if (!price) return null;

        // 재산세 과세표준 (공시가격의 60%)
        const taxBase = price * 0.6;

        // 재산세율 (2026년 기준)
        let propertyTax = 0;
        if (taxBase <= 60000000) {
            propertyTax = taxBase * 0.001; // 0.1%
        } else if (taxBase <= 150000000) {
            propertyTax = 60000 + (taxBase - 60000000) * 0.0015; // 0.15%
        } else if (taxBase <= 300000000) {
            propertyTax = 195000 + (taxBase - 150000000) * 0.0025; // 0.25%
        } else {
            propertyTax = 570000 + (taxBase - 300000000) * 0.004; // 0.4%
        }

        // 도시지역분 (0.14%)
        const cityTax = taxBase * 0.0014;

        // 지방교육세 (재산세의 20%)
        const eduTax = propertyTax * 0.2;

        // 재산세 합계
        const totalPropertyTax = Math.floor(propertyTax + cityTax + eduTax);

        // 종합부동산세 (공시가격 9억 초과 시, 1세대1주택은 12억)
        const jongbuThreshold = isOneHouse ? 1200000000 : 900000000;
        let jongbuTax = 0;
        let jongbuEduTax = 0;

        if (price > jongbuThreshold) {
            const jongbuBase = (price - jongbuThreshold) * 0.6; // 종부세 과세표준

            // 종부세율 (일반)
            if (jongbuBase <= 300000000) {
                jongbuTax = jongbuBase * 0.005; // 0.5%
            } else if (jongbuBase <= 600000000) {
                jongbuTax = 1500000 + (jongbuBase - 300000000) * 0.007; // 0.7%
            } else if (jongbuBase <= 1200000000) {
                jongbuTax = 3600000 + (jongbuBase - 600000000) * 0.01; // 1%
            } else if (jongbuBase <= 5000000000) {
                jongbuTax = 9600000 + (jongbuBase - 1200000000) * 0.014; // 1.4%
            } else {
                jongbuTax = 62800000 + (jongbuBase - 5000000000) * 0.027; // 2.7%
            }

            jongbuEduTax = jongbuTax * 0.2; // 농어촌특별세
        }

        const totalJongbuTax = Math.floor(jongbuTax + jongbuEduTax);
        const totalTax = totalPropertyTax + totalJongbuTax;

        return { propertyTax: Math.floor(propertyTax), cityTax: Math.floor(cityTax), eduTax: Math.floor(eduTax), totalPropertyTax, jongbuTax: Math.floor(jongbuTax), jongbuEduTax: Math.floor(jongbuEduTax), totalJongbuTax, totalTax };
    }, [publicPrice, isOneHouse, houseCount]);

    return (
        <div className="space-y-6 pb-32 animate-slide-up px-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <Calculator className="w-5 h-5 mr-3 text-teal-600" /> 재산세 / 종합부동산세
                </h3>
                <div className="space-y-5">
                    <NumberInput label="주택 공시가격" value={publicPrice} onChange={setPublicPrice} color="cyan" />

                    <label className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 rounded-xl">
                        <input type="checkbox" checked={isOneHouse} onChange={(e) => setIsOneHouse(e.target.checked)} className="w-4 h-4 rounded" />
                        <span className="text-sm font-medium text-slate-700">1세대 1주택 (종부세 12억 공제)</span>
                    </label>
                </div>
            </div>

            {result ? (
                <div className="space-y-4">
                    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-[2rem] border border-teal-100 shadow-lg">
                        <h4 className="text-sm font-bold text-teal-600 mb-4">재산세 (7월, 9월 납부)</h4>
                        <div className="bg-white rounded-xl p-4 space-y-2 text-sm">
                            <div className="flex justify-between text-slate-600">
                                <span>재산세</span>
                                <span>{formatNumber(result.propertyTax)}원</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>도시지역분</span>
                                <span>{formatNumber(result.cityTax)}원</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>지방교육세</span>
                                <span>{formatNumber(result.eduTax)}원</span>
                            </div>
                            <div className="h-px bg-teal-100 my-2"></div>
                            <div className="flex justify-between font-bold text-teal-800">
                                <span>소계</span>
                                <span>{formatNumber(result.totalPropertyTax)}원</span>
                            </div>
                        </div>
                    </div>

                    {result.totalJongbuTax > 0 && (
                        <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-[2rem] border border-red-100 shadow-lg">
                            <h4 className="text-sm font-bold text-red-600 mb-4">종합부동산세 (12월 납부)</h4>
                            <div className="bg-white rounded-xl p-4 space-y-2 text-sm">
                                <div className="flex justify-between text-slate-600">
                                    <span>종합부동산세</span>
                                    <span>{formatNumber(result.jongbuTax)}원</span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>농어촌특별세</span>
                                    <span>{formatNumber(result.jongbuEduTax)}원</span>
                                </div>
                                <div className="h-px bg-red-100 my-2"></div>
                                <div className="flex justify-between font-bold text-red-800">
                                    <span>소계</span>
                                    <span>{formatNumber(result.totalJongbuTax)}원</span>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="bg-slate-900 p-6 rounded-[2rem] text-center">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">연간 총 보유세</p>
                        <p className="text-4xl font-black text-white">{formatNumber(result.totalTax)}원</p>
                        <p className="text-sm text-slate-400 mt-2">월 약 {formatNumber(Math.round(result.totalTax / 12))}원</p>
                    </div>
                </div>
            ) : (
                <div className="text-center py-20 text-slate-300 bg-white rounded-[2rem] border-2 border-dashed border-slate-200">
                    주택 공시가격을 입력해주세요
                </div>
            )}
        </div>
    );
};

// NEW: 반전세 계산기
const SemiJeonseTab = () => {
    const [fullDeposit, setFullDeposit] = useState('');
    const [targetDeposit, setTargetDeposit] = useState('');
    const [targetMonthly, setTargetMonthly] = useState('');
    const [conversionRate, setConversionRate] = useState((BOK_RATE_DEFAULT + 3.5).toFixed(1));

    const result = useMemo(() => {
        const full = parseNumber(fullDeposit);
        const targetDep = parseNumber(targetDeposit);
        const targetMon = parseNumber(targetMonthly);
        const rate = parseFloat(conversionRate) || 0;

        if (!full) return null;

        // 보증금 감액분 → 월세 계산
        if (targetDep > 0 && targetDep < full) {
            const depositDiff = full - targetDep;
            const calculatedMonthly = Math.floor((depositDiff * (rate / 100)) / 12);
            return { mode: 'toMonthly', deposit: targetDep, monthly: calculatedMonthly, diff: depositDiff };
        }
        // 월세 → 필요 보증금 계산
        if (targetMon > 0) {
            const requiredDeposit = Math.floor((targetMon * 12) / (rate / 100));
            const newDeposit = full - requiredDeposit;
            return { mode: 'toDeposit', deposit: Math.max(newDeposit, 0), monthly: targetMon, diff: requiredDeposit };
        }
        return null;
    }, [fullDeposit, targetDeposit, targetMonthly, conversionRate]);

    return (
        <div className="space-y-6 pb-32 animate-slide-up px-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <ArrowRightLeft className="w-5 h-5 mr-3 text-violet-600" /> 반전세 계산기
                </h3>
                <div className="space-y-5">
                    <NumberInput label="현재 전세 보증금" value={fullDeposit} onChange={setFullDeposit} color="violet" />
                    <div className="p-4 bg-slate-50 rounded-2xl space-y-4">
                        <p className="text-xs font-bold text-slate-500">전환 옵션 (하나만 입력)</p>
                        <NumberInput label="희망 보증금 (감액)" value={targetDeposit} onChange={(v) => { setTargetDeposit(v); setTargetMonthly(''); }} color="violet" />
                        <div className="text-center text-xs text-slate-400 font-bold">또는</div>
                        <NumberInput label="희망 월세" value={targetMonthly} onChange={(v) => { setTargetMonthly(v); setTargetDeposit(''); }} color="violet" />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2 ml-1">전환율 (%)</label>
                        <input type="number" value={conversionRate} onChange={(e) => setConversionRate(e.target.value)} className="w-full px-4 py-3 text-right bg-slate-50 rounded-2xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-violet-500" />
                        <p className="text-xs text-slate-400 mt-1 ml-1">* 법정 상한: 기준금리({BOK_RATE_DEFAULT}%) + 3.5% = {(BOK_RATE_DEFAULT + 3.5).toFixed(1)}%</p>
                    </div>
                </div>
            </div>

            {result ? (
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-[2.5rem] border border-violet-100 shadow-lg">
                    <div className="text-center mb-6">
                        <p className="text-sm font-bold text-violet-400 uppercase tracking-widest mb-2">반전세 조건</p>
                        <p className="text-3xl font-black text-violet-900">보증금 {formatCompactNumber(result.deposit)} + 월세 {formatNumber(result.monthly)}원</p>
                    </div>
                    <div className="bg-white rounded-2xl p-4 space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-slate-500">전환 보증금</span><span className="font-bold">{formatCompactNumber(result.diff)}</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">연간 월세 합계</span><span className="font-bold">{formatNumber(result.monthly * 12)}원</span></div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-20 text-slate-300 bg-white rounded-[2rem] border-2 border-dashed border-slate-200">전세 보증금과 희망 조건을 입력해주세요</div>
            )}
        </div>
    );
};

// NEW: 증여세 계산기
const GiftTaxTab = () => {
    const [giftAmount, setGiftAmount] = useState('');
    const [relationship, setRelationship] = useState('child');
    const [isGenerationSkip, setIsGenerationSkip] = useState(false);

    const result = useMemo(() => {
        const amount = parseNumber(giftAmount);
        if (!amount) return null;

        // 증여재산 공제
        const exemptions = { spouse: 600000000, child: 50000000, grandchild: 50000000, other: 10000000 };
        const exemption = exemptions[relationship] || 0;
        const taxableAmount = Math.max(amount - exemption, 0);

        // 증여세율 (2026 기준)
        let tax = 0;
        if (taxableAmount <= 100000000) tax = taxableAmount * 0.1;
        else if (taxableAmount <= 500000000) tax = 10000000 + (taxableAmount - 100000000) * 0.2;
        else if (taxableAmount <= 1000000000) tax = 90000000 + (taxableAmount - 500000000) * 0.3;
        else if (taxableAmount <= 3000000000) tax = 240000000 + (taxableAmount - 1000000000) * 0.4;
        else tax = 1040000000 + (taxableAmount - 3000000000) * 0.5;

        // 세대생략 가산 (조부모→손자녀 직접 증여)
        if (isGenerationSkip && (relationship === 'grandchild')) tax = Math.floor(tax * 1.3);

        // 신고세액공제 3%
        const discount = Math.floor(tax * 0.03);
        const finalTax = Math.floor(tax - discount);

        return { exemption, taxableAmount, tax: Math.floor(tax), discount, finalTax };
    }, [giftAmount, relationship, isGenerationSkip]);

    return (
        <div className="space-y-6 pb-32 animate-slide-up px-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <Banknote className="w-5 h-5 mr-3 text-pink-600" /> 증여세 계산기
                </h3>
                <div className="space-y-5">
                    <NumberInput label="증여 재산가액" value={giftAmount} onChange={setGiftAmount} color="orange" />
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2 ml-1">증여자와의 관계</label>
                        <div className="grid grid-cols-2 gap-2">
                            {[{ id: 'spouse', label: '배우자 (6억)' }, { id: 'child', label: '자녀 (5천만)' }, { id: 'grandchild', label: '손자녀 (5천만)' }, { id: 'other', label: '기타 (1천만)' }].map(r => (
                                <button key={r.id} onClick={() => setRelationship(r.id)} className={`py-3 rounded-xl text-xs font-bold transition-all ${relationship === r.id ? 'bg-pink-500 text-white' : 'bg-slate-100 text-slate-500'}`}>{r.label}</button>
                            ))}
                        </div>
                    </div>
                    {relationship === 'grandchild' && (
                        <label className="flex items-center gap-2 p-3 bg-yellow-50 rounded-xl cursor-pointer">
                            <input type="checkbox" checked={isGenerationSkip} onChange={(e) => setIsGenerationSkip(e.target.checked)} className="w-4 h-4 rounded" />
                            <span className="text-sm font-medium text-yellow-800">세대생략 증여 (30% 가산)</span>
                        </label>
                    )}
                </div>
            </div>

            {result ? (
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-[2.5rem] border border-pink-100 shadow-lg">
                    <div className="text-center mb-6">
                        <p className="text-sm font-bold text-pink-400 uppercase tracking-widest mb-2">예상 증여세</p>
                        <p className="text-4xl font-black text-pink-900">{formatNumber(result.finalTax)}원</p>
                    </div>
                    <div className="bg-white rounded-2xl p-4 space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-slate-500">증여재산 공제</span><span className="font-bold text-green-600">-{formatCompactNumber(result.exemption)}</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">과세표준</span><span className="font-bold">{formatCompactNumber(result.taxableAmount)}</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">산출세액</span><span className="font-bold">{formatNumber(result.tax)}원</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">신고세액공제 (3%)</span><span className="font-bold text-green-600">-{formatNumber(result.discount)}원</span></div>
                    </div>
                    <p className="text-xs text-center text-pink-300 mt-4">* 10년 내 동일인 증여 합산 과세</p>
                </div>
            ) : (
                <div className="text-center py-20 text-slate-300 bg-white rounded-[2rem] border-2 border-dashed border-slate-200">증여 재산가액을 입력해주세요</div>
            )}
        </div>
    );
};

// NEW: 상속세 계산기
const InheritanceTaxTab = () => {
    const [totalAssets, setTotalAssets] = useState('');
    const [hasSpouse, setHasSpouse] = useState(true);
    const [childCount, setChildCount] = useState('2');
    const [debts, setDebts] = useState('');

    const result = useMemo(() => {
        const assets = parseNumber(totalAssets);
        const debt = parseNumber(debts);
        if (!assets) return null;

        const netAssets = assets - debt;
        if (netAssets <= 0) return { tax: 0, finalTax: 0, deductions: 0, taxableAmount: 0 };

        // 기초공제 2억
        let deductions = 200000000;
        // 배우자 공제 (최소 5억, 최대 30억 - 법정상속지분 한도)
        if (hasSpouse) deductions += Math.min(Math.max(netAssets * 0.5, 500000000), 3000000000);
        // 자녀 공제 (1인당 5천만)
        deductions += parseInt(childCount) * 50000000;
        // 일괄공제 5억 vs 기초공제+인적공제 비교
        const basicTotal = 200000000 + parseInt(childCount) * 50000000;
        if (!hasSpouse && basicTotal < 500000000) deductions = 500000000;

        const taxableAmount = Math.max(netAssets - deductions, 0);

        // 상속세율 (증여세와 동일)
        let tax = 0;
        if (taxableAmount <= 100000000) tax = taxableAmount * 0.1;
        else if (taxableAmount <= 500000000) tax = 10000000 + (taxableAmount - 100000000) * 0.2;
        else if (taxableAmount <= 1000000000) tax = 90000000 + (taxableAmount - 500000000) * 0.3;
        else if (taxableAmount <= 3000000000) tax = 240000000 + (taxableAmount - 1000000000) * 0.4;
        else tax = 1040000000 + (taxableAmount - 3000000000) * 0.5;

        const discount = Math.floor(tax * 0.03);
        const finalTax = Math.floor(tax - discount);

        return { netAssets, deductions, taxableAmount, tax: Math.floor(tax), discount, finalTax };
    }, [totalAssets, hasSpouse, childCount, debts]);

    return (
        <div className="space-y-6 pb-32 animate-slide-up px-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <Users className="w-5 h-5 mr-3 text-indigo-600" /> 상속세 계산기
                </h3>
                <div className="space-y-5">
                    <NumberInput label="총 상속재산" value={totalAssets} onChange={setTotalAssets} color="violet" />
                    <NumberInput label="채무 및 공과금" value={debts} onChange={setDebts} color="violet" />
                    <label className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl cursor-pointer">
                        <input type="checkbox" checked={hasSpouse} onChange={(e) => setHasSpouse(e.target.checked)} className="w-5 h-5 rounded" />
                        <span className="text-sm font-medium text-slate-700">배우자 생존 (배우자 공제 적용)</span>
                    </label>
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2 ml-1">자녀 수</label>
                        <div className="flex gap-2">
                            {['0', '1', '2', '3', '4'].map(n => (
                                <button key={n} onClick={() => setChildCount(n)} className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${childCount === n ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-500'}`}>{n}명</button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {result ? (
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-[2.5rem] border border-indigo-100 shadow-lg">
                    <div className="text-center mb-6">
                        <p className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-2">예상 상속세</p>
                        <p className="text-4xl font-black text-indigo-900">{formatNumber(result.finalTax)}원</p>
                    </div>
                    <div className="bg-white rounded-2xl p-4 space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-slate-500">순 상속재산</span><span className="font-bold">{formatCompactNumber(result.netAssets)}</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">총 공제액</span><span className="font-bold text-green-600">-{formatCompactNumber(result.deductions)}</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">과세표준</span><span className="font-bold">{formatCompactNumber(result.taxableAmount)}</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">신고세액공제 (3%)</span><span className="font-bold text-green-600">-{formatNumber(result.discount)}원</span></div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-20 text-slate-300 bg-white rounded-[2rem] border-2 border-dashed border-slate-200">상속재산을 입력해주세요</div>
            )}
        </div>
    );
};

// NEW: 주담대 한도 계산기
const MortgageLimitTab = () => {
    const [annualIncome, setAnnualIncome] = useState('');
    const [propertyValue, setPropertyValue] = useState('');
    const [loanRate, setLoanRate] = useState('4.5');
    const [loanPeriod, setLoanPeriod] = useState('30');
    const [region, setRegion] = useState('non-adj');
    const [isFirstTime, setIsFirstTime] = useState(false);

    const result = useMemo(() => {
        const income = parseNumber(annualIncome);
        const property = parseNumber(propertyValue);
        const rate = parseFloat(loanRate) / 100 / 12;
        const months = parseInt(loanPeriod) * 12;
        if (!income || !property) return null;

        // DSR 40% 기준 최대 연간 상환액
        const maxAnnualPayment = income * 0.4;
        const maxMonthlyPayment = maxAnnualPayment / 12;

        // 원리금균등 역산: P = M * [(1+r)^n - 1] / [r * (1+r)^n]
        let dsrLimit = 0;
        if (rate > 0) {
            dsrLimit = maxMonthlyPayment * (Math.pow(1 + rate, months) - 1) / (rate * Math.pow(1 + rate, months));
        } else {
            dsrLimit = maxMonthlyPayment * months;
        }

        // LTV 한도 (규제지역: 60%, 비규제: 70%, 생애최초: 80%)
        let ltvRate = region === 'adj' ? 0.6 : 0.7;
        if (isFirstTime) ltvRate = 0.8;
        const ltvLimit = property * ltvRate;

        const finalLimit = Math.min(dsrLimit, ltvLimit);
        const limitingFactor = dsrLimit < ltvLimit ? 'DSR' : 'LTV';

        return { dsrLimit: Math.floor(dsrLimit), ltvLimit: Math.floor(ltvLimit), finalLimit: Math.floor(finalLimit), limitingFactor, ltvRate: ltvRate * 100 };
    }, [annualIncome, propertyValue, loanRate, loanPeriod, region, isFirstTime]);

    return (
        <div className="space-y-6 pb-32 animate-slide-up px-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <Building className="w-5 h-5 mr-3 text-blue-600" /> 주담대 한도 계산기
                </h3>
                <div className="space-y-5">
                    <NumberInput label="연 소득" value={annualIncome} onChange={setAnnualIncome} color="blue" />
                    <NumberInput label="주택 시세 (매매가)" value={propertyValue} onChange={setPropertyValue} color="blue" />
                    <div className="flex gap-3">
                        <div className="flex-1">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2 ml-1">대출금리 (%)</label>
                            <input type="number" value={loanRate} onChange={(e) => setLoanRate(e.target.value)} className="w-full px-4 py-3 text-right bg-slate-50 rounded-2xl font-bold outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="flex-1">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2 ml-1">대출기간 (년)</label>
                            <select value={loanPeriod} onChange={(e) => setLoanPeriod(e.target.value)} className="w-full px-4 py-3 bg-slate-50 rounded-2xl font-bold outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="20">20년</option><option value="30">30년</option><option value="40">40년</option>
                            </select>
                        </div>
                    </div>
                    <ToggleGroup options={OPTIONS_REGION} value={region === 'non-adj' ? '비규제' : '규제(조정)'} onChange={(v) => setRegion(v === '비규제' ? 'non-adj' : 'adj')} color="blue" />
                    <label className="flex items-center gap-3 p-3 bg-green-50 rounded-xl cursor-pointer">
                        <input type="checkbox" checked={isFirstTime} onChange={(e) => setIsFirstTime(e.target.checked)} className="w-5 h-5 rounded accent-green-500" />
                        <span className="text-sm font-medium text-green-800">생애최초 주택구입 (LTV 80%)</span>
                    </label>
                </div>
            </div>

            {result ? (
                <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-6 rounded-[2.5rem] border border-blue-100 shadow-lg">
                    <div className="text-center mb-6">
                        <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">예상 대출 한도</p>
                        <p className="text-4xl font-black text-blue-900">{formatCompactNumber(result.finalLimit)}</p>
                        <p className="text-xs text-blue-500 mt-1">{result.limitingFactor} 기준 적용</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white p-4 rounded-2xl text-center">
                            <p className="text-xs font-bold text-slate-400 mb-1">DSR 40% 한도</p>
                            <p className="text-lg font-black text-slate-700">{formatCompactNumber(result.dsrLimit)}</p>
                        </div>
                        <div className="bg-white p-4 rounded-2xl text-center">
                            <p className="text-xs font-bold text-slate-400 mb-1">LTV {result.ltvRate}% 한도</p>
                            <p className="text-lg font-black text-slate-700">{formatCompactNumber(result.ltvLimit)}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-20 text-slate-300 bg-white rounded-[2rem] border-2 border-dashed border-slate-200">연소득과 주택 시세를 입력해주세요</div>
            )}
        </div>
    );
};

// NEW: 주택연금 계산기
const ReverseRentTab = () => {
    const [propertyValue, setPropertyValue] = useState('');
    const [age, setAge] = useState('65');
    const [pensionType, setPensionType] = useState('lifetime');

    const result = useMemo(() => {
        const property = parseNumber(propertyValue);
        const ageNum = parseInt(age) || 55;
        if (!property || ageNum < 55) return null;

        // 주택금융공사 주택연금 예상 월지급금 (간이 추정)
        // 연령대별 지급률 (100세 기준 종신형)
        const payRates = {
            55: 0.0018, 60: 0.0022, 65: 0.0028, 70: 0.0037, 75: 0.0050, 80: 0.0070
        };
        const nearestAge = [55, 60, 65, 70, 75, 80].reduce((prev, curr) =>
            Math.abs(curr - ageNum) < Math.abs(prev - ageNum) ? curr : prev
        );
        const baseRate = payRates[nearestAge] || 0.0028;

        // 주택가격 한도 (12억 상한)
        const cappedProperty = Math.min(property, 1200000000);

        let monthlyPension = Math.floor(cappedProperty * baseRate);
        if (pensionType === 'fixedTerm') monthlyPension = Math.floor(monthlyPension * 1.3); // 확정기간형 30% 더 높음

        const annualPension = monthlyPension * 12;
        const totalPension10Y = annualPension * 10;

        return { monthlyPension, annualPension, totalPension10Y, cappedProperty };
    }, [propertyValue, age, pensionType]);

    return (
        <div className="space-y-6 pb-32 animate-slide-up px-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <Home className="w-5 h-5 mr-3 text-amber-600" /> 주택연금 계산기
                </h3>
                <div className="space-y-5">
                    <NumberInput label="주택 시세" value={propertyValue} onChange={setPropertyValue} color="orange" />
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2 ml-1">신청자 연령</label>
                        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} min="55" max="90" className="w-full px-4 py-3 text-right bg-slate-50 rounded-2xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-amber-500" />
                        <p className="text-xs text-slate-400 mt-1 ml-1">만 55세 이상 신청 가능</p>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => setPensionType('lifetime')} className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${pensionType === 'lifetime' ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-500'}`}>종신형</button>
                        <button onClick={() => setPensionType('fixedTerm')} className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${pensionType === 'fixedTerm' ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-500'}`}>확정기간형</button>
                    </div>
                </div>
            </div>

            {result ? (
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-[2.5rem] border border-amber-100 shadow-lg">
                    <div className="text-center mb-6">
                        <p className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-2">예상 월 수령액</p>
                        <p className="text-4xl font-black text-amber-900">{formatNumber(result.monthlyPension)}원</p>
                    </div>
                    <div className="bg-white rounded-2xl p-4 space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-slate-500">연간 수령액</span><span className="font-bold">{formatCompactNumber(result.annualPension)}</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">10년간 총 수령액</span><span className="font-bold">{formatCompactNumber(result.totalPension10Y)}</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">적용 주택가격</span><span className="font-bold">{formatCompactNumber(result.cappedProperty)}</span></div>
                    </div>
                    <p className="text-xs text-center text-amber-400 mt-4">* HF 한국주택금융공사 기준 간이 추정치</p>
                </div>
            ) : (
                <div className="text-center py-20 text-slate-300 bg-white rounded-[2rem] border-2 border-dashed border-slate-200">주택 시세와 연령을 입력해주세요</div>
            )}
        </div>
    );
};

// NEW: 전세 vs 매매 분석
const RentVsBuyTab = () => {
    const [purchasePrice, setPurchasePrice] = useState('');
    const [jeonseDeposit, setJeonseDeposit] = useState('');
    const [years, setYears] = useState('5');
    const [loanRate, setLoanRate] = useState('4.5');
    const [expectedRise, setExpectedRise] = useState('3');

    const result = useMemo(() => {
        const purchase = parseNumber(purchasePrice);
        const jeonse = parseNumber(jeonseDeposit);
        const yearNum = parseInt(years) || 5;
        const rate = parseFloat(loanRate) / 100 || 0.045;
        const rise = parseFloat(expectedRise) / 100 || 0.03;

        if (!purchase || !jeonse) return null;

        // 매매 비용
        const acquisitionTax = Math.floor(purchase * 0.011); // 취득세 약 1.1%
        const loanAmount = purchase - jeonse; // 전세금 수준 자기자금 가정
        const annualInterest = loanAmount * rate;
        const totalInterest = annualInterest * yearNum;
        const propertyTax = Math.floor(purchase * 0.001 * yearNum); // 재산세 연 0.1%
        const sellingFee = Math.floor(purchase * 0.004); // 매도 중개비 0.4%
        const capitalGainTax = Math.floor(Math.max((purchase * Math.pow(1 + rise, yearNum) - purchase) * 0.2, 0)); // 간이 양도세

        const buyCost = acquisitionTax + totalInterest + propertyTax + sellingFee + capitalGainTax;
        const futureValue = Math.floor(purchase * Math.pow(1 + rise, yearNum));
        const buyNetGain = futureValue - purchase - buyCost;

        // 전세 비용
        const jeonseInterest = jeonse * rate * yearNum; // 기회비용
        const jeonseMoveFee = 1000000 * (yearNum / 2); // 이사비 (2년마다)
        const rentCost = jeonseInterest + jeonseMoveFee;

        const difference = buyCost - rentCost;
        const winner = buyNetGain > 0 ? '매매' : '전세';
        const breakEvenYear = rise > 0 ? Math.ceil(buyCost / (purchase * rise)) : 0;

        return { buyCost, rentCost, difference, winner, futureValue, buyNetGain, breakEvenYear, capitalGainTax };
    }, [purchasePrice, jeonseDeposit, years, loanRate, expectedRise]);

    return (
        <div className="space-y-6 pb-32 animate-slide-up px-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-3 text-cyan-600" /> 전세 vs 매매 분석
                </h3>
                <div className="space-y-5">
                    <NumberInput label="매매가" value={purchasePrice} onChange={setPurchasePrice} color="cyan" />
                    <NumberInput label="전세가" value={jeonseDeposit} onChange={setJeonseDeposit} color="cyan" />
                    <div className="flex gap-3">
                        <div className="flex-1">
                            <label className="text-xs font-bold text-slate-500 uppercase block mb-2 ml-1">거주기간 (년)</label>
                            <select value={years} onChange={(e) => setYears(e.target.value)} className="w-full px-4 py-3 bg-slate-50 rounded-2xl font-bold outline-none focus:ring-2 focus:ring-cyan-500">
                                <option value="3">3년</option><option value="5">5년</option><option value="10">10년</option>
                            </select>
                        </div>
                        <div className="flex-1">
                            <label className="text-xs font-bold text-slate-500 uppercase block mb-2 ml-1">연간 상승률 (%)</label>
                            <input type="number" value={expectedRise} onChange={(e) => setExpectedRise(e.target.value)} className="w-full px-4 py-3 text-right bg-slate-50 rounded-2xl font-bold outline-none focus:ring-2 focus:ring-cyan-500" />
                        </div>
                    </div>
                </div>
            </div>

            {result ? (
                <div className="space-y-4">
                    <div className={`p-6 rounded-[2.5rem] shadow-lg ${result.winner === '매매' ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100' : 'bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100'}`}>
                        <div className="text-center mb-4">
                            <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-60">{years}년 거주 시</p>
                            <p className="text-3xl font-black">{result.winner === '매매' ? '🏠 매매 유리' : '🔑 전세 유리'}</p>
                            <p className="text-lg font-bold mt-2">{result.buyNetGain > 0 ? `순이익 ${formatCompactNumber(result.buyNetGain)}` : `비용 ${formatCompactNumber(Math.abs(result.difference))} 절약`}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white p-4 rounded-2xl text-center shadow-sm border border-slate-100">
                            <p className="text-xs font-bold text-blue-500 mb-1">매매 총비용</p>
                            <p className="text-lg font-black text-slate-700">{formatCompactNumber(result.buyCost)}</p>
                        </div>
                        <div className="bg-white p-4 rounded-2xl text-center shadow-sm border border-slate-100">
                            <p className="text-xs font-bold text-orange-500 mb-1">전세 총비용</p>
                            <p className="text-lg font-black text-slate-700">{formatCompactNumber(result.rentCost)}</p>
                        </div>
                    </div>
                    {result.breakEvenYear > 0 && result.breakEvenYear < 30 && (
                        <p className="text-center text-sm text-slate-500">📊 손익분기점: 약 {result.breakEvenYear}년</p>
                    )}
                </div>
            ) : (
                <div className="text-center py-20 text-slate-300 bg-white rounded-[2rem] border-2 border-dashed border-slate-200">매매가와 전세가를 입력해주세요</div>
            )}
        </div>
    );
};

// NEW: 내집가격 계산기 (Affordability)
const AffordabilityTab = () => {
    const [monthlyBudget, setMonthlyBudget] = useState('');
    const [savings, setSavings] = useState('');
    const [annualIncome, setAnnualIncome] = useState('');
    const [loanRate, setLoanRate] = useState('4.5');
    const [loanPeriod, setLoanPeriod] = useState('30');

    const result = useMemo(() => {
        const budget = parseNumber(monthlyBudget);
        const cash = parseNumber(savings);
        const income = parseNumber(annualIncome);
        const rate = parseFloat(loanRate) / 100 / 12;
        const months = parseInt(loanPeriod) * 12;

        if (!budget || !cash) return null;

        // DSR 40% 기준 최대 대출 한도
        let maxLoanByDSR = Infinity;
        if (income > 0) {
            const maxAnnualPayment = income * 0.4;
            const maxMonthlyPayment = Math.min(budget, maxAnnualPayment / 12);
            if (rate > 0) {
                maxLoanByDSR = maxMonthlyPayment * (Math.pow(1 + rate, months) - 1) / (rate * Math.pow(1 + rate, months));
            } else {
                maxLoanByDSR = maxMonthlyPayment * months;
            }
        }

        // 월 상환액 기준 최대 대출
        let maxLoanByPayment = 0;
        if (rate > 0) {
            maxLoanByPayment = budget * (Math.pow(1 + rate, months) - 1) / (rate * Math.pow(1 + rate, months));
        } else {
            maxLoanByPayment = budget * months;
        }

        const maxLoan = Math.min(maxLoanByDSR, maxLoanByPayment);
        const ltvRate = 0.7; // 비규제 LTV 70%
        const maxPriceByLTV = (cash + maxLoan) / (1 - (1 - ltvRate));
        const recommendedPrice = Math.floor(cash + maxLoan);

        return { maxLoan: Math.floor(maxLoan), recommendedPrice, cash };
    }, [monthlyBudget, savings, annualIncome, loanRate, loanPeriod]);

    return (
        <div className="space-y-6 pb-32 animate-slide-up px-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <Home className="w-5 h-5 mr-3 text-emerald-600" /> 내 집 가격 계산기
                </h3>
                <div className="space-y-5">
                    <NumberInput label="월 가용 주거비 (상환액)" value={monthlyBudget} onChange={setMonthlyBudget} color="green" />
                    <NumberInput label="보유 현금 (자기자금)" value={savings} onChange={setSavings} color="green" />
                    <NumberInput label="연 소득 (선택)" value={annualIncome} onChange={setAnnualIncome} color="green" />
                    <div className="flex gap-3">
                        <div className="flex-1">
                            <label className="text-xs font-bold text-slate-500 uppercase block mb-2 ml-1">대출금리 (%)</label>
                            <input type="number" value={loanRate} onChange={(e) => setLoanRate(e.target.value)} className="w-full px-4 py-3 text-right bg-slate-50 rounded-2xl font-bold outline-none focus:ring-2 focus:ring-emerald-500" />
                        </div>
                        <div className="flex-1">
                            <label className="text-xs font-bold text-slate-500 uppercase block mb-2 ml-1">대출기간</label>
                            <select value={loanPeriod} onChange={(e) => setLoanPeriod(e.target.value)} className="w-full px-4 py-3 bg-slate-50 rounded-2xl font-bold outline-none">
                                <option value="20">20년</option><option value="30">30년</option><option value="40">40년</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {result ? (
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-[2.5rem] border border-emerald-100 shadow-lg">
                    <div className="text-center mb-6">
                        <p className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-2">구매 가능 주택 가격</p>
                        <p className="text-4xl font-black text-emerald-900">{formatCompactNumber(result.recommendedPrice)}</p>
                    </div>
                    <div className="bg-white rounded-2xl p-4 space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-slate-500">자기자금</span><span className="font-bold">{formatCompactNumber(result.cash)}</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">예상 대출 한도</span><span className="font-bold">{formatCompactNumber(result.maxLoan)}</span></div>
                    </div>
                    <p className="text-xs text-center text-emerald-400 mt-4">* 실제 대출 한도는 신용도, 소득증빙에 따라 달라질 수 있습니다</p>
                </div>
            ) : (
                <div className="text-center py-20 text-slate-300 bg-white rounded-[2rem] border-2 border-dashed border-slate-200">월 가용 주거비와 보유 현금을 입력해주세요</div>
            )}
        </div>
    );
};

// NEW: 상환 스케줄표
const AmortizationScheduleTab = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [rate, setRate] = useState('4.5');
    const [period, setPeriod] = useState('360');
    const [method, setMethod] = useState('equal'); // equal: 원리금균등, principal: 원금균등

    const schedule = useMemo(() => {
        const principal = parseNumber(loanAmount);
        const monthlyRate = parseFloat(rate) / 100 / 12;
        const n = parseInt(period);
        if (!principal || !n || monthlyRate <= 0) return null;

        const items = [];
        let remaining = principal;

        if (method === 'equal') {
            // 원리금균등
            const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
            for (let i = 1; i <= Math.min(n, 12); i++) {
                const interest = remaining * monthlyRate;
                const principalPay = monthlyPayment - interest;
                remaining -= principalPay;
                items.push({ month: i, payment: Math.floor(monthlyPayment), principal: Math.floor(principalPay), interest: Math.floor(interest), remaining: Math.floor(Math.max(remaining, 0)) });
            }
        } else {
            // 원금균등
            const monthlyPrincipal = principal / n;
            for (let i = 1; i <= Math.min(n, 12); i++) {
                const interest = remaining * monthlyRate;
                const payment = monthlyPrincipal + interest;
                remaining -= monthlyPrincipal;
                items.push({ month: i, payment: Math.floor(payment), principal: Math.floor(monthlyPrincipal), interest: Math.floor(interest), remaining: Math.floor(Math.max(remaining, 0)) });
            }
        }

        return items;
    }, [loanAmount, rate, period, method]);

    return (
        <div className="space-y-6 pb-32 animate-slide-up px-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <ClipboardList className="w-5 h-5 mr-3 text-purple-600" /> 상환 스케줄표
                </h3>
                <div className="space-y-5">
                    <NumberInput label="대출금액" value={loanAmount} onChange={setLoanAmount} color="violet" />
                    <div className="flex gap-3">
                        <div className="flex-1">
                            <label className="text-xs font-bold text-slate-500 uppercase block mb-2 ml-1">금리 (%)</label>
                            <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} className="w-full px-4 py-3 text-right bg-slate-50 rounded-2xl font-bold outline-none" />
                        </div>
                        <div className="flex-1">
                            <label className="text-xs font-bold text-slate-500 uppercase block mb-2 ml-1">기간</label>
                            <select value={period} onChange={(e) => setPeriod(e.target.value)} className="w-full px-4 py-3 bg-slate-50 rounded-2xl font-bold outline-none">
                                <option value="120">10년</option><option value="240">20년</option><option value="360">30년</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => setMethod('equal')} className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${method === 'equal' ? 'bg-purple-500 text-white' : 'bg-slate-100 text-slate-500'}`}>원리금균등</button>
                        <button onClick={() => setMethod('principal')} className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${method === 'principal' ? 'bg-purple-500 text-white' : 'bg-slate-100 text-slate-500'}`}>원금균등</button>
                    </div>
                </div>
            </div>

            {schedule && schedule.length > 0 ? (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-xs">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="py-3 px-2 text-left font-bold text-slate-500">회차</th>
                                    <th className="py-3 px-2 text-right font-bold text-slate-500">상환액</th>
                                    <th className="py-3 px-2 text-right font-bold text-slate-500">원금</th>
                                    <th className="py-3 px-2 text-right font-bold text-slate-500">이자</th>
                                    <th className="py-3 px-2 text-right font-bold text-slate-500">잔액</th>
                                </tr>
                            </thead>
                            <tbody>
                                {schedule.map((row) => (
                                    <tr key={row.month} className="border-t border-slate-100">
                                        <td className="py-2.5 px-2 font-medium">{row.month}회</td>
                                        <td className="py-2.5 px-2 text-right font-bold">{formatNumber(row.payment)}</td>
                                        <td className="py-2.5 px-2 text-right text-blue-600">{formatNumber(row.principal)}</td>
                                        <td className="py-2.5 px-2 text-right text-red-500">{formatNumber(row.interest)}</td>
                                        <td className="py-2.5 px-2 text-right text-slate-400">{formatCompactNumber(row.remaining)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-center text-slate-400 py-3">* 첫 12개월 스케줄 표시</p>
                </div>
            ) : (
                <div className="text-center py-20 text-slate-300 bg-white rounded-[2rem] border-2 border-dashed border-slate-200">대출금액을 입력해주세요</div>
            )}
        </div>
    );
};

// NEW: 청약 점수 계산기 (가점제)
const SubscriptionScoreTab = () => {
    const [noHouseYears, setNoHouseYears] = useState('10');
    const [dependents, setDependents] = useState('3');
    const [accountYears, setAccountYears] = useState('5');

    const result = useMemo(() => {
        const years = parseInt(noHouseYears) || 0;
        const deps = parseInt(dependents) || 0;
        const accYears = parseInt(accountYears) || 0;

        // 무주택 기간 점수 (최대 32점)
        let noHouseScore = 0;
        if (years >= 15) noHouseScore = 32;
        else if (years >= 14) noHouseScore = 30;
        else if (years >= 13) noHouseScore = 28;
        else if (years >= 12) noHouseScore = 26;
        else if (years >= 11) noHouseScore = 24;
        else if (years >= 10) noHouseScore = 22;
        else if (years >= 9) noHouseScore = 20;
        else if (years >= 8) noHouseScore = 18;
        else if (years >= 7) noHouseScore = 16;
        else if (years >= 6) noHouseScore = 14;
        else if (years >= 5) noHouseScore = 12;
        else if (years >= 4) noHouseScore = 10;
        else if (years >= 3) noHouseScore = 8;
        else if (years >= 2) noHouseScore = 6;
        else if (years >= 1) noHouseScore = 2;

        // 부양가족 수 점수 (최대 35점)
        let dependentScore = 5; // 0명도 5점
        if (deps >= 6) dependentScore = 35;
        else if (deps === 5) dependentScore = 30;
        else if (deps === 4) dependentScore = 25;
        else if (deps === 3) dependentScore = 20;
        else if (deps === 2) dependentScore = 15;
        else if (deps === 1) dependentScore = 10;

        // 청약통장 가입기간 점수 (최대 17점)
        let accountScore = 1;
        if (accYears >= 15) accountScore = 17;
        else if (accYears >= 14) accountScore = 16;
        else if (accYears >= 13) accountScore = 15;
        else if (accYears >= 12) accountScore = 14;
        else if (accYears >= 11) accountScore = 13;
        else if (accYears >= 10) accountScore = 12;
        else if (accYears >= 9) accountScore = 11;
        else if (accYears >= 8) accountScore = 10;
        else if (accYears >= 7) accountScore = 9;
        else if (accYears >= 6) accountScore = 8;
        else if (accYears >= 5) accountScore = 7;
        else if (accYears >= 4) accountScore = 6;
        else if (accYears >= 3) accountScore = 5;
        else if (accYears >= 2) accountScore = 4;
        else if (accYears >= 1) accountScore = 3;

        const totalScore = noHouseScore + dependentScore + accountScore;
        const maxScore = 84;
        const percentage = (totalScore / maxScore) * 100;

        let grade = 'C';
        let gradeColor = 'text-orange-500';
        if (totalScore >= 70) { grade = 'S'; gradeColor = 'text-purple-600'; }
        else if (totalScore >= 60) { grade = 'A'; gradeColor = 'text-blue-600'; }
        else if (totalScore >= 50) { grade = 'B'; gradeColor = 'text-green-600'; }

        return { noHouseScore, dependentScore, accountScore, totalScore, maxScore, percentage, grade, gradeColor };
    }, [noHouseYears, dependents, accountYears]);

    return (
        <div className="space-y-6 pb-32 animate-slide-up px-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <Award className="w-5 h-5 mr-3 text-purple-600" /> 청약 가점 계산기
                </h3>
                <div className="space-y-5">
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2 ml-1">무주택 기간 (년)</label>
                        <input type="number" value={noHouseYears} onChange={(e) => setNoHouseYears(e.target.value)} min="0" max="30" className="w-full px-5 py-4 text-right bg-slate-50 border-0 rounded-2xl outline-none focus:ring-2 focus:ring-purple-500 font-bold text-slate-700 text-lg" />
                        <p className="text-xs text-slate-400 mt-1 ml-1">만 30세 이상 미혼은 무주택기간 산정</p>
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2 ml-1">부양가족 수 (명)</label>
                        <div className="flex gap-2">
                            {['0', '1', '2', '3', '4', '5', '6'].map(n => (
                                <button key={n} onClick={() => setDependents(n)} className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${dependents === n ? 'bg-purple-500 text-white' : 'bg-slate-100 text-slate-500'}`}>{n}{n === '6' ? '+' : ''}</button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2 ml-1">청약통장 가입 기간 (년)</label>
                        <input type="number" value={accountYears} onChange={(e) => setAccountYears(e.target.value)} min="0" max="20" className="w-full px-5 py-4 text-right bg-slate-50 border-0 rounded-2xl outline-none focus:ring-2 focus:ring-purple-500 font-bold text-slate-700 text-lg" />
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-[2.5rem] border border-purple-100 shadow-lg">
                <div className="text-center mb-6">
                    <p className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-2">My Score</p>
                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-6xl font-black ${result.gradeColor}`}>{result.grade}</span>
                        <div>
                            <p className="text-4xl font-black text-purple-900">{result.totalScore}<span className="text-lg font-bold text-purple-400">/{result.maxScore}</span></p>
                            <p className="text-sm text-purple-500">상위 {Math.round(100 - result.percentage)}% 예상</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-4 space-y-3 shadow-sm">
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-600">무주택 기간</span>
                        <span className="font-bold text-purple-600">{result.noHouseScore}점 / 32점</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-600">부양가족 수</span>
                        <span className="font-bold text-purple-600">{result.dependentScore}점 / 35점</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-600">청약통장 기간</span>
                        <span className="font-bold text-purple-600">{result.accountScore}점 / 17점</span>
                    </div>
                </div>

                <div className="mt-4 w-full bg-purple-200 rounded-full h-4 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-1000" style={{ width: `${result.percentage}%` }}></div>
                </div>
            </div>
        </div>
    );
};

// NEW: DTI 계산기
const DTITab = () => {
    const [annualIncome, setAnnualIncome] = useState('');
    const [annualRepayment, setAnnualRepayment] = useState('');

    const result = useMemo(() => {
        const income = parseNumber(annualIncome);
        const repay = parseNumber(annualRepayment);
        if (!income) return null;

        const dti = (repay / income) * 100;

        let status = '여유';
        let colorClass = 'bg-emerald-50 border-emerald-200 text-emerald-900';
        if (dti > 60) { status = '위험 (한도 초과)'; colorClass = 'bg-red-50 border-red-200 text-red-900'; }
        else if (dti > 40) { status = '주의 (한도 근접)'; colorClass = 'bg-orange-50 border-orange-200 text-orange-900'; }

        return { dti, status, colorClass };
    }, [annualIncome, annualRepayment]);

    return (
        <div className="space-y-6 pb-32 animate-slide-up px-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <Percent className="w-5 h-5 mr-3 text-sky-600" /> DTI 계산 (총부채상환비율)
                </h3>
                <div className="space-y-5">
                    <NumberInput label="연 소득" value={annualIncome} onChange={setAnnualIncome} color="cyan" />
                    <NumberInput label="연간 대출 원리금 상환액" value={annualRepayment} onChange={setAnnualRepayment} color="cyan" />
                </div>
            </div>

            {result ? (
                <div className={`p-6 rounded-[2.5rem] border ${result.colorClass} shadow-lg`}>
                    <div className="text-center">
                        <div className="text-sm font-bold opacity-60 uppercase tracking-widest mb-2">My DTI</div>
                        <div className="text-5xl font-black mb-2">{result.dti.toFixed(2)}%</div>
                        <div className="inline-block px-3 py-1 rounded-full bg-white/50 font-bold text-sm">{result.status}</div>
                    </div>
                    <div className="w-full bg-white/40 rounded-full h-4 mt-6 p-0.5">
                        <div className={`h-full rounded-full transition-all duration-1000 ${result.dti > 40 ? 'bg-red-500' : 'bg-emerald-500'}`} style={{ width: `${Math.min(result.dti, 100)}%` }}></div>
                    </div>
                    <p className="text-xs text-center opacity-60 mt-4">* DTI 규제: 투기지역 40%, 조정지역 50%, 기타 60%</p>
                </div>
            ) : (
                <div className="text-center py-20 text-slate-300 bg-white rounded-[2rem] border-2 border-dashed border-slate-200">소득과 상환액을 입력해주세요</div>
            )}
        </div>
    );
};

// NEW: 전세자금대출 한도 계산기
const JeonseLoanLimitTab = () => {
    const [deposit, setDeposit] = useState('');
    const [annualIncome, setAnnualIncome] = useState('');
    const [creditGrade, setCreditGrade] = useState('good');

    const result = useMemo(() => {
        const dep = parseNumber(deposit);
        const income = parseNumber(annualIncome);
        if (!dep) return null;

        // 버팀목전세대출 (최대 2억)
        const buteomokLimit = Math.min(dep * 0.8, 200000000);
        const buteomokRate = 2.1; // 저소득층 기준

        // 카카오뱅크 전세대출 (최대 5억)
        const kakaoLimit = Math.min(dep * 0.8, 500000000);
        const kakaoRate = creditGrade === 'excellent' ? 3.8 : creditGrade === 'good' ? 4.2 : 4.8;

        // 은행권 일반 전세대출 (최대 4억)
        const bankLimit = Math.min(dep * 0.8, 400000000);
        const bankRate = creditGrade === 'excellent' ? 4.0 : creditGrade === 'good' ? 4.5 : 5.0;

        return { buteomokLimit, buteomokRate, kakaoLimit, kakaoRate, bankLimit, bankRate };
    }, [deposit, annualIncome, creditGrade]);

    return (
        <div className="space-y-6 pb-32 animate-slide-up px-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <Banknote className="w-5 h-5 mr-3 text-green-600" /> 전세자금대출 한도
                </h3>
                <div className="space-y-5">
                    <NumberInput label="전세 보증금" value={deposit} onChange={setDeposit} color="green" />
                    <NumberInput label="연 소득 (선택)" value={annualIncome} onChange={setAnnualIncome} color="green" />
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2 ml-1">신용등급</label>
                        <div className="flex gap-2">
                            {[{ id: 'excellent', label: '우수 (1-3)' }, { id: 'good', label: '양호 (4-6)' }, { id: 'normal', label: '보통 (7-9)' }].map(g => (
                                <button key={g.id} onClick={() => setCreditGrade(g.id)} className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${creditGrade === g.id ? 'bg-green-500 text-white' : 'bg-slate-100 text-slate-500'}`}>{g.label}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {result ? (
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-sky-50 p-5 rounded-2xl border border-blue-100">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xs font-bold text-blue-600 mb-1">버팀목 전세대출</p>
                                <p className="text-2xl font-black text-blue-900">{formatCompactNumber(result.buteomokLimit)}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-slate-500">예상 금리</p>
                                <p className="text-lg font-bold text-blue-600">{result.buteomokRate}%</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-5 rounded-2xl border border-yellow-100">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xs font-bold text-amber-600 mb-1">카카오뱅크 전세대출</p>
                                <p className="text-2xl font-black text-amber-900">{formatCompactNumber(result.kakaoLimit)}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-slate-500">예상 금리</p>
                                <p className="text-lg font-bold text-amber-600">{result.kakaoRate}%</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-5 rounded-2xl border border-slate-200">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xs font-bold text-slate-600 mb-1">시중은행 전세대출</p>
                                <p className="text-2xl font-black text-slate-900">{formatCompactNumber(result.bankLimit)}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-slate-500">예상 금리</p>
                                <p className="text-lg font-bold text-slate-600">{result.bankRate}%</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-xs text-center text-slate-400">* 실제 한도와 금리는 심사 결과에 따라 다를 수 있습니다</p>
                </div>
            ) : (
                <div className="text-center py-20 text-slate-300 bg-white rounded-[2rem] border-2 border-dashed border-slate-200">보증금을 입력해주세요</div>
            )}
        </div>
    );
};

// NEW: 주담대 상환 비교 시각화
const LoanCompareTab = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [rate, setRate] = useState('4.5');
    const [period, setPeriod] = useState('360'); // 30년 = 360개월

    const result = useMemo(() => {
        const principal = parseNumber(loanAmount);
        const ratePercent = parseFloat(rate) || 0;
        const n = parseInt(period);
        if (!principal || !n) return null;

        // Handle zero interest rate edge case
        if (ratePercent === 0) {
            const monthlyPayment = principal / n;
            return {
                bullet: { total: principal, interest: 0, monthly: 0 },
                equal: { total: principal, interest: 0, monthly: monthlyPayment },
                principal: { total: principal, interest: 0, first: monthlyPayment },
                maxTotal: principal
            };
        }

        const r = ratePercent / 100 / 12;

        // 만기일시
        const bulletInterest = principal * r * n;
        const bulletTotal = principal + bulletInterest;
        const bulletMonthly = principal * r;

        // 원리금균등
        const equalPayment = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const equalTotal = equalPayment * n;
        const equalInterest = equalTotal - principal;

        // 원금균등
        const principalPayment = principal / n;
        const firstInterest = principal * r;
        const principalFirst = principalPayment + firstInterest;
        let principalTotalInterest = 0;
        for (let i = 0; i < n; i++) {
            principalTotalInterest += (principal - (principalPayment * i)) * r;
        }
        const principalTotal = principal + principalTotalInterest;

        const maxTotal = Math.max(bulletTotal, equalTotal, principalTotal);

        return {
            bullet: { total: bulletTotal, interest: bulletInterest, monthly: bulletMonthly },
            equal: { total: equalTotal, interest: equalInterest, monthly: equalPayment },
            principal: { total: principalTotal, interest: principalTotalInterest, first: principalFirst },
            maxTotal
        };
    }, [loanAmount, rate, period]);

    return (
        <div className="space-y-6 pb-32 animate-slide-up px-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-3 text-indigo-600" /> 상환방식 비교
                </h3>
                <div className="space-y-5">
                    <NumberInput label="대출금액" value={loanAmount} onChange={setLoanAmount} color="violet" />
                    <div className="flex gap-3">
                        <div className="flex-1">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2 ml-1">금리 (%)</label>
                            <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} className="w-full px-4 py-3 text-right bg-slate-50 rounded-2xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                        <div className="flex-1">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2 ml-1">기간</label>
                            <select value={period} onChange={(e) => setPeriod(e.target.value)} className="w-full px-4 py-3 bg-slate-50 rounded-2xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500">
                                <option value="120">10년</option>
                                <option value="180">15년</option>
                                <option value="240">20년</option>
                                <option value="300">25년</option>
                                <option value="360">30년</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {result ? (
                <div className="space-y-4">
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                        <h4 className="text-sm font-bold text-slate-600 mb-4">총 상환금액 비교</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="w-20 text-xs font-bold text-slate-500">만기일시</span>
                                <div className="flex-1 bg-slate-100 rounded-full h-6 overflow-hidden">
                                    <div className="h-full bg-red-400 rounded-full" style={{ width: `${(result.bullet.total / result.maxTotal) * 100}%` }}></div>
                                </div>
                                <span className="text-sm font-bold w-24 text-right">{formatCompactNumber(result.bullet.total)}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-20 text-xs font-bold text-slate-500">원리금균등</span>
                                <div className="flex-1 bg-slate-100 rounded-full h-6 overflow-hidden">
                                    <div className="h-full bg-blue-400 rounded-full" style={{ width: `${(result.equal.total / result.maxTotal) * 100}%` }}></div>
                                </div>
                                <span className="text-sm font-bold w-24 text-right">{formatCompactNumber(result.equal.total)}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-20 text-xs font-bold text-slate-500">원금균등</span>
                                <div className="flex-1 bg-slate-100 rounded-full h-6 overflow-hidden">
                                    <div className="h-full bg-green-400 rounded-full" style={{ width: `${(result.principal.total / result.maxTotal) * 100}%` }}></div>
                                </div>
                                <span className="text-sm font-bold w-24 text-right">{formatCompactNumber(result.principal.total)}</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        <div className="bg-red-50 p-4 rounded-2xl text-center">
                            <p className="text-[10px] font-bold text-red-500 mb-1">만기일시</p>
                            <p className="text-lg font-black text-red-700">{formatCompactNumber(result.bullet.interest)}</p>
                            <p className="text-[10px] text-red-400">총 이자</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-2xl text-center">
                            <p className="text-[10px] font-bold text-blue-500 mb-1">원리금균등</p>
                            <p className="text-lg font-black text-blue-700">{formatCompactNumber(result.equal.interest)}</p>
                            <p className="text-[10px] text-blue-400">총 이자</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-2xl text-center">
                            <p className="text-[10px] font-bold text-green-500 mb-1">원금균등</p>
                            <p className="text-lg font-black text-green-700">{formatCompactNumber(result.principal.interest)}</p>
                            <p className="text-[10px] text-green-400">총 이자</p>
                        </div>
                    </div>

                    <div className="bg-green-100 p-4 rounded-2xl text-center">
                        <p className="text-sm font-bold text-green-800">
                            💡 원금균등 선택 시 만기일시 대비 <span className="text-green-600">{formatCompactNumber(result.bullet.interest - result.principal.interest)}</span> 절약!
                        </p>
                    </div>
                </div>
            ) : (
                <div className="text-center py-20 text-slate-300 bg-white rounded-[2rem] border-2 border-dashed border-slate-200">대출금액을 입력해주세요</div>
            )}
        </div>
    );
};

// NEW: 임대수익률 시뮬레이터 (Phase 2)
const RentalYieldTab = () => {
    const [purchasePrice, setPurchasePrice] = useState('');
    const [monthlyRent, setMonthlyRent] = useState('');
    const [jeonseDeposit, setJeonseDeposit] = useState('');
    const [vacancyRate, setVacancyRate] = useState('5');
    const [repairCost, setRepairCost] = useState('');
    const [propertyTax, setPropertyTax] = useState('');

    const result = useMemo(() => {
        const price = parseNumber(purchasePrice);
        const rent = parseNumber(monthlyRent);
        const deposit = parseNumber(jeonseDeposit);
        const vacancy = parseFloat(vacancyRate) / 100 || 0;
        const repair = parseNumber(repairCost);
        const tax = parseNumber(propertyTax);

        if (!price || !rent) return null;

        const annualRent = rent * 12;
        const effectiveRent = annualRent * (1 - vacancy);
        const totalCosts = repair + tax;
        const netIncome = effectiveRent - totalCosts;
        const investment = price - deposit;
        const grossYield = (annualRent / price) * 100;
        const netYield = investment > 0 ? (netIncome / investment) * 100 : 0;

        return { annualRent, effectiveRent, netIncome, grossYield, netYield, totalCosts };
    }, [purchasePrice, monthlyRent, jeonseDeposit, vacancyRate, repairCost, propertyTax]);

    return (
        <div className="space-y-6 pb-32 animate-slide-up px-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-3 text-green-600" /> 임대수익률 시뮬레이터
                </h3>
                <div className="space-y-5">
                    <NumberInput label="매입가" value={purchasePrice} onChange={setPurchasePrice} color="green" />
                    <NumberInput label="월 임대료" value={monthlyRent} onChange={setMonthlyRent} color="green" />
                    <NumberInput label="전세보증금 (선택)" value={jeonseDeposit} onChange={setJeonseDeposit} color="green" />
                    <div className="flex gap-3">
                        <div className="flex-1">
                            <label className="text-xs font-bold text-slate-500 block mb-1">공실률 (%)</label>
                            <input type="number" value={vacancyRate} onChange={e => setVacancyRate(e.target.value)} className="w-full px-3 py-2 bg-slate-50 rounded-xl text-right font-bold outline-none" />
                        </div>
                        <div className="flex-1">
                            <NumberInput label="연간 수선비" value={repairCost} onChange={setRepairCost} color="green" enableUnitToggle={false} showKorean={false} />
                        </div>
                    </div>
                    <NumberInput label="연간 재산세" value={propertyTax} onChange={setPropertyTax} color="green" enableUnitToggle={false} showKorean={false} />
                </div>
            </div>
            {result ? (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-[2.5rem] border border-green-100 shadow-lg">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center p-4 bg-white rounded-2xl">
                            <p className="text-xs font-bold text-slate-500 mb-1">총수익률</p>
                            <p className="text-2xl font-black text-green-600">{result.grossYield.toFixed(2)}%</p>
                        </div>
                        <div className="text-center p-4 bg-white rounded-2xl">
                            <p className="text-xs font-bold text-slate-500 mb-1">실질수익률</p>
                            <p className="text-2xl font-black text-emerald-600">{result.netYield.toFixed(2)}%</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-slate-500">연간 임대료</span><span className="font-bold">{formatCompactNumber(result.annualRent)}</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">공실 반영</span><span className="font-bold">{formatCompactNumber(result.effectiveRent)}</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">연간 비용</span><span className="font-bold text-red-500">-{formatCompactNumber(result.totalCosts)}</span></div>
                        <div className="h-px bg-slate-200"></div>
                        <div className="flex justify-between font-bold"><span>순임대소득</span><span className="text-green-600">{formatCompactNumber(result.netIncome)}</span></div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-20 text-slate-300 bg-white rounded-[2rem] border-2 border-dashed border-slate-200">매입가와 월 임대료를 입력해주세요</div>
            )}
        </div>
    );
};

// NEW: 다주택자 보유세 시뮬레이션 (Phase 2)
const MultiPropertyTaxTab = () => {
    const [properties, setProperties] = useState([{ price: '', location: 'non-regulated' }]);

    const addProperty = () => setProperties([...properties, { price: '', location: 'non-regulated' }]);
    const removeProperty = (idx) => setProperties(properties.filter((_, i) => i !== idx));
    const updateProperty = (idx, field, value) => {
        const updated = [...properties];
        updated[idx][field] = value;
        setProperties(updated);
    };

    const result = useMemo(() => {
        const prices = properties.map(p => parseNumber(p.price)).filter(p => p > 0);
        if (prices.length === 0) return null;

        const totalPrice = prices.reduce((a, b) => a + b, 0);
        const count = prices.length;

        // 재산세 (간이 계산: 0.1% ~ 0.4%)
        let propertyTax = 0;
        prices.forEach(p => {
            if (p <= 600000000) propertyTax += p * 0.001;
            else if (p <= 1500000000) propertyTax += p * 0.0015;
            else propertyTax += p * 0.004;
        });

        // 종부세 (다주택 중과)
        let jongbuTax = 0;
        const threshold = count >= 3 ? 600000000 : count >= 2 ? 900000000 : 1100000000;
        const excess = totalPrice - threshold;
        if (excess > 0) {
            const rate = count >= 3 ? 0.05 : count >= 2 ? 0.025 : 0.01;
            jongbuTax = excess * rate;
        }

        return { propertyTax: Math.floor(propertyTax), jongbuTax: Math.floor(jongbuTax), total: Math.floor(propertyTax + jongbuTax), count, totalPrice };
    }, [properties]);

    return (
        <div className="space-y-6 pb-32 animate-slide-up px-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <Building className="w-5 h-5 mr-3 text-purple-600" /> 다주택 보유세 시뮬레이션
                </h3>
                <div className="space-y-4">
                    {properties.map((prop, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 rounded-2xl">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-sm font-bold text-purple-600">주택 {idx + 1}</span>
                                {properties.length > 1 && <button onClick={() => removeProperty(idx)} className="text-red-500 text-xs font-bold">삭제</button>}
                            </div>
                            <NumberInput label="공시가격" value={prop.price} onChange={(v) => updateProperty(idx, 'price', v)} color="violet" />
                        </div>
                    ))}
                    <button onClick={addProperty} className="w-full py-3 bg-purple-100 text-purple-600 rounded-xl font-bold text-sm">+ 주택 추가</button>
                </div>
            </div>
            {result && (
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-[2.5rem] border border-purple-100 shadow-lg">
                    <div className="text-center mb-4">
                        <p className="text-sm font-bold text-purple-500 mb-1">{result.count}주택 연간 보유세</p>
                        <p className="text-4xl font-black text-purple-800">{formatCompactNumber(result.total)}</p>
                    </div>
                    <div className="bg-white rounded-2xl p-4 space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-slate-500">총 공시가격</span><span className="font-bold">{formatCompactNumber(result.totalPrice)}</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">재산세</span><span className="font-bold">{formatCompactNumber(result.propertyTax)}</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">종합부동산세</span><span className="font-bold">{formatCompactNumber(result.jongbuTax)}</span></div>
                    </div>
                    <p className="text-xs text-center text-purple-400 mt-4">* 간이 추정치, 실제 세금과 다를 수 있음</p>
                </div>
            )}
        </div>
    );
};

// NEW: 재건축/리모델링 수익분석 (Phase 2)
const ReconstructionTab = () => {
    const [currentValue, setCurrentValue] = useState('');
    const [contribution, setContribution] = useState('');
    const [expectedValue, setExpectedValue] = useState('');
    const [duration, setDuration] = useState('5');

    const result = useMemo(() => {
        const current = parseNumber(currentValue);
        const contrib = parseNumber(contribution);
        const expected = parseNumber(expectedValue);
        const years = parseInt(duration) || 1;

        if (!current || !expected) return null;

        const totalInvestment = current + contrib;
        const profit = expected - totalInvestment;
        const roi = totalInvestment > 0 ? (profit / totalInvestment) * 100 : 0;
        const annualRoi = roi / years;

        return { totalInvestment, profit, roi, annualRoi, isPositive: profit > 0 };
    }, [currentValue, contribution, expectedValue, duration]);

    return (
        <div className="space-y-6 pb-32 animate-slide-up px-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <Building className="w-5 h-5 mr-3 text-amber-600" /> 재건축/리모델링 수익분석
                </h3>
                <div className="space-y-5">
                    <NumberInput label="현재 시세 (구축)" value={currentValue} onChange={setCurrentValue} color="orange" />
                    <NumberInput label="추가 분담금" value={contribution} onChange={setContribution} color="orange" />
                    <NumberInput label="완공 후 예상 시세" value={expectedValue} onChange={setExpectedValue} color="orange" />
                    <div>
                        <label className="text-xs font-bold text-slate-500 block mb-1">예상 소요기간 (년)</label>
                        <input type="number" value={duration} onChange={e => setDuration(e.target.value)} className="w-full px-3 py-2 bg-slate-50 rounded-xl text-right font-bold outline-none" />
                    </div>
                </div>
            </div>
            {result ? (
                <div className={`p-6 rounded-[2.5rem] shadow-lg ${result.isPositive ? 'bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100' : 'bg-red-50 border border-red-200'}`}>
                    <div className="text-center mb-4">
                        <p className="text-sm font-bold mb-1">{result.isPositive ? '예상 수익률' : '예상 손실'}</p>
                        <p className={`text-4xl font-black ${result.isPositive ? 'text-amber-700' : 'text-red-600'}`}>{result.roi.toFixed(1)}%</p>
                        <p className="text-sm text-slate-500">연 환산 {result.annualRoi.toFixed(1)}%</p>
                    </div>
                    <div className="bg-white rounded-2xl p-4 space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-slate-500">총 투자금</span><span className="font-bold">{formatCompactNumber(result.totalInvestment)}</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">{result.isPositive ? '예상 수익' : '예상 손실'}</span><span className={`font-bold ${result.isPositive ? 'text-green-600' : 'text-red-600'}`}>{result.isPositive ? '+' : ''}{formatCompactNumber(result.profit)}</span></div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-20 text-slate-300 bg-white rounded-[2rem] border-2 border-dashed border-slate-200">현재 시세와 예상 시세를 입력해주세요</div>
            )}
        </div>
    );
};

// NEW: 갭투자 ROI 분석
const GapInvestmentTab = () => {
    const [purchasePrice, setPurchasePrice] = useState('');
    const [jeonseDeposit, setJeonseDeposit] = useState('');
    const [expectedRise, setExpectedRise] = useState('5');
    const [holdingYears, setHoldingYears] = useState('3');

    const result = useMemo(() => {
        const price = parseNumber(purchasePrice);
        const jeonse = parseNumber(jeonseDeposit);
        const riseRate = parseFloat(expectedRise) / 100 || 0;
        const years = parseInt(holdingYears) || 1;

        if (!price || !jeonse) return null;

        // 전세가가 매매가보다 높으면 갭투자 불가
        if (jeonse >= price) {
            return { error: '전세가가 매매가보다 높습니다', gap: 0 };
        }

        const gap = price - jeonse; // 투자금 (갭)
        const acquisitionTax = Math.floor(price * 0.011); // 취득세 약 1.1%
        const totalInvestment = gap + acquisitionTax;

        // 연간 상승률 기준 시세 상승
        const futurePrice = price * Math.pow(1 + riseRate, years);
        const priceGain = futurePrice - price;

        // 양도차익 (단순 계산)
        const estimatedTax = priceGain > 0 ? Math.floor(priceGain * 0.2) : 0; // 간이 양도세 20%
        const netProfit = priceGain - estimatedTax;

        const roi = totalInvestment > 0 ? (netProfit / totalInvestment) * 100 : 0;
        const annualRoi = years > 0 ? roi / years : 0;

        return { gap, acquisitionTax, totalInvestment, futurePrice, priceGain, estimatedTax, netProfit, roi, annualRoi };
    }, [purchasePrice, jeonseDeposit, expectedRise, holdingYears]);

    return (
        <div className="space-y-6 pb-32 animate-slide-up px-1">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-3 text-cyan-600" /> 갭투자 ROI 분석
                </h3>
                <div className="space-y-5">
                    <NumberInput label="매매가" value={purchasePrice} onChange={setPurchasePrice} color="cyan" />
                    <NumberInput label="전세가 (보증금)" value={jeonseDeposit} onChange={setJeonseDeposit} color="cyan" />
                    <div className="flex gap-3">
                        <div className="flex-1">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2 ml-1">연간 상승률 (%)</label>
                            <input type="number" value={expectedRise} onChange={(e) => setExpectedRise(e.target.value)} className="w-full px-4 py-3 text-right bg-slate-50 rounded-2xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-cyan-500" />
                        </div>
                        <div className="flex-1">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2 ml-1">보유 기간 (년)</label>
                            <input type="number" value={holdingYears} onChange={(e) => setHoldingYears(e.target.value)} className="w-full px-4 py-3 text-right bg-slate-50 rounded-2xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-cyan-500" />
                        </div>
                    </div>
                </div>
            </div>

            {result ? (
                result.error ? (
                    <div className="bg-red-50 p-6 rounded-[2rem] border border-red-200 text-center">
                        <p className="text-lg font-bold text-red-600">⚠️ {result.error}</p>
                        <p className="text-sm text-red-500 mt-2">전세가율이 100%를 초과하면 갭투자가 불가능합니다.</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-[2rem] border border-cyan-100 shadow-lg">
                            <div className="text-center mb-4">
                                <p className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-1">예상 수익률 (ROI)</p>
                                <p className="text-5xl font-black text-cyan-800">{result.roi.toFixed(1)}%</p>
                                <p className="text-sm text-cyan-600">연 환산 {result.annualRoi.toFixed(1)}%</p>
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-slate-500">투자금 (갭)</span>
                                <span className="font-bold">{formatCompactNumber(result.gap)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">취득세</span>
                                <span className="font-bold">{formatCompactNumber(result.acquisitionTax)}</span>
                            </div>
                            <div className="h-px bg-slate-100"></div>
                            <div className="flex justify-between font-bold">
                                <span>총 투자금</span>
                                <span className="text-cyan-600">{formatCompactNumber(result.totalInvestment)}</span>
                            </div>
                            <div className="h-px bg-slate-100"></div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">{holdingYears}년 후 예상 시세</span>
                                <span className="font-bold">{formatCompactNumber(result.futurePrice)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">시세 차익</span>
                                <span className="font-bold text-green-600">+{formatCompactNumber(result.priceGain)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">예상 양도세</span>
                                <span className="font-bold text-red-500">-{formatCompactNumber(result.estimatedTax)}</span>
                            </div>
                            <div className="h-px bg-slate-100"></div>
                            <div className="flex justify-between font-bold text-lg">
                                <span>순수익</span>
                                <span className="text-cyan-600">{formatCompactNumber(result.netProfit)}</span>
                            </div>
                        </div>
                        <p className="text-xs text-center text-slate-400">* 단순 시뮬레이션이며 실제 수익과 다를 수 있습니다</p>
                    </div>
                )
            ) : (
                <div className="text-center py-20 text-slate-300 bg-white rounded-[2rem] border-2 border-dashed border-slate-200">매매가와 전세가를 입력해주세요</div>
            )}
        </div>
    );
};

// 12. Rent Increase Calculator (월세 인상률 계산기)
const RentIncreaseCalc = () => {
    const [currentRent, setCurrentRent] = useState('');
    const [currentDeposit, setCurrentDeposit] = useState('');
    const [increaseRate, setIncreaseRate] = useState('5');

    const result = useMemo(() => {
        const rent = parseNumber(currentRent);
        const deposit = parseNumber(currentDeposit);
        const rate = parseFloat(increaseRate) / 100 || 0.05;

        if (!rent && !deposit) return null;

        const maxRentIncrease = Math.floor(rent * rate);
        const maxDepositIncrease = Math.floor(deposit * rate);
        const newMaxRent = rent + maxRentIncrease;
        const newMaxDeposit = deposit + maxDepositIncrease;

        // 전환 옵션 계산 (전환율 6%)
        const conversionRate = 0.06;
        const rentToDeposit = Math.floor((maxRentIncrease * 12) / conversionRate);
        const depositToRent = Math.floor((maxDepositIncrease * conversionRate) / 12);

        return { maxRentIncrease, maxDepositIncrease, newMaxRent, newMaxDeposit, rentToDeposit, depositToRent };
    }, [currentRent, currentDeposit, increaseRate]);

    return (
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 mt-2">
            <h4 className="text-sm font-bold text-slate-800 mb-4 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-green-600" /> 월세 인상률 계산 (5% 상한)
            </h4>
            <div className="space-y-4">
                <NumberInput label="현재 월세" value={currentRent} onChange={setCurrentRent} color="green" />
                <NumberInput label="현재 보증금" value={currentDeposit} onChange={setCurrentDeposit} color="green" />

                <div>
                    <label className="text-xs font-bold text-slate-500 ml-1 block mb-2">인상률 (%)</label>
                    <input type="number" value={increaseRate} onChange={(e) => setIncreaseRate(e.target.value)} max="5" className="w-full px-4 py-3 text-right bg-slate-50 rounded-xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-green-500" />
                </div>

                {result && (
                    <div className="mt-4 p-4 bg-green-50 rounded-2xl space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600">인상 후 최대 월세</span>
                            <span className="font-bold text-green-700">{formatNumber(result.newMaxRent)}원</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600">인상 후 최대 보증금</span>
                            <span className="font-bold text-green-700">{formatNumber(result.newMaxDeposit)}원</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-2">* 주택임대차보호법 기준 5% 상한</p>
                    </div>
                )}
            </div>
        </div>
    );
};

// 13. Registration Fee Calculator (등기비용 계산기)
const RegistrationFeeCalc = () => {
    const [salePrice, setSalePrice] = useState('');
    const [loanAmount, setLoanAmount] = useState('');

    const result = useMemo(() => {
        const price = parseNumber(salePrice);
        const loan = parseNumber(loanAmount);

        if (!price) return null;

        // 등록면허세 (소유권이전: 2%)
        const registrationTax = Math.floor(price * 0.02);

        // 지방교육세 (등록면허세의 20%)
        const localEduTax = Math.floor(registrationTax * 0.2);

        // 대법원 수입증지 (일반 15,000원)
        const courtStamp = 15000;

        // 법무사 수수료 (약 30~50만원 추정)
        const lawyerFee = 400000;

        // 채권설정비용 (대출이 있는 경우)
        let mortgageFee = 0;
        if (loan > 0) {
            // 채권최고액 설정 (보통 대출금의 120%)
            const maxLoan = loan * 1.2;
            mortgageFee = Math.floor(maxLoan * 0.002); // 설정비 0.2%
        }

        const total = registrationTax + localEduTax + courtStamp + lawyerFee + mortgageFee;

        return { registrationTax, localEduTax, courtStamp, lawyerFee, mortgageFee, total };
    }, [salePrice, loanAmount]);

    return (
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 mt-2">
            <h4 className="text-sm font-bold text-slate-800 mb-4 flex items-center">
                <ClipboardList className="w-4 h-4 mr-2 text-indigo-600" /> 등기비용 계산기
            </h4>
            <div className="space-y-4">
                <NumberInput label="매매가격" value={salePrice} onChange={setSalePrice} color="violet" />
                <NumberInput label="대출금액 (선택)" value={loanAmount} onChange={setLoanAmount} color="violet" />

                {result && (
                    <div className="mt-4 p-4 bg-indigo-50 rounded-2xl space-y-2 text-sm">
                        <div className="flex justify-between text-slate-600">
                            <span>등록면허세</span>
                            <span>{formatNumber(result.registrationTax)}원</span>
                        </div>
                        <div className="flex justify-between text-slate-600">
                            <span>지방교육세</span>
                            <span>{formatNumber(result.localEduTax)}원</span>
                        </div>
                        <div className="flex justify-between text-slate-600">
                            <span>대법원 수입증지</span>
                            <span>{formatNumber(result.courtStamp)}원</span>
                        </div>
                        <div className="flex justify-between text-slate-600">
                            <span>법무사 수수료 (추정)</span>
                            <span>약 {formatNumber(result.lawyerFee)}원</span>
                        </div>
                        {result.mortgageFee > 0 && (
                            <div className="flex justify-between text-slate-600">
                                <span>근저당 설정비</span>
                                <span>{formatNumber(result.mortgageFee)}원</span>
                            </div>
                        )}
                        <div className="h-px bg-indigo-200 my-2"></div>
                        <div className="flex justify-between font-bold text-indigo-800">
                            <span>총 등기비용</span>
                            <span>약 {formatNumber(result.total)}원</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// 5. Tools Tab & Components
const UnitConverter = () => {
    const [pyung, setPyung] = useState('');
    const [sqm, setSqm] = useState('');
    const sqmId = useId();
    const pyungId = useId();

    const handleSqmChange = (val) => {
        setSqm(val);
        if (val) setPyung((parseFloat(val) / 3.3058).toFixed(2));
        else setPyung('');
    };

    const handlePyungChange = (val) => {
        setPyung(val);
        if (val) setSqm((parseFloat(val) * 3.3058).toFixed(2));
        else setSqm('');
    };

    return (
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 mt-2">
            <div className="flex items-center gap-6 relative">
                <div className="flex-1 text-center group">
                    <input
                        id={sqmId}
                        type="number"
                        value={sqm}
                        onChange={e => handleSqmChange(e.target.value)}
                        className="w-full py-6 bg-slate-50 rounded-3xl text-center font-black text-3xl outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 transition-all group-hover:bg-indigo-50 group-hover:text-indigo-600"
                        placeholder="0"
                    />
                    <label htmlFor={sqmId} className="text-xs font-bold text-slate-400 mt-3 block uppercase tracking-widest">제곱미터 (㎡)</label>
                </div>
                <div className="bg-slate-100 p-3 rounded-full text-slate-400">
                    <ArrowRightLeft size={20} />
                </div>
                <div className="flex-1 text-center group">
                    <input
                        id={pyungId}
                        type="number"
                        value={pyung}
                        onChange={e => handlePyungChange(e.target.value)}
                        className="w-full py-6 bg-slate-50 rounded-3xl text-center font-black text-3xl outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 transition-all group-hover:bg-indigo-50 group-hover:text-indigo-600"
                        placeholder="0"
                    />
                    <label htmlFor={pyungId} className="text-xs font-bold text-slate-400 mt-3 block uppercase tracking-widest">평 (py)</label>
                </div>
            </div>
        </div>
    );
}

const MessageWizard = () => {
    const [msgType, setMsgType] = useState('repair');
    const [copied, setCopied] = useState(false);

    const templates = {
        repair: `안녕하세요, 임대인님.\n[000호] 임차인입니다.\n\n다름이 아니라 집에 수리가 필요한 곳이 생겨 연락드립니다.\n\n- 증상: \n- 사진 첨부: (사진)\n- 방문 가능 시간: \n\n많이 바쁘시겠지만 확인 후 답변 부탁드립니다.\n감사합니다.`,
        end: `안녕하세요, 임대인님.\n[000호] 임차인입니다.\n\n계약 만료일(202X.XX.XX)에 맞춰 이사를 계획하고 있어 미리 연락드립니다.\n\n보증금 반환 일정 논의가 필요할 것 같습니다.\n편하실 때 연락 부탁드립니다.`,
        extend: `안녕하세요, 임대인님.\n[000호] 임차인입니다.\n\n계약 만료가 다가오는데, 혹시 연장하여 더 거주할 수 있을지 여쭈어보고자 연락드립니다.\n\n조건 변동사항이 있다면 말씀 부탁드립니다.\n감사합니다.`
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(templates[msgType]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 mt-2">
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2 no-scrollbar">
                {[{ id: 'repair', label: '🛠 수리 요청' }, { id: 'end', label: '👋 퇴거 통보' }, { id: 'extend', label: '🤝 연장 요청' }].map(t => (
                    <button
                        key={t.id}
                        onClick={() => setMsgType(t.id)}
                        className={`px-4 py-2.5 rounded-full whitespace-nowrap text-xs font-bold transition-all border ${msgType === t.id ? 'bg-pink-50 text-pink-600 border-pink-200 shadow-sm' : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'}`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            <div className="relative group">
                <textarea
                    className="w-full h-56 p-6 bg-slate-50 rounded-3xl border-0 text-sm leading-7 resize-none focus:ring-2 focus:ring-pink-500 outline-none text-slate-700 font-medium transition-all group-hover:bg-white group-hover:shadow-inner"
                    value={templates[msgType]}
                    readOnly
                ></textarea>
                <button
                    onClick={copyToClipboard}
                    className={`absolute bottom-5 right-5 px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-lg ${copied ? 'bg-green-500 text-white transform scale-105' : 'bg-slate-900 hover:bg-black text-white'}`}
                >
                    {copied ? <CheckCircle size={14} /> : <Copy size={14} />} {copied ? '복사 완료' : '텍스트 복사'}
                </button>
            </div>
        </div>
    );
}

const MovingChecklist = () => {
    const [checked, setChecked] = useState(() => {
        try {
            const saved = localStorage.getItem('checklist');
            return saved ? JSON.parse(saved) : {};
        } catch (e) {
            console.warn('Failed to parse checklist:', e);
            return {};
        }
    });

    useEffect(() => {
        localStorage.setItem('checklist', JSON.stringify(checked));
    }, [checked]);

    const toggle = (id) => {
        setChecked(prev => ({ ...prev, [id]: !prev[id] }));
    }

    const sections = [
        { title: 'D-30 (한 달 전)', items: ['집 내놓기 / 만기 통보', '이사업체 알아보기', '가구/가전 배치 구상'] },
        { title: 'D-14 (2주 전)', items: ['주소 변경 (우편물)', '폐기물 스티커 구매', '입주 청소 예약', '엘리베이터 예약'] },
        { title: 'D-1 (전날)', items: ['귀중품 별도 보관', '세탁기 물 빼기', '쓰레기 봉투 준비', '현금 준비 (잔금용)'] },
        { title: 'D-Day (이사 당일)', items: ['공과금 정산 (수도/전기)', '부동산 잔금 치르기', '전입 신고 / 확정 일자', '인터넷 이전 설치'] }
    ];

    return (
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 mt-2">
            <div className="space-y-8">
                {sections.map((section, sIdx) => (
                    <div key={sIdx}>
                        <h4 className="text-xs font-bold text-amber-600 bg-amber-50 inline-block px-3 py-1 rounded-lg mb-3">{section.title}</h4>
                        <div className="space-y-2">
                            {section.items.map((item, iIdx) => {
                                const id = `${sIdx}-${iIdx}`;
                                const isChecked = checked[id];
                                return (
                                    <div
                                        key={id}
                                        onClick={() => toggle(id)}
                                        className={`flex items-center p-3.5 rounded-xl cursor-pointer transition-all group ${isChecked ? 'bg-slate-50 text-slate-400' : 'bg-white border border-slate-100 hover:border-amber-200 hover:shadow-sm'}`}
                                    >
                                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center mr-3 transition-colors ${isChecked ? 'bg-amber-400 border-amber-400' : 'border-slate-300 group-hover:border-amber-400'}`}>
                                            {isChecked && <CheckSquare size={14} className="text-white" />}
                                        </div>
                                        <span className={`text-sm font-medium ${isChecked ? 'line-through decoration-slate-300' : 'text-slate-700'}`}>{item}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const Dictionary = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const terms = [
        { t: '대항력', d: '집주인이 바뀌어도 계속 살 수 있고, 보증금을 돌려받을 때까지 나가지 않아도 되는 권리.' },
        { t: '우선변제권', d: '집이 경매로 넘어갔을 때, 후순위 권리자보다 먼저 돈을 받을 수 있는 권리. (확정일자 필수)' },
        { t: '근저당권', d: '집주인이 집을 담보로 빚을 졌다는 뜻. 등기부등본의 채권최고액 확인이 중요함.' },
        { t: '확정일자', d: '계약서가 존재함을 증명하는 법적 날짜. 주민센터나 등기소에서 받음.' },
        { t: '전세보증보험', d: '전세금을 못 돌려받을 때 보증 기관(HUG 등)이 대신 갚아주는 상품.' },
        { t: '임차권등기', d: '이사를 가더라도 대항력과 우선변제권을 유지하기 위해 등기부에 기록하는 것.' }
    ];

    const filtered = terms.filter(item => item.t.includes(searchTerm));

    return (
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 mt-2 h-[500px] flex flex-col">
            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder="궁금한 용어 검색..."
                    className="w-full pl-11 pr-4 py-4 bg-slate-50 rounded-2xl border-0 outline-none focus:ring-2 focus:ring-cyan-400 text-sm font-bold text-slate-800 transition-all focus:bg-white"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            </div>

            <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-1">
                {filtered.length > 0 ? filtered.map((item, idx) => (
                    <div key={idx} className="bg-cyan-50/30 p-5 rounded-2xl border border-cyan-100/50 hover:bg-cyan-50/80 transition-colors">
                        <h4 className="font-bold text-cyan-900 mb-1.5">{item.t}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.d}</p>
                    </div>
                )) : (
                    <div className="text-center py-10 text-slate-400 text-sm font-medium">검색 결과가 없습니다.</div>
                )}
            </div>
        </div>
    )
}

// 전월세전환율 계산기
const ConversionCalculator = () => {
    const [mode, setMode] = useState('toMonthly'); // toMonthly or toDeposit
    const [deposit, setDeposit] = useState('');
    const [monthly, setMonthly] = useState('');
    const [rate, setRate] = useState('5.0');

    const result = useMemo(() => {
        const rateVal = parseFloat(rate) || 0;
        if (mode === 'toMonthly') {
            const depVal = parseNumber(deposit);
            return calculateConversion(depVal, rateVal);
        } else {
            const monVal = parseNumber(monthly);
            return calculateDepositFromMonthly(monVal, rateVal);
        }
    }, [mode, deposit, monthly, rate]);

    return (
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 mt-2">
            <div className="flex gap-2 mb-6">
                <button
                    onClick={() => setMode('toMonthly')}
                    className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${mode === 'toMonthly' ? 'bg-violet-500 text-white shadow-lg' : 'bg-slate-100 text-slate-500'}`}
                >
                    보증금 → 월세
                </button>
                <button
                    onClick={() => setMode('toDeposit')}
                    className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${mode === 'toDeposit' ? 'bg-violet-500 text-white shadow-lg' : 'bg-slate-100 text-slate-500'}`}
                >
                    월세 → 보증금
                </button>
            </div>

            <div className="space-y-4">
                {mode === 'toMonthly' ? (
                    <NumberInput label="전환할 보증금" value={deposit} onChange={setDeposit} color="violet" />
                ) : (
                    <NumberInput label="전환할 월세" value={monthly} onChange={setMonthly} color="violet" />
                )}

                <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block ml-1">전환율 (%)</label>
                    <input
                        type="number"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        className="w-full px-5 py-4 text-right bg-slate-50 border-0 rounded-2xl outline-none focus:ring-2 focus:ring-violet-500 font-bold text-slate-700 text-lg"
                    />
                    <p className="text-xs text-slate-400 mt-2 ml-1">* 법정 전환율 상한: 기준금리({BOK_RATE_DEFAULT}%) + 3.5% = {(BOK_RATE_DEFAULT + 3.5).toFixed(1)}%</p>
                </div>
            </div>

            <div className="mt-6 p-6 bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl">
                <p className="text-sm font-medium text-violet-600 mb-2">
                    {mode === 'toMonthly' ? '전환 시 월세 금액' : '전환 시 보증금 금액'}
                </p>
                <p className="text-3xl font-black text-violet-900">
                    {formatNumber(result)} <span className="text-lg font-bold">원</span>
                </p>
                {mode === 'toMonthly' && result > 0 && (
                    <p className="text-xs text-slate-500 mt-2">
                        연간 {formatNumber(result * 12)}원 추가 지출
                    </p>
                )}
            </div>
        </div>
    );
};

// 보증보험료 계산기
const InsuranceCalculator = () => {
    const [deposit, setDeposit] = useState('');
    const [years, setYears] = useState('2');
    const [insuranceType, setInsuranceType] = useState('hug');

    const result = useMemo(() => {
        const depVal = parseNumber(deposit);
        const yearsVal = parseInt(years) || 1;

        // 보험료율 (실제는 보증금, 지역, 주택 유형에 따라 다름)
        const rates = {
            hug: 0.00128,      // HUG 전세보증보험 평균 0.128%
            sgi: 0.00115,      // SGI서울보증 평균 0.115%
            rental: 0.0005    // 임차권등기 비용 약 0.05%
        };

        const rate = rates[insuranceType] || rates.hug;
        const fee = Math.floor(depVal * rate * yearsVal);
        const monthlyFee = Math.floor(fee / (yearsVal * 12));

        return { fee, monthlyFee, rate: rate * 100 };
    }, [deposit, years, insuranceType]);

    return (
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 mt-2">
            <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar">
                {[
                    { id: 'hug', label: 'HUG 전세보증' },
                    { id: 'sgi', label: 'SGI 전세보증' },
                    { id: 'rental', label: '임차권등기' }
                ].map(t => (
                    <button
                        key={t.id}
                        onClick={() => setInsuranceType(t.id)}
                        className={`flex-1 py-3 px-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${insuranceType === t.id ? 'bg-emerald-500 text-white shadow-lg' : 'bg-slate-100 text-slate-500'}`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            <div className="space-y-4">
                <NumberInput label="전세 보증금" value={deposit} onChange={setDeposit} color="green" enableUnitToggle={true} />

                <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block ml-1">계약 기간 (년)</label>
                    <div className="flex gap-2">
                        {OPTIONS_YEARS.map(y => (
                            <button
                                key={y}
                                onClick={() => setYears(y)}
                                className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${years === y ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-500'}`}
                            >
                                {y}년
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-6 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-emerald-600">예상 보험료 (요율 {result.rate.toFixed(3)}%)</span>
                    <span className="text-2xl font-black text-emerald-900">{formatNumber(result.fee)}원</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">월 환산</span>
                    <span className="font-bold text-slate-700">약 {formatNumber(result.monthlyFee)}원/월</span>
                </div>
                <p className="text-xs text-slate-400 mt-4">
                    * 실제 보험료는 주택 유형, 지역, 보증금 구간에 따라 상이할 수 있습니다.
                </p>
            </div>
        </div>
    );
};

// 계산 히스토리
const HistoryPanel = () => {
    const [history, setHistory] = useState(() => getHistory());

    const handleClear = () => {
        clearHistory();
        setHistory([]);
    };

    const typeLabels = {
        'costCompare': '전월세 비교',
        'safety': '안전진단',
        'fee': '중개보수',
        'loan': '대출계산',
        'tax': '취득세',
        'dsr': 'DSR계산',
        'ltv': 'LTV계산'
    };

    return (
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 mt-2">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                    <History size={18} /> 최근 계산 기록
                </h3>
                {history.length > 0 && (
                    <button
                        onClick={handleClear}
                        className="text-xs text-red-500 hover:text-red-600 font-bold flex items-center gap-1"
                    >
                        <Trash2 size={14} /> 전체 삭제
                    </button>
                )}
            </div>

            {history.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                    <History size={40} className="mx-auto mb-3 opacity-30" />
                    <p className="text-sm font-medium">계산 기록이 없습니다</p>
                    <p className="text-xs mt-1">계산 결과가 자동으로 저장됩니다</p>
                </div>
            ) : (
                <div className="space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar">
                    {history.map((item, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 rounded-xl">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                                    {typeLabels[item.type] || item.type}
                                </span>
                                <span className="text-xs text-slate-400">{formatDate(item.timestamp)}</span>
                            </div>
                            <p className="text-sm font-medium text-slate-700">
                                {item.data.summary || JSON.stringify(item.data).slice(0, 50)}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

// NEW: 이사비용 계산기
const MovingCostCalculator = () => {
    const [fromFloor, setFromFloor] = useState('5');
    const [toFloor, setToFloor] = useState('10');
    const [distance, setDistance] = useState('10');
    const [size, setSize] = useState('2');

    const result = useMemo(() => {
        const from = parseInt(fromFloor) || 1;
        const to = parseInt(toFloor) || 1;
        const dist = parseInt(distance) || 0;
        const sizeNum = parseInt(size) || 1;

        const baseCost = { 1: 250000, 2: 350000, 3: 450000, 4: 600000 };
        const base = baseCost[sizeNum] || 350000;
        const floorCharge = (Math.max(from - 1, 0) + Math.max(to - 1, 0)) * 10000;
        const distCharge = dist > 10 ? (dist - 10) * 5000 : 0;
        const ladderCharge = (from > 5 || to > 5) ? 100000 : 0;

        const minCost = base + floorCharge + distCharge;
        const maxCost = minCost + ladderCharge + 150000;

        return { minCost, maxCost, ladderCharge };
    }, [fromFloor, toFloor, distance, size]);

    return (
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 mt-2">
            <h4 className="text-sm font-bold text-slate-800 mb-4 flex items-center">🚚 이사비용 계산기</h4>
            <div className="space-y-4">
                <div className="flex gap-3">
                    <div className="flex-1">
                        <label className="text-xs font-bold text-slate-500 block mb-1">출발층</label>
                        <input type="number" value={fromFloor} onChange={e => setFromFloor(e.target.value)} className="w-full px-3 py-2 bg-slate-50 rounded-xl text-right font-bold outline-none" />
                    </div>
                    <div className="flex-1">
                        <label className="text-xs font-bold text-slate-500 block mb-1">도착층</label>
                        <input type="number" value={toFloor} onChange={e => setToFloor(e.target.value)} className="w-full px-3 py-2 bg-slate-50 rounded-xl text-right font-bold outline-none" />
                    </div>
                </div>
                <div>
                    <label className="text-xs font-bold text-slate-500 block mb-1">이동거리 (km)</label>
                    <input type="number" value={distance} onChange={e => setDistance(e.target.value)} className="w-full px-3 py-2 bg-slate-50 rounded-xl text-right font-bold outline-none" />
                </div>
                <div>
                    <label className="text-xs font-bold text-slate-500 block mb-2">짐 규모</label>
                    <div className="flex gap-2">
                        {['1', '2', '3', '4'].map(s => (
                            <button key={s} onClick={() => setSize(s)} className={`flex-1 py-2 rounded-xl text-xs font-bold ${size === s ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-500'}`}>{s}룸</button>
                        ))}
                    </div>
                </div>
                <div className="p-4 bg-orange-50 rounded-2xl">
                    <p className="text-sm text-orange-600 mb-1">예상 이사비</p>
                    <p className="text-2xl font-black text-orange-800">{formatNumber(result.minCost)} ~ {formatNumber(result.maxCost)}원</p>
                    {result.ladderCharge > 0 && <p className="text-xs text-orange-500 mt-1">* 사다리차 비용 포함</p>}
                </div>
            </div>
        </div>
    );
};

// NEW: 인테리어 비용 계산기
const InteriorCostCalculator = () => {
    const [pyung, setPyung] = useState('25');
    const [scope, setScope] = useState('full');

    const result = useMemo(() => {
        const py = parseInt(pyung) || 0;
        const costs = {
            full: { low: 400, mid: 600, high: 900 },
            kitchen: { low: 150, mid: 250, high: 400 },
            bathroom: { low: 100, mid: 180, high: 300 },
            living: { low: 80, mid: 120, high: 200 }
        };
        const c = costs[scope] || costs.full;
        return {
            low: py * c.low * 10000,
            mid: py * c.mid * 10000,
            high: py * c.high * 10000
        };
    }, [pyung, scope]);

    return (
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 mt-2">
            <h4 className="text-sm font-bold text-slate-800 mb-4 flex items-center">🔨 인테리어 비용 계산기</h4>
            <div className="space-y-4">
                <div>
                    <label className="text-xs font-bold text-slate-500 block mb-1">평수</label>
                    <input type="number" value={pyung} onChange={e => setPyung(e.target.value)} className="w-full px-3 py-2 bg-slate-50 rounded-xl text-right font-bold outline-none" />
                </div>
                <div>
                    <label className="text-xs font-bold text-slate-500 block mb-2">시공 범위</label>
                    <div className="grid grid-cols-2 gap-2">
                        {[{ id: 'full', l: '전체리모델링' }, { id: 'kitchen', l: '주방' }, { id: 'bathroom', l: '욕실' }, { id: 'living', l: '거실/방' }].map(s => (
                            <button key={s.id} onClick={() => setScope(s.id)} className={`py-2 rounded-xl text-xs font-bold ${scope === s.id ? 'bg-pink-500 text-white' : 'bg-slate-100 text-slate-500'}`}>{s.l}</button>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    <div className="p-3 bg-slate-100 rounded-xl text-center">
                        <p className="text-[10px] text-slate-500 mb-1">저가</p>
                        <p className="font-black text-slate-700">{formatCompactNumber(result.low)}</p>
                    </div>
                    <div className="p-3 bg-pink-50 rounded-xl text-center">
                        <p className="text-[10px] text-pink-500 mb-1">중간</p>
                        <p className="font-black text-pink-700">{formatCompactNumber(result.mid)}</p>
                    </div>
                    <div className="p-3 bg-slate-100 rounded-xl text-center">
                        <p className="text-[10px] text-slate-500 mb-1">고급</p>
                        <p className="font-black text-slate-700">{formatCompactNumber(result.high)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// NEW: 관리비 분석기
const MaintenanceFeeAnalyzer = () => {
    const [fee, setFee] = useState('');
    const [area, setArea] = useState('');

    const result = useMemo(() => {
        const f = parseNumber(fee);
        const a = parseFloat(area) || 0;
        if (!f || !a) return null;
        const pyung = a / 3.3058;
        const perPyung = Math.round(f / pyung);
        let status = '적정', color = 'emerald';
        if (perPyung > 15000) { status = '높음'; color = 'red'; }
        else if (perPyung > 10000) { status = '보통'; color = 'orange'; }
        return { perPyung, status, color, pyung: pyung.toFixed(1) };
    }, [fee, area]);

    return (
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 mt-2">
            <h4 className="text-sm font-bold text-slate-800 mb-4">📊 관리비 분석기</h4>
            <div className="space-y-4">
                <NumberInput label="월 관리비" value={fee} onChange={setFee} color="green" />
                <div>
                    <label className="text-xs font-bold text-slate-500 block mb-1">전용면적 (㎡)</label>
                    <input type="number" value={area} onChange={e => setArea(e.target.value)} className="w-full px-3 py-2 bg-slate-50 rounded-xl text-right font-bold outline-none" />
                </div>
                {result && (
                    <div className={`p-4 bg-${result.color}-50${result.color}-900/30 rounded-2xl`}>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">평당 관리비</span>
                            <span className="text-xl font-black">{formatNumber(result.perPyung)}원</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">약 {result.pyung}평 기준 | 수준: <span className="font-bold">{result.status}</span></p>
                    </div>
                )}
            </div>
        </div>
    );
};

// NEW: 대출 조기상환 분석
const EarlyRepaymentAnalyzer = () => {
    const [balance, setBalance] = useState('');
    const [rate, setRate] = useState('4.5');
    const [remaining, setRemaining] = useState('120');
    const [repayAmount, setRepayAmount] = useState('');
    const [feeRate, setFeeRate] = useState('1.2');

    const result = useMemo(() => {
        const bal = parseNumber(balance);
        const rep = parseNumber(repayAmount);
        const r = parseFloat(rate) / 100;
        const months = parseInt(remaining) || 0;
        const fr = parseFloat(feeRate) / 100;
        if (!bal || !rep) return null;

        const fee = Math.floor(rep * fr);
        const savedInterest = Math.floor(rep * r * (months / 12));
        const netBenefit = savedInterest - fee;

        return { fee, savedInterest, netBenefit, isWorth: netBenefit > 0 };
    }, [balance, rate, remaining, repayAmount, feeRate]);

    return (
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 mt-2">
            <h4 className="text-sm font-bold text-slate-800 mb-4">💰 조기상환 분석</h4>
            <div className="space-y-4">
                <NumberInput label="대출 잔액" value={balance} onChange={setBalance} color="violet" />
                <NumberInput label="조기상환 금액" value={repayAmount} onChange={setRepayAmount} color="violet" />
                <div className="flex gap-3">
                    <div className="flex-1">
                        <label className="text-xs font-bold text-slate-500 block mb-1">금리(%)</label>
                        <input type="number" value={rate} onChange={e => setRate(e.target.value)} className="w-full px-3 py-2 bg-slate-50 rounded-xl text-right font-bold outline-none" />
                    </div>
                    <div className="flex-1">
                        <label className="text-xs font-bold text-slate-500 block mb-1">남은기간(월)</label>
                        <input type="number" value={remaining} onChange={e => setRemaining(e.target.value)} className="w-full px-3 py-2 bg-slate-50 rounded-xl text-right font-bold outline-none" />
                    </div>
                    <div className="flex-1">
                        <label className="text-xs font-bold text-slate-500 block mb-1">수수료(%)</label>
                        <input type="number" value={feeRate} onChange={e => setFeeRate(e.target.value)} className="w-full px-3 py-2 bg-slate-50 rounded-xl text-right font-bold outline-none" />
                    </div>
                </div>
                {result && (
                    <div className={`p-4 rounded-2xl ${result.isWorth ? 'bg-green-50' : 'bg-red-50'}`}>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between"><span>조기상환 수수료</span><span className="font-bold text-red-600">-{formatNumber(result.fee)}원</span></div>
                            <div className="flex justify-between"><span>절감 이자</span><span className="font-bold text-green-600">+{formatNumber(result.savedInterest)}원</span></div>
                            <div className="h-px bg-slate-200"></div>
                            <div className="flex justify-between font-bold text-lg">
                                <span>순이익</span>
                                <span className={result.isWorth ? 'text-green-600' : 'text-red-600'}>{result.netBenefit > 0 ? '+' : ''}{formatNumber(result.netBenefit)}원</span>
                            </div>
                        </div>
                        <p className="text-xs mt-3 text-center font-bold">{result.isWorth ? '✅ 조기상환 유리' : '❌ 조기상환 불리'}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

// NEW: 계약 관리 대시보드 (Phase 3)
const ContractManager = () => {
    const [contracts, setContracts] = useState(() => {
        try { return JSON.parse(localStorage.getItem('contracts') || '[]'); } catch { return []; }
    });
    const [showForm, setShowForm] = useState(false);
    const [newContract, setNewContract] = useState({ name: '', startDate: '', endDate: '', deposit: '', rent: '' });

    useEffect(() => {
        localStorage.setItem('contracts', JSON.stringify(contracts));
    }, [contracts]);

    const addContract = () => {
        if (!newContract.name || !newContract.endDate) return;
        setContracts([...contracts, { ...newContract, id: Date.now() }]);
        setNewContract({ name: '', startDate: '', endDate: '', deposit: '', rent: '' });
        setShowForm(false);
    };

    const deleteContract = (id) => setContracts(contracts.filter(c => c.id !== id));

    const getDDay = (endDate) => {
        const diff = new Date(endDate) - new Date();
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    };

    return (
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 mt-2">
            <div className="flex justify-between items-center mb-4">
                <h4 className="text-sm font-bold text-slate-800">📋 계약 관리</h4>
                <button onClick={() => setShowForm(!showForm)} className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">{showForm ? '닫기' : '+ 추가'}</button>
            </div>
            {showForm && (
                <div className="mb-4 p-4 bg-slate-50 rounded-2xl space-y-3">
                    <input placeholder="계약명 (예: 역삼동 오피스텔)" value={newContract.name} onChange={e => setNewContract({ ...newContract, name: e.target.value })} className="w-full px-3 py-2 bg-white rounded-xl text-sm font-medium outline-none" />
                    <div className="flex gap-2">
                        <input type="date" value={newContract.startDate} onChange={e => setNewContract({ ...newContract, startDate: e.target.value })} className="flex-1 px-3 py-2 bg-white rounded-xl text-sm font-medium outline-none" />
                        <input type="date" value={newContract.endDate} onChange={e => setNewContract({ ...newContract, endDate: e.target.value })} className="flex-1 px-3 py-2 bg-white rounded-xl text-sm font-medium outline-none" />
                    </div>
                    <button onClick={addContract} className="w-full py-2 bg-blue-500 text-white rounded-xl font-bold text-sm">저장</button>
                </div>
            )}
            {contracts.length === 0 ? (
                <div className="text-center py-8 text-slate-400 text-sm">등록된 계약이 없습니다</div>
            ) : (
                <div className="space-y-3">
                    {contracts.map(c => {
                        const dday = getDDay(c.endDate);
                        const isUrgent = dday <= 60 && dday > 0;
                        const isExpired = dday <= 0;
                        return (
                            <div key={c.id} className={`p-4 rounded-xl ${isExpired ? 'bg-red-50' : isUrgent ? 'bg-orange-50' : 'bg-slate-50'}`}>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-bold text-sm">{c.name}</p>
                                        <p className="text-xs text-slate-500">{c.startDate} ~ {c.endDate}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className={`text-lg font-black ${isExpired ? 'text-red-600' : isUrgent ? 'text-orange-600' : 'text-blue-600'}`}>D{dday > 0 ? '-' : '+'}{Math.abs(dday)}</p>
                                        <button onClick={() => deleteContract(c.id)} className="text-xs text-red-400">삭제</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

// NEW: 매물 체크리스트 (Phase 4)
const PropertyChecklistTool = () => {
    const [checked, setChecked] = useState(() => {
        try { return JSON.parse(localStorage.getItem('propertyChecklist') || '{}'); } catch { return {}; }
    });

    useEffect(() => {
        localStorage.setItem('propertyChecklist', JSON.stringify(checked));
    }, [checked]);

    const toggle = (id) => setChecked(prev => ({ ...prev, [id]: !prev[id] }));
    const resetAll = () => setChecked({});

    const categories = [
        { title: '🏠 외부/공용', items: ['엘리베이터 상태', '복도 청결도', '주차장 상태', 'CCTV 설치 여부', '택배함/우편함'] },
        { title: '🚿 수도/배수', items: ['수압 테스트', '온수 작동', '배수구 냄새', '화장실 물 내림', '누수 흔적'] },
        { title: '💡 전기/가스', items: ['콘센트 작동', '전등 점등', '가스렌지 점화', '보일러 작동', '에어컨 설치 가능'] },
        { title: '🪟 창문/환기', items: ['창문 개폐', '방충망 상태', '곰팡이 흔적', '결로 현상', '환기 시설'] },
        { title: '📋 기타', items: ['벽지 상태', '장판/마루 상태', '도어락 상태', '인터폰 작동', '옵션 상태'] }
    ];

    const total = categories.reduce((sum, c) => sum + c.items.length, 0);
    const done = Object.values(checked).filter(Boolean).length;

    return (
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 mt-2 h-[500px] flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h4 className="text-sm font-bold text-slate-800">🔍 매물 체크리스트</h4>
                <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-green-600">{done}/{total}</span>
                    <button onClick={resetAll} className="text-xs text-red-500 font-bold">초기화</button>
                </div>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2 mb-4">
                <div className="bg-green-500 h-2 rounded-full transition-all" style={{ width: `${(done / total) * 100}%` }}></div>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                {categories.map((cat, cIdx) => (
                    <div key={cIdx}>
                        <h5 className="text-xs font-bold text-slate-600 mb-2">{cat.title}</h5>
                        <div className="grid grid-cols-2 gap-2">
                            {cat.items.map((item, iIdx) => {
                                const id = `${cIdx}-${iIdx}`;
                                return (
                                    <button key={id} onClick={() => toggle(id)} className={`py-2 px-3 rounded-lg text-xs font-medium text-left transition-all ${checked[id] ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                                        {checked[id] ? '✓ ' : ''}{item}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// NEW: 세금 캘린더 (Phase 4)
const TaxCalendar = () => {
    const taxEvents = [
        { month: 1, title: '자동차세 1기분', desc: '6월 납부 (1~6월분)' },
        { month: 6, title: '재산세 1기분', desc: '7/16~7/31 납부' },
        { month: 7, title: '재산세 1기분 납부', desc: '산출세액 50%' },
        { month: 9, title: '재산세 2기분 납부', desc: '산출세액 50%' },
        { month: 11, title: '종부세 고지', desc: '12/1~12/15 납부' },
        { month: 12, title: '종부세 납부', desc: '12/1~12/15' }
    ];

    const currentMonth = new Date().getMonth() + 1;

    return (
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 mt-2">
            <h4 className="text-sm font-bold text-slate-800 mb-4">📅 2026년 세금 캘린더</h4>
            <div className="space-y-3">
                {taxEvents.map((event, idx) => {
                    const isPast = event.month < currentMonth;
                    const isCurrent = event.month === currentMonth;
                    return (
                        <div key={idx} className={`p-3 rounded-xl flex items-center gap-3 ${isCurrent ? 'bg-blue-50 border-2 border-blue-200' : isPast ? 'bg-slate-50 opacity-50' : 'bg-slate-50'}`}>
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm ${isCurrent ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-600'}`}>{event.month}월</div>
                            <div>
                                <p className="font-bold text-sm">{event.title}</p>
                                <p className="text-xs text-slate-500">{event.desc}</p>
                            </div>
                            {isCurrent && <span className="ml-auto text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">이번달</span>}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// NEW: 계약갱신청구권 카운터 (Phase 3)
const RenewalRightTracker = () => {
    const [firstContractDate, setFirstContractDate] = useState('');
    const [usedRenewal, setUsedRenewal] = useState(false);

    const result = useMemo(() => {
        if (!firstContractDate) return null;

        const firstDate = new Date(firstContractDate);
        const today = new Date();

        // 최초 계약일로부터 경과 기간
        const diffMs = today - firstDate;
        const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365);

        // 갱신권 사용 가능 여부 (최초 계약 후 2년~4년 사이)
        const canUseRenewal = diffYears >= 2 && diffYears < 4 && !usedRenewal;
        const remainingRights = usedRenewal ? 0 : 1;

        // 다음 갱신 가능일 (최초 계약일 + 2년)
        const renewalDate = new Date(firstDate);
        renewalDate.setFullYear(renewalDate.getFullYear() + 2);

        // 계약 만료 예정일 (갱신권 사용 시 +4년, 미사용 시 +2년)
        const expiryDate = new Date(firstDate);
        expiryDate.setFullYear(expiryDate.getFullYear() + (usedRenewal ? 4 : 2));

        const daysUntilRenewal = Math.ceil((renewalDate - today) / (1000 * 60 * 60 * 24));
        const daysUntilExpiry = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));

        return { canUseRenewal, remainingRights, renewalDate, expiryDate, daysUntilRenewal, daysUntilExpiry, diffYears };
    }, [firstContractDate, usedRenewal]);

    const formatDate = (date) => date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 card-depth mt-2">
            <h4 className="text-sm font-bold text-slate-800 mb-4 flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-blue-600" /> 계약갱신청구권 카운터
            </h4>
            <div className="space-y-4">
                <div>
                    <label className="text-xs font-bold text-slate-500 block mb-1">최초 계약일</label>
                    <input
                        type="date"
                        value={firstContractDate}
                        onChange={e => setFirstContractDate(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl font-medium outline-none input-unified"
                    />
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                    <span className="text-sm font-medium">갱신권 사용 여부</span>
                    <button
                        onClick={() => setUsedRenewal(!usedRenewal)}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${usedRenewal ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}
                    >
                        {usedRenewal ? '사용함' : '미사용'}
                    </button>
                </div>
            </div>
            {result && (
                <div className="mt-4 space-y-3">
                    <div className={`p-4 rounded-xl text-center ${result.canUseRenewal ? 'bg-green-50' : 'bg-slate-100'}`}>
                        <p className="text-xs font-bold text-slate-500 mb-1">남은 갱신권</p>
                        <p className={`text-3xl font-black ${result.remainingRights > 0 ? 'text-green-600' : 'text-slate-400'}`}>
                            {result.remainingRights}회
                        </p>
                        <p className="text-xs mt-1 text-slate-500">
                            {result.canUseRenewal ? '✓ 갱신권 사용 가능' : result.usedRenewal ? '이미 사용함' : '아직 갱신 시기 아님'}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="p-3 bg-blue-50 rounded-xl">
                            <p className="text-xs font-bold text-blue-500">갱신 가능일</p>
                            <p className="text-sm font-bold mt-1">{formatDate(result.renewalDate)}</p>
                            {result.daysUntilRenewal > 0 && <p className="text-xs text-slate-500">D-{result.daysUntilRenewal}</p>}
                        </div>
                        <div className="p-3 bg-orange-50 rounded-xl">
                            <p className="text-xs font-bold text-orange-500">계약 만료일</p>
                            <p className="text-sm font-bold mt-1">{formatDate(result.expiryDate)}</p>
                            <p className="text-xs text-slate-500">D{result.daysUntilExpiry > 0 ? '-' : '+'}{Math.abs(result.daysUntilExpiry)}</p>
                        </div>
                    </div>
                    <p className="text-xs text-center text-slate-400 mt-2">
                        💡 갱신청구권은 2020년 7월 31일 이후 체결 계약에 적용됩니다
                    </p>
                </div>
            )}
        </div>
    );
};

// NEW: 임대료 증액 한도 계산기 (Phase 3)
const RentCapCalculator = () => {
    const [currentDeposit, setCurrentDeposit] = useState('');
    const [currentRent, setCurrentRent] = useState('');
    const [conversionRate, setConversionRate] = useState('2.5');

    const result = useMemo(() => {
        const deposit = parseNumber(currentDeposit);
        const rent = parseNumber(currentRent);
        const rate = parseFloat(conversionRate) / 100 || 0.025;

        if (!deposit && !rent) return null;

        // 월세 환산액 (보증금을 월세로 환산)
        const depositAsRent = (deposit * rate) / 12;
        const totalRentEquivalent = rent + depositAsRent;

        // 5% 상한
        const maxIncrease = totalRentEquivalent * 0.05;
        const maxNewTotal = totalRentEquivalent * 1.05;

        // 새 월세 최대치
        const maxNewRent = rent * 1.05;
        const maxNewDeposit = deposit * 1.05;

        return {
            depositAsRent,
            totalRentEquivalent,
            maxIncrease,
            maxNewTotal,
            maxNewRent: Math.floor(maxNewRent),
            maxNewDeposit: Math.floor(maxNewDeposit),
            increasedRent: Math.floor(rent * 0.05),
            increasedDeposit: Math.floor(deposit * 0.05)
        };
    }, [currentDeposit, currentRent, conversionRate]);

    return (
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 card-depth mt-2">
            <h4 className="text-sm font-bold text-slate-800 mb-4 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-amber-600" /> 임대료 증액 한도 (5%)
            </h4>
            <div className="space-y-4">
                <NumberInput label="현재 보증금" value={currentDeposit} onChange={setCurrentDeposit} color="orange" />
                <NumberInput label="현재 월세" value={currentRent} onChange={setCurrentRent} color="orange" />
                <div>
                    <label className="text-xs font-bold text-slate-500 block mb-1">전월세 전환율 (%)</label>
                    <input
                        type="number"
                        value={conversionRate}
                        onChange={e => setConversionRate(e.target.value)}
                        step="0.1"
                        className="w-full px-4 py-3 text-right bg-slate-50 rounded-xl font-bold outline-none input-unified"
                    />
                </div>
            </div>
            {result && (
                <div className="mt-4">
                    <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
                        <p className="text-xs font-bold text-amber-600 text-center mb-3">5% 상한 적용 시 최대 증가분</p>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white p-3 rounded-xl text-center">
                                <p className="text-xs text-slate-500">보증금</p>
                                <p className="text-lg font-black text-amber-600">+{formatCompactNumber(result.increasedDeposit)}</p>
                                <p className="text-xs text-slate-400">→ {formatCompactNumber(result.maxNewDeposit)}</p>
                            </div>
                            <div className="bg-white p-3 rounded-xl text-center">
                                <p className="text-xs text-slate-500">월세</p>
                                <p className="text-lg font-black text-orange-600">+{formatNumber(result.increasedRent)}원</p>
                                <p className="text-xs text-slate-400">→ {formatNumber(result.maxNewRent)}원</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-xs text-center text-slate-400 mt-3">
                        ⚠️ 임대차3법 적용: 계약갱신 시 5% 초과 인상 불가
                    </p>
                </div>
            )}
        </div>
    );
};



// NEW: 결과 이미지 저장 (Phase 5)
const ExportButton = () => {
    const handleExport = async () => {
        const element = document.getElementById('root'); // Capture entire app or specific area
        if (!element) return;

        // Toast notification (mock)
        const showToast = (msg) => {
            const toast = document.createElement('div');
            toast.className = 'fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in-up';
            toast.textContent = msg;
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 2000);
        };

        showToast('이미지 생성 중...');

        try {
            const canvas = await html2canvas(element, {
                backgroundColor: document.documentElement.classList.contains('dark') ? '#0f172a' : '#f8fafc',
                scale: 2
            });

            const image = canvas.toDataURL("image/png");
            const link = document.createElement('a');
            link.href = image;
            link.download = `부동산마스터_결과_${new Date().toLocaleDateString()}.png`;
            link.click();

            showToast('이미지가 저장되었습니다.');
        } catch (err) {
            console.error(err);
            showToast('이미지 저장 실패');
        }
    };

    return (
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 card-depth mt-2 text-center">
            <h4 className="text-sm font-bold text-slate-800 mb-4 flex items-center justify-center">
                <Download className="w-4 h-4 mr-2 text-blue-600" /> 결과 저장
            </h4>
            <p className="text-xs text-slate-500 mb-4">현재 화면을 이미지로 저장합니다.</p>
            <button
                onClick={handleExport}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-200 transition-all active:scale-95"
            >
                화면 캡처 및 다운로드
            </button>
            <div className="mt-4 p-3 bg-slate-50 rounded-xl text-xs text-left text-slate-500">
                💡 PC에서는 다운로드 폴더에 저장되며, 모바일에서는 이미지 길게 누르기로 저장할 수 있습니다.
            </div>
        </div>
    );
};

// NEW: 매물 비교 (Phase 5)
const CompareTab = () => {
    const [properties, setProperties] = useState([{ id: 1, name: 'A 매물', price: '', jeonse: '' }]);

    const addProperty = () => {
        if (properties.length >= 3) return;
        setProperties([...properties, { id: Date.now(), name: String.fromCharCode(65 + properties.length) + ' 매물', price: '', jeonse: '' }]);
    };

    const removeProperty = (id) => {
        setProperties(properties.filter(p => p.id !== id));
    };

    const updateProperty = (id, field, value) => {
        setProperties(properties.map(p => p.id === id ? { ...p, [field]: value } : p));
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-bold text-slate-800 flex items-center">
                    <ArrowRightLeft className="w-4 h-4 mr-2 text-purple-600" /> 매물 비교 ({properties.length}/3)
                </h4>
                {properties.length < 3 && (
                    <button onClick={addProperty} className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors">
                        + 매물 추가
                    </button>
                )}
            </div>

            <div className="overflow-x-auto pb-2">
                <div className="flex gap-3 min-w-max">
                    {properties.map((p, idx) => {
                        const priceVal = parseNumber(p.price);
                        const jeonseVal = parseNumber(p.jeonse);
                        const gap = priceVal && jeonseVal ? priceVal - jeonseVal : 0;
                        const rate = priceVal ? ((jeonseVal / priceVal) * 100).toFixed(1) : 0;

                        return (
                            <div key={p.id} className="w-40 flex-shrink-0 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 card-depth relative">
                                {properties.length > 1 && (
                                    <button onClick={() => removeProperty(p.id)} className="absolute top-2 right-2 text-slate-300 hover:text-red-500">
                                        <X size={16} />
                                    </button>
                                )}
                                <input
                                    value={p.name}
                                    onChange={e => updateProperty(p.id, 'name', e.target.value)}
                                    className="w-full text-sm font-bold text-center mb-3 bg-transparent outline-none border-b border-transparent focus:border-slate-300"
                                />
                                <div className="space-y-3">
                                    <div>
                                        <label className="text-[10px] font-bold text-slate-400 block mb-1">매매가</label>
                                        <input
                                            value={formatNumber(p.price)}
                                            onChange={e => updateProperty(p.id, 'price', e.target.value)}
                                            className="w-full text-right bg-slate-50 px-2 py-1 rounded text-sm font-bold outline-none"
                                            placeholder="0"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-bold text-slate-400 block mb-1">전세가</label>
                                        <input
                                            value={formatNumber(p.jeonse)}
                                            onChange={e => updateProperty(p.id, 'jeonse', e.target.value)}
                                            className="w-full text-right bg-slate-50 px-2 py-1 rounded text-sm font-bold outline-none"
                                            placeholder="0"
                                        />
                                    </div>
                                    <div className="pt-2 border-t border-slate-100">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-[10px] text-slate-500">갭</span>
                                            <span className="text-xs font-bold text-indigo-600">{formatCompactNumber(gap)}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[10px] text-slate-500">전세가율</span>
                                            <span className="text-xs font-bold text-slate-700">{rate}%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// NEW: 프리셋 관리 (Phase 5)
const PresetManager = () => {
    const [presets, setPresets] = useState(() => getSafeLocalStorage('userPresets', [])); // Mock
    const [name, setName] = useState('');

    const savePreset = () => {
        if (!name) return;
        const newPreset = { id: Date.now(), name, date: new Date().toLocaleDateString() };
        const updated = [newPreset, ...presets];
        setPresets(updated);
        // persist logic would go here
        setName('');
    };

    const deletePreset = (id) => {
        setPresets(presets.filter(p => p.id !== id));
    };

    return (
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 card-depth mt-2">
            <h4 className="text-sm font-bold text-slate-800 mb-4 flex items-center">
                <Bookmark className="w-4 h-4 mr-2 text-yellow-500" /> 즐겨찾기/프리셋
            </h4>
            <div className="flex gap-2 mb-4">
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="설정 이름 (예: 서울 아파트 투자)"
                    className="flex-1 px-3 py-2 bg-slate-50 rounded-xl text-sm outline-none"
                />
                <button
                    onClick={savePreset}
                    disabled={!name}
                    className="bg-slate-800 text-white px-4 py-2 rounded-xl text-xs font-bold disabled:opacity-50"
                >
                    저장
                </button>
            </div>
            <div className="space-y-2">
                {presets.length === 0 ? (
                    <div className="text-center py-4 text-slate-400 text-xs">저장된 프리셋이 없습니다.</div>
                ) : (
                    presets.map(p => (
                        <div key={p.id} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                            <div>
                                <p className="text-sm font-bold text-slate-700">{p.name}</p>
                                <p className="text-[10px] text-slate-400">{p.date}</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">불러오기</button>
                                <button onClick={() => deletePreset(p.id)} className="text-slate-300 hover:text-red-500"><X size={14} /></button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

// NEW: FAQ/가이드 (Phase 4)
const GuidePanel = () => {
    const [activeGuide, setActiveGuide] = useState(null);

    const guides = [
        { id: 'scam', title: '🚨 전세 사기 예방', content: '1. 등기부등본 확인 (근저당, 가압류)\n2. 전세가율 80% 이하 확인\n3. 집주인 신분증/등기권리증 대조\n4. HUG 전세보증보험 가입\n5. 전입신고 + 확정일자 즉시' },
        { id: 'registry', title: '📜 등기부등본 보는 법', content: '갑구: 소유권 관련 (압류, 가처분)\n을구: 근저당권 설정 (대출)\n\n✓ 소유자 = 계약 상대방?\n✓ 근저당 채권최고액 확인\n✓ 가압류/가처분 있으면 위험' },
        { id: 'renewal', title: '🔄 계약갱신청구권', content: '• 2년간 1회 사용 가능\n• 임대료 5% 이상 인상 불가\n• 만료 6개월~1개월 전 통보\n• 실거주 목적 시 거절 가능\n• 2+2년 = 최대 4년 거주' },
        { id: 'moving', title: '📦 이사 전입 절차', content: '1. 이사 당일 전입신고 (주민센터)\n2. 확정일자 받기 (동시 가능)\n3. 전세보증보험 가입하기\n4. 공과금 명의 변경\n5. 인터넷 이전 설치' }
    ];

    return (
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 mt-2">
            <h4 className="text-sm font-bold text-slate-800 mb-4">📚 부동산 가이드</h4>
            <div className="space-y-2">
                {guides.map(g => (
                    <div key={g.id}>
                        <button onClick={() => setActiveGuide(activeGuide === g.id ? null : g.id)} className={`w-full py-3 px-4 rounded-xl text-left font-bold text-sm flex justify-between items-center transition-all ${activeGuide === g.id ? 'bg-indigo-50 text-indigo-700' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'}`}>
                            {g.title}
                            <span>{activeGuide === g.id ? '−' : '+'}</span>
                        </button>
                        {activeGuide === g.id && (
                            <div className="p-4 bg-slate-50 rounded-b-xl mt-1 text-sm text-slate-600 whitespace-pre-line">{g.content}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const ToolsTab = () => {
    const [activeTool, setActiveTool] = useState('pyung');

    const tools = [
        { id: 'pyung', label: '평수계산', icon: Grid },
        { id: 'convert', label: '전환계산', icon: Percent },
        { id: 'compare', label: '매물비교', icon: ArrowRightLeft },
        { id: 'preset', label: '프리셋', icon: Bookmark },
        { id: 'export', label: '결과저장', icon: Download },
        { id: 'insurance', label: '보증보험', icon: Shield },
        { id: 'increase', label: '인상률', icon: TrendingUp },
        { id: 'registry', label: '등기비용', icon: ClipboardList },
        { id: 'moving', label: '이사비용', icon: Home },
        { id: 'interior', label: '인테리어', icon: PenTool },
        { id: 'maintenance', label: '관리비', icon: BarChart3 },
        { id: 'earlyrepay', label: '조기상환', icon: DollarSign },
        { id: 'contract', label: '계약관리', icon: FileText },
        { id: 'renewal', label: '갱신권', icon: RefreshCw },
        { id: 'rentcap', label: '증액한도', icon: TrendingUp },
        { id: 'pcheck', label: '매물점검', icon: Search },
        { id: 'calendar', label: '세금일정', icon: Calendar },
        { id: 'guide', label: '가이드', icon: HelpCircle },
        { id: 'message', label: '문자마법사', icon: MessageCircle },
        { id: 'checklist', label: '체크리스트', icon: CheckCircle },
        { id: 'dic', label: '용어사전', icon: BookOpen },
        { id: 'history', label: '히스토리', icon: History }
    ];

    const ActiveComponent = {
        pyung: UnitConverter,
        convert: ConversionCalculator,
        compare: CompareTab,
        preset: PresetManager,
        export: ExportButton,
        insurance: InsuranceCalculator,
        increase: RentIncreaseCalc,
        registry: RegistrationFeeCalc,
        moving: MovingCostCalculator,
        interior: InteriorCostCalculator,
        maintenance: MaintenanceFeeAnalyzer,
        earlyrepay: EarlyRepaymentAnalyzer,
        contract: ContractManager,
        renewal: RenewalRightTracker,
        rentcap: RentCapCalculator,
        pcheck: PropertyChecklistTool,
        calendar: TaxCalendar,
        guide: GuidePanel,
        message: MessageWizard,
        checklist: MovingChecklist,
        dic: Dictionary,
        history: HistoryPanel
    }[activeTool];

    return (
        <div className="space-y-4 pb-32 animate-slide-up px-1">
            <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100 overflow-x-auto no-scrollbar">
                {tools.map(t => {
                    const Icon = t.icon;
                    return (
                        <button
                            key={t.id}
                            onClick={() => setActiveTool(t.id)}
                            aria-label={t.label}
                            aria-current={activeTool === t.id ? 'page' : undefined}
                            className={`flex-1 min-w-[60px] py-3 rounded-xl flex flex-col items-center justify-center gap-1 transition-all ${activeTool === t.id ? 'bg-slate-900 text-white shadow-md' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'}`}
                        >
                            <Icon size={18} className={activeTool === t.id ? "animate-pulse" : ""} />
                            <span className="text-[10px] font-bold">{t.label}</span>
                        </button>
                    )
                })}
            </div>

            <div className="animate-fade-in">
                <ActiveComponent />
            </div>
        </div>
    );
};

// --- Toast Component ---
const Toast = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="toast-container">
            <div className="toast">{message}</div>
        </div>
    );
};

// --- App Component ---
const App = () => {
    const [activeCategory, setActiveCategory] = useState('rent');
    const [activeSubTab, setActiveSubTab] = useState({
        rent: 0,
        buy: 0,
        bank: 0,
        tax: 0,
        subscription: 0,
        tools: 0
    });
    const [darkMode, setDarkMode] = useState(() => {
        try {
            return localStorage.getItem('darkMode') === 'true';
        } catch {
            return false;
        }
    });
    const [toastMessage, setToastMessage] = useState('');

    // Apply dark mode class to HTML element
    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        try {
            localStorage.setItem('darkMode', darkMode.toString());
        } catch (e) {
            console.warn('localStorage not available');
        }
    }, [darkMode]);

    const showToast = (message) => {
        setToastMessage(message);
    };

    const categories = [
        { id: 'rent', label: '전월세', icon: Home },
        { id: 'buy', label: '매매', icon: TrendingUp },
        { id: 'bank', label: '대출', icon: DollarSign },
        { id: 'tax', label: '세금', icon: Calculator },
        { id: 'subscription', label: '청약', icon: Award },
        { id: 'tools', label: '도구', icon: PenTool },
    ];

    const tabs = {
        rent: [
            { id: 0, label: '비용비교', component: CostCompareTab },
            { id: 1, label: '안전진단', component: SafetyTab },
            { id: 2, label: '반전세', component: SemiJeonseTab },
            { id: 3, label: '중개보수', component: FeeTab },
        ],
        buy: [
            { id: 0, label: '취득세/채권', component: BuyingTab },
            { id: 1, label: '전세vs매매', component: RentVsBuyTab },
            { id: 2, label: '내집가격', component: AffordabilityTab },
            { id: 3, label: '임대수익률', component: RentalYieldTab },
            { id: 4, label: '갭투자ROI', component: GapInvestmentTab },
            { id: 5, label: '다주택세금', component: MultiPropertyTaxTab },
            { id: 6, label: '재건축분석', component: ReconstructionTab },
            { id: 7, label: '중개보수', component: FeeTab },
        ],
        bank: [
            { id: 0, label: '대출계산', component: LoanTab },
            { id: 1, label: '상환비교', component: LoanCompareTab },
            { id: 2, label: '상환스케줄', component: AmortizationScheduleTab },
            { id: 3, label: '주담대한도', component: MortgageLimitTab },
            { id: 4, label: '주택연금', component: ReverseRentTab },
            { id: 5, label: '전세대출', component: JeonseLoanLimitTab },
            { id: 6, label: 'DSR계산', component: DSRTab },
            { id: 7, label: 'DTI계산', component: DTITab },
            { id: 8, label: 'LTV계산', component: LTVTab },
        ],
        tax: [
            { id: 0, label: '양도소득세', component: CapitalGainsTaxTab },
            { id: 1, label: '재산세/종부세', component: PropertyTaxTab },
            { id: 2, label: '증여세', component: GiftTaxTab },
            { id: 3, label: '상속세', component: InheritanceTaxTab },
        ],
        subscription: [
            { id: 0, label: '청약점수', component: SubscriptionScoreTab },
        ],
        tools: [
            { id: 0, label: '도구모음', component: ToolsTab }
        ]
    };

    const currentTabs = tabs[activeCategory];
    const currentSubTabIdx = activeSubTab[activeCategory];
    const ActiveComponent = currentTabs[currentSubTabIdx].component;

    const handlePrint = () => window.print();
    const toggleDarkMode = () => setDarkMode(prev => !prev);

    // Track scroll position for header shadow
    const [isScrolled, setIsScrolled] = useState(false);
    const subTabScrollRef = React.useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);

    const checkScrollButtons = useCallback(() => {
        const el = subTabScrollRef.current;
        if (!el) return;
        const { scrollLeft, scrollWidth, clientWidth } = el;
        setShowLeftArrow(scrollLeft > 0);
        // Allow a small buffer (1px) for floating point calculations
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }, []);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Initial check for arrows
        checkScrollButtons();
        window.addEventListener('resize', checkScrollButtons);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkScrollButtons);
        };
    }, [checkScrollButtons]);

    // Re-check arrows when category changes (tabs content changes)
    useEffect(() => {
        checkScrollButtons();
        // Reset scroll to start when category changes
        if (subTabScrollRef.current) {
            subTabScrollRef.current.scrollTo({ left: 0, behavior: 'auto' });
        }
    }, [activeCategory, checkScrollButtons]);

    const scrollSubTabs = (direction) => {
        const el = subTabScrollRef.current;
        if (!el) return;
        const scrollAmount = el.clientWidth * 0.6; // Scroll 60% of width
        el.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };


    return (
        <div className={`max-w-md mx-auto min-h-screen bg-slate-50 relative shadow-2xl border-x border-slate-100 pb-24 theme-transition`}>
            {/* Toast */}
            {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage('')} />}

            {/* Header with scroll shadow */}
            <div className={`bg-white/90 backdrop-blur-md sticky top-0 z-30 border-b border-slate-100 theme-transition ${isScrolled ? 'header-shadow' : ''}`}>
                <div className="h-16 px-6 flex items-center justify-between">
                    <h1 className="text-lg font-black text-slate-900 flex items-center gap-2.5 tracking-tight">
                        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-xl text-white shadow-lg shadow-indigo-500/30">
                            <Home size={16} fill="white" />
                        </div>
                        부동산 마스터 <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent italic">Pro</span>
                    </h1>
                    <div className="flex items-center gap-1">
                        <QuickHistory />
                        <button
                            onClick={toggleDarkMode}
                            className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all no-print touch-target"
                            title={darkMode ? "라이트 모드" : "다크 모드"}
                            aria-label={darkMode ? "라이트 모드로 전환" : "다크 모드로 전환"}
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={handlePrint}
                            className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all no-print touch-target"
                            title="PDF 저장 / 인쇄"
                            aria-label="인쇄하기"
                        >
                            <Printer size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Sub Navigation (Top) - with arrow buttons */}
            <div className="px-4 mt-4 sticky top-16 z-20">
                <div className="relative bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group">

                    {/* Left Arrow */}
                    <div className={`absolute left-0 top-0 bottom-0 z-10 flex items-center transition-opacity duration-300 ${showLeftArrow ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
                        <button
                            onClick={() => scrollSubTabs('left')}
                            className="scroll-arrow-btn left text-slate-500 hover:text-slate-800 scroll-arrow"
                            aria-label="이전 메뉴"
                        >
                            <ChevronLeft size={18} />
                        </button>
                    </div>

                    {/* Tab Container */}
                    <div
                        ref={subTabScrollRef}
                        onScroll={checkScrollButtons}
                        className="flex gap-1 overflow-x-auto scrollbar-hide snap-x snap-mandatory p-1.5 mx-0 scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {/* Spacer for left arrow */}
                        <div className={`flex-shrink-0 transition-all duration-300 ${showLeftArrow ? 'w-8' : 'w-0'}`} />

                        {currentTabs.map((tab, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setActiveSubTab(prev => ({ ...prev, [activeCategory]: idx }));
                                    // Optional: Center the clicked tab
                                    setTimeout(checkScrollButtons, 300);
                                }}
                                className={`flex-shrink-0 min-w-[72px] min-h-[40px] px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap snap-start tab-indicator btn-ripple ${currentSubTabIdx === idx ? 'bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
                                aria-selected={currentSubTabIdx === idx}
                                role="tab"
                            >
                                {tab.label}
                            </button>
                        ))}

                        {/* Spacer for right arrow */}
                        <div className={`flex-shrink-0 transition-all duration-300 ${showRightArrow ? 'w-8' : 'w-0'}`} />
                    </div>

                    {/* Right Arrow */}
                    <div className={`absolute right-0 top-0 bottom-0 z-10 flex items-center transition-opacity duration-300 ${showRightArrow ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/90 to-transparent" />
                        <button
                            onClick={() => scrollSubTabs('right')}
                            className="scroll-arrow-btn right text-slate-500 hover:text-slate-800 scroll-arrow"
                            aria-label="다음 메뉴"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="p-4 compact-mobile">
                <div className="tab-content-enter" key={`${activeCategory}-${activeSubTab[activeCategory]}`}>
                    <ActiveComponent />
                </div>
            </main>

            {/* Bottom Navigation (Categories) - Enhanced Touch Targets */}
            <nav className="fixed bottom-0 max-w-md w-full bg-white/95 backdrop-blur-xl border-t border-slate-200/60 pb-safe z-40 rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.08)]" aria-label="주요 카테고리">
                <div className="flex justify-around items-center px-1 py-2.5">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        const isActive = activeCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`nav-glow flex flex-col items-center justify-center min-w-[56px] min-h-[56px] p-2 rounded-2xl transition-all duration-300 active:scale-95 touch-target ${isActive ? 'active bg-gradient-to-b from-indigo-50 to-indigo-100/50 text-indigo-600 shadow-sm active-tab-indicator' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
                                aria-label={cat.label}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                <Icon size={isActive ? 24 : 20} strokeWidth={isActive ? 2.5 : 1.8} fill={isActive ? "currentColor" : "none"} className="transition-all duration-300" />
                                <span className={`text-[10px] font-bold mt-1 transition-all ${isActive ? 'opacity-100' : 'opacity-60'}`}>{cat.label}</span>
                            </button>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
);
