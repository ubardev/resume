interface InputProps {
  label: string;
  name: string;
  type: string;
  required: boolean;
}

export default function Input({ label, name, type, required }: InputProps) {
  return (
    <div>
      <label
        className="mb-1 block text-sm font-medium text-gray-700"
        htmlFor={label}
      >
        {label}
      </label>
      <div className="rounded-md relative flex items-center shadow-sm">
        <input
          id={name}
          type={type}
          required={required}
          className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
        />
      </div>
    </div>
  );
}
