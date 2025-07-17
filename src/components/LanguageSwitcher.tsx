import React from "react";

const LanguageSwitcher = () => {
  interface ChangeLanguage {
    (lang: string): void;
  }

  const changeLanguage: ChangeLanguage = (lang) => {
    const select = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement | null;
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={() => changeLanguage("en")}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        English
      </button>
      <button
        onClick={() => changeLanguage("ar")}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Arabic
      </button>
    </div>
  );
};

export default LanguageSwitcher;
