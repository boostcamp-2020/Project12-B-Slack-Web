export interface reactionsState {
  reactionId: number;
  title: string;
  reactionCount: number;
  reactionDisplayNames: Array<string>;
  emoji: string;
}

export interface replyReactionsState {
  reactionId: number;
  title: string;
  reactionCount: number;
  replyDisplayNames: Array<string>;
  emoji: string;
}
