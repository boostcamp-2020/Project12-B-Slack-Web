export interface ReactionsState {
  reactionId: number;
  title: string;
  reactionCount: number;
  reactionDisplayNames: Array<string>;
  emoji: string;
}

export interface ReplyReactionsState {
  reactionId: number;
  title: string;
  reactionCount: number;
  replyDisplayNames: Array<string>;
  emoji: string;
}
