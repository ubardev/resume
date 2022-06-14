interface InputProps {
  label: string;
}

export default function Input({ label }: InputProps) {
  return (
    <div>
      <label
        className="mb-1 block text-sm font-medium text-gray-700"
        htmlFor={label}
      >
        {label}
      </label>
    </div>
  );
}
