import { cls } from "@libs/client/utils";

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <button
      className={cls(
        "py-3 text-base  px-4 w-full bg-green-500 hover:bg-green-600 text-white border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:outline-none"
      )}
    >
      {text}
    </button>
  );
}
