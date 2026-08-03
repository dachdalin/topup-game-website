import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AlertCircle, Loader2, Search } from "lucide-react";
import type { IdCheckStatus } from "@/components/mlbb/types";

interface PlayerInfoCardProps {
  userId: string;
  onUserIdChange: (value: string) => void;
  serverId: string;
  onServerIdChange: (value: string) => void;
  fullPlayerId: string;
  idCheckStatus: IdCheckStatus;
  checkedNickname: string | null;
  onCheckPlayerId: () => void;
}

export function PlayerInfoCard({
  userId,
  onUserIdChange,
  serverId,
  onServerIdChange,
  fullPlayerId,
  idCheckStatus,
  checkedNickname,
  onCheckPlayerId,
}: PlayerInfoCardProps) {
  return (
    <Card className="mb-6 border-border bg-card">
      <CardHeader>
        <CardTitle className="text-lg text-foreground">Player Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="userId" className="text-foreground">User ID</Label>
            <Input
              id="userId"
              placeholder="Enter your User ID"
              value={userId}
              onChange={(e) => onUserIdChange(e.target.value)}
              className="border-border bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="serverId" className="text-foreground">Server ID</Label>
            <Input
              id="serverId"
              placeholder="Enter Server ID"
              value={serverId}
              onChange={(e) => onServerIdChange(e.target.value)}
              className="border-border bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {fullPlayerId && (
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-primary">
              Your Player ID: <span className="font-medium">{fullPlayerId}</span>
            </p>
            <Button
              type="button"
              variant="outline"
              onClick={onCheckPlayerId}
              disabled={idCheckStatus === "checking"}
              className="shrink-0 border-accent text-accent hover:bg-accent/10 bg-transparent"
            >
              {idCheckStatus === "checking" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Search className="h-4 w-4" />
              )}
              <span className="ml-2 hidden sm:inline">Check ID</span>
            </Button>
          </div>
        )}

        {idCheckStatus === "done" && checkedNickname && (
          <div className="rounded-lg border-2 border-accent/50 bg-accent/10 p-3">
            <p className="text-sm text-foreground">
              Account found: <span className="font-semibold">{checkedNickname}</span>
            </p>
            <p className="mt-1 flex items-center gap-1 text-xs text-accent">
              <AlertCircle className="h-3 w-3 shrink-0" />
              Preview lookup only — not yet verified against the live game server. Confirm your User ID and Server ID match your in-game profile before paying.
            </p>
          </div>
        )}
        {idCheckStatus === "error" && (
          <p className="flex items-center gap-1 text-xs text-destructive">
            <AlertCircle className="h-3 w-3" />
            Could not check this ID right now. Double-check it manually before paying.
          </p>
        )}

        <p className="flex items-center gap-1 text-xs text-muted-foreground">
          <AlertCircle className="h-3 w-3" />
          Example: 12345678(1234) - Double-check before payment
        </p>
      </CardContent>
    </Card>
  );
}
