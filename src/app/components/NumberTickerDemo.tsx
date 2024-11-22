import { NumberTicker } from "@/app/components/ui/Numberticker";

interface NumberTickerDemoProps {
    value: number;
    decimals:boolean;
    color:string;
}

export function NumberTickerDemo({ value,decimals,color }: NumberTickerDemoProps) {
    return (
        <p className="whitespace-pre-wrap text-[60px] font-bold tracking-tighter " style={{ color: color }}>
            {!decimals &&  <NumberTicker value={value}  />}
            {decimals && <NumberTicker value={value} decimalPlaces={1}  /> }
        </p>
    );
}
