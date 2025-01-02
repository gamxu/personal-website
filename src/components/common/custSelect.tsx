import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CustomSelectProps {
  list: string[];
  onChange: (value: string) => void;
  value?: string;
  defaultValue?: string;
}

export function CustomSelect({ 
  list, 
  onChange, 
  value, 
  defaultValue = list[0] 
}: Readonly<CustomSelectProps>) {
  return (
    <Select onValueChange={onChange} value={value} defaultValue={defaultValue}>
      <SelectTrigger className="w-[180px] bg-white-primary text-black-bg">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {list.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}