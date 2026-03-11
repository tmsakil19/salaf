import { Button } from "../ui/button";

export function TransactionHeader() {
    return (
        <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium leading-6 tracking-[-0.27px] text-text-strong">
                Recent Transactions
            </h3>
            <Button className="flex items-center justify-center rounded-lg bg-primary-alpha p-1.5">
                <span className="px-1 text-sm font-medium leading-5 tracking-[-0.084px] text-primary-base">
                    See All
                </span>
            </Button>
        </div>
    );
}
