import { Card, CardContent } from "@/components/ui/card";

export type FaqItem = {
  question: string;
  answer: string;
};

interface FaqListProps {
  items: FaqItem[];
  columns?: 1 | 2;
}

export function FaqList({ items, columns = 1 }: FaqListProps) {
  return (
    <div className={columns === 2 ? "grid gap-4 md:grid-cols-2" : "space-y-4"}>
      {items.map((item) => (
        <Card key={item.question} className="border-border bg-card">
          <CardContent className="p-6">
            <h3 className="mb-2 font-semibold text-foreground">{item.question}</h3>
            <p className="text-sm text-muted-foreground">{item.answer}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
