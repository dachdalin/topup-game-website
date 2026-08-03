import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle, Loader2, Search } from "lucide-react";
import type { IdCheckStatus } from "@/components/pubg/types";

interface PlayerInfoCardProps {
  playerId: string;
  onPlayerIdChange: (value: string) => void;
  server: string;
  onServerChange: (value: string) => void;
  idCheckStatus: IdCheckStatus;
  checkedNickname: string | null;
  onCheckPlayerId: () => void;
}

export function PlayerInfoCard({
  playerId,
  onPlayerIdChange,
  server,
  onServerChange,
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
        <div className="space-y-2">
          <Label htmlFor="playerId" className="text-foreground">Player ID</Label>
          <div className="flex gap-2">
            <Input
              id="playerId"
              placeholder="Enter your Player ID"
              value={playerId}
              onChange={(e) => onPlayerIdChange(e.target.value)}
              className="border-border bg-background text-foreground placeholder:text-muted-foreground"
            />
            <Button
              type="button"
              variant="outline"
              onClick={onCheckPlayerId}
              disabled={!playerId.trim() || idCheckStatus === "checking"}
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

          {idCheckStatus === "done" && checkedNickname && (
            <div className="rounded-lg border-2 border-accent/50 bg-accent/10 p-3">
              <p className="text-sm text-foreground">
                Account found: <span className="font-semibold">{checkedNickname}</span>
              </p>
              <p className="mt-1 flex items-center gap-1 text-xs text-accent">
                <AlertCircle className="h-3 w-3 shrink-0" />
                Preview lookup only — not yet verified against the live game server. Confirm your Player ID matches your in-game profile before paying.
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
            Double-check your Player ID before payment
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="server" className="text-foreground">Server</Label>
          <Select value={server} onValueChange={onServerChange}>
            <SelectTrigger className="border-border bg-background text-foreground">
              <SelectValue placeholder="Select server" />
            </SelectTrigger>
            <SelectContent className="border-border bg-card">
              <SelectItem value="global">Global</SelectItem>
              <SelectItem value="kr">Korea</SelectItem>
              <SelectItem value="vn">Vietnam</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
