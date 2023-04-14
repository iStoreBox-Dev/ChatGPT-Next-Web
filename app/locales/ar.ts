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
        cn: "العربية",
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
      Title: "Attached Messages Count",
      SubTitle: "Number of sent messages attached per request",
    },
    CompressThreshold: {
      Title: "History Compression Threshold",
      SubTitle:
        "Will compress if uncompressed messages length exceeds the value",
    },
    Token: {
      Title: "API Key",
      SubTitle: "Use your key to ignore access code limit",
      Placeholder: "OpenAI API Key",
    },
    Usage: {
      Title: "Account Balance",
      SubTitle(used: any, total: any) {
        return `Used this month $${used}, subscription $${total}`;
      },
      IsChecking: "Checking...",
      Check: "Check Again",
      NoAccess: "Enter API Key to check balance",
    },
    AccessCode: {
      Title: "Access Code",
      SubTitle: "Access control enabled",
      Placeholder: "Need Access Code",
    },
    Model: "Model",
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
    DefaultTopic: "New Conversation",
    BotHello: "Hello! How can I assist you today?",
    Error: "Something went wrong, please try again later.",
    Prompt: {
      History: (content: string) =>
        "This is a summary of the chat history between the AI and the user as a recap: " +
        content,
      Topic:
        "Please generate a four to five word title summarizing our conversation without any lead-in, punctuation, quotation marks, periods, symbols, or additional text. Remove enclosing quotation marks.",
      Summarize:
        "Summarize our discussion briefly in 200 words or less to use as a prompt for future context.",
    },
    ConfirmClearAll: "Confirm to clear all chat and setting data?",
  },
  Copy: {
    Success: "Copied to clipboard",
    Failed: "Copy failed, please grant permission to access clipboard",
  },
  Context: {
    Toast: (x: any) => `With ${x} contextual prompts`,
    Edit: "Contextual and Memory Prompts",
    Add: "Add One",
  },
};

export default ar;
