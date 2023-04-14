import { SubmitKey } from "../store/app";
import type { LocaleType } from "./index";

const ar: LocaleType = {
  WIP: "WIP...",
  Error: {
    Unauthorized:
      "الوصول غير المصرح به ، الرجاء إدخال رمز الوصول في صفحة الإعدادات.",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} رسائل`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} الرسائل مع ChatGPT`,
    Actions: {
      ChatList: "انتقل إلى قائمة الدردشة",
      CompressedHistory: "موجه ذاكرة المحفوظات المضغوطة",
      Export: "تصدير كل الرسائل باسم Markdown",
      Copy: "نسخ",
      Stop: "ايقاف",
      Retry: "اعادة محاولة",
    },
    Rename: "إعادة تسمية الدردشة",
    Typing: "جاري الكتابة ...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} لترسل`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter اضافة سطر";
      }
      return inputHints + ", / للبحث في المطالبات";
    },
    Send: "ارسال",
  },
  Export: {
    Title: "جميع الرسائل",
    Copy: "نسخ الكل",
    Download: "تحميل",
    MessageFromYou: "رسالة منك",
    MessageFromChatGPT: "رسالة من ChatGPT",
  },
  Memory: {
    Title: "الذاكرة",
    EmptyContent: "لا شيء حتى الان.",
    Send: "إرسال الذاكرة",
    Copy: "نسخ الذاكرة",
    Reset: "إعادة تعيين الجلسة",
    ResetConfirm:
      "ستؤدي إعادة التعيين إلى مسح محفوظات المحادثة الحالية والذاكرة التاريخية. هل أنت متأكد أنك تريد إعادة تعيين؟",
  },
  Home: {
    NewChat: "دردشة جديدة",
    DeleteChat: "تأكيد لحذف المحادثة المحددة؟",
    DeleteToast: "تم حذف الدردشة",
    Revert: "تراجع",
  },
  Settings: {
    Title: "إعدادات",
    SubTitle: "جميع الإعدادات",
    Actions: {
      ClearAll: "مسح كافة البيانات",
      ResetAll: "امسح كل الاعدادت",
      Close: "اغلاق",
      ConfirmResetAll: {
        Confirm: "هل أنت متأكد أنك تريد إعادة تعيين كافة الاعدادات",
      },
      ConfirmClearAll: {
        Confirm: "هل أنت متأكد أنك تريد إعادة تعيين كل الدردشة؟",
      },
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      Options: {
        ar: "العربية",
        cn: "الصينية",
        en: "إنجليزي",
        tw: "الصينية التقليدية",
        es: "الاسبانية",
        it: "إيطالي",
        tr: "التركية",
        jp: "اليابانية",
      },
    },
    Avatar: "الصورة الرمزية",
    FontSize: {
      Title: "حجم الخط",
      SubTitle: "ضبط حجم الخط لمحتوى الدردشة",
    },
    Update: {
      Version: (x: string) => `إصدار: ${x}`,
      IsLatest: "احدث اصدار",
      CheckUpdate: "فحص التحديث",
      IsChecking: "التحقق من التحديث ...",
      FoundUpdate: (x: string) => `تم العثور على نسخة جديدة: ${x}`,
      GoToUpdate: "تحديث",
    },
    SendKey: "مفتاح الإرسال",
    Theme: "التصميم",
    TightBorder: "Tight Border",
    SendPreviewBubble: "إرسال فقاعة معاينة",
    Prompt: {
      Disable: {
        Title: "تعطيل الإكمال التلقائي",
        SubTitle: "الإدخال / لتشغيل الإكمال التلقائي",
      },
      List: "قائمة موجه",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} مدمج, ${custom} تعريف المستخدم`,
      Edit: "تعديل",
    },
    HistoryCount: {
      Title: "عدد الرسائل المرفقة",
      SubTitle: "عدد الرسائل المرسلة المرفقة لكل طلب",
    },
    CompressThreshold: {
      Title: "عتبة ضغط التاريخ",
      SubTitle: "سيضغط إذا تجاوز طول الرسائل غير المضغوطة القيمة",
    },
    Token: {
      Title: "API Key",
      SubTitle: "استخدم مفتاحك لتجاهل حد رمز الوصول",
      Placeholder: "OpenAI API Key",
    },
    Usage: {
      Title: "رصيد الحساب",
      SubTitle(used: any, total: any) {
        return `مستخدمة هذا الشهر $${used}, الاشتراك $${total}`;
      },
      IsChecking: "فحص...",
      Check: "تحقق مرة اخرى",
      NoAccess: "أدخل مفتاح API للتحقق من الرصيد",
    },
    AccessCode: {
      Title: "رمز الدخول",
      SubTitle: "تمكين التحكم في الدخول",
      Placeholder: "بحاجة إلى رمز الدخول",
    },
    Model: "نموذج",
    Temperature: {
      Title: "Temperature",
      SubTitle: "A larger value makes the more random output",
    },
    MaxTokens: {
      Title: "Max Tokens",
      SubTitle: "Maximum length of input tokens and generated tokens",
    },
    PresencePenlty: {
      Title: "Presence Penalty",
      SubTitle:
        "A larger value increases the likelihood to talk about new topics",
    },
  },
  Store: {
    DefaultTopic: "محادثة جديدة",
    BotHello: "Hello! How can I assist you today?",
    Error: "هناك شئ خاطئ، يرجى المحاولة فى وقت لاحق.",
    Prompt: {
      History: (content: string) =>
        "هذا ملخص لمحفوظات الدردشة بين الذكاء الاصطناعي والمستخدم كخلاصة: " +
        content,
      Topic:
        "الرجاء إنشاء عنوان من أربع إلى خمس كلمات يلخص محادثتنا دون أي مقدمة أو علامات ترقيم أو علامات اقتباس أو نقاط أو رموز أو نص إضافي. إزالة التضمين علامات الاقتباس.",
      Summarize:
        "لخص مناقشتنا بإيجاز في 200 كلمة أو أقل لاستخدامها كموجه للسياق المستقبلي.",
    },
    ConfirmClearAll: "هل تريد التأكيد على مسح كافة بيانات الدردشة والإعداد؟",
  },
  Copy: {
    Success: "نسخ إلى الحافظة",
    Failed: "فشل النسخ ، يرجى منح الإذن للوصول إلى الحافظة",
  },
  Context: {
    Toast: (x: any) => `مع ${x} المطالبات السياقية`,
    Edit: "موجهات السياق والذاكرة",
    Add: "أضف",
  },
};

export default ar;
