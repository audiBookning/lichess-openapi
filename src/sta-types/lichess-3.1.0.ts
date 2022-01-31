/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * @example standard
 */
export enum VariantKey {
  Standard = "standard",
  Chess960 = "chess960",
  Crazyhouse = "crazyhouse",
  Antichess = "antichess",
  Atomic = "atomic",
  Horde = "horde",
  KingOfTheHill = "kingOfTheHill",
  RacingKings = "racingKings",
  ThreeCheck = "threeCheck",
}

export interface Variant {
  key?: VariantKey;
  name?: string;
  short?: string;
}

export enum Speed {
  UltraBullet = "ultraBullet",
  Bullet = "bullet",
  Blitz = "blitz",
  Rapid = "rapid",
  Classical = "classical",
  Correspondence = "correspondence",
}

export enum PerfType {
  UltraBullet = "ultraBullet",
  Bullet = "bullet",
  Blitz = "blitz",
  Rapid = "rapid",
  Classical = "classical",
  Correspondence = "correspondence",
  Chess960 = "chess960",
  Crazyhouse = "crazyhouse",
  Antichess = "antichess",
  Atomic = "atomic",
  Horde = "horde",
  KingOfTheHill = "kingOfTheHill",
  RacingKings = "racingKings",
  ThreeCheck = "threeCheck",
}

export interface Clock {
  limit?: number;
  increment?: number;
}

/**
 * Game status code. https://github.com/ornicar/scalachess/blob/0a7d6f2c63b1ca06cd3c958ed3264e738af5c5f6/src/main/scala/Status.scala#L16-L28
 */
export enum GameStatus {
  Created = "created",
  Started = "started",
  Aborted = "aborted",
  Mate = "mate",
  Resign = "resign",
  Stalemate = "stalemate",
  Timeout = "timeout",
  Draw = "draw",
  Outoftime = "outoftime",
  Cheat = "cheat",
  NoStart = "noStart",
  UnknownFinish = "unknownFinish",
  VariantEnd = "variantEnd",
}

export type ChallengeUser = LightUser & {
  rating?: number;
  provisional?: boolean;
  online?: boolean;
};

/**
 * @example {"id":"VU0nyvsW","url":"https://lichess.org/VU0nyvsW",
 * "color":"random","direction":"out","timeControl":
 * {"increment":2,"limit":300,"show":"5+2","type":"clock"},
 * "variant":{"key":"standard","name":"Standard","short":"Std"},
 * "challenger":{"id":"thibot","name":"thibot","online":true,
 * "provisional":false,"rating":1940,"title":"BOT"},"destUser":{"id":
 * "leelachess","name":"LeelaChess","online":true,"provisional":true,
 * "rating":2670,"title":"BOT"},"perf":{"icon":";","name":"Correspondence"},
 * "rated":true,"speed":"blitz","status":"created"}
 */
export interface ChallengeJson {
  id: string;
  url: string;
  status: "created" | "offline" | "canceled" | "declined" | "accepted";
  challenger: ChallengeUser;
  destUser: ChallengeUser | null;
  variant: Variant;
  rated: boolean;
  speed: Speed;
  timeControl:
    | { type?: string; limit?: number; increment?: number; show?: string }
    | { type?: string; daysPerTurn?: number }
    | { type?: string };
  color: "white" | "black" | "random";
  perf: { icon?: string; name?: string };
  direction?: "in" | "out";
  initialFen?: string;
  declineReason?: string;
}

/**
 * @example {"id":"VU0nyvsW","url":"https://lichess.org/VU0nyvsW","urlWhite":"https://lichess.org/VU0nyvsW?color=white","urlBlack":"https://lichess.org/VU0nyvsW?color=black","color":"random","direction":"out","timeControl":{"increment":2,"limit":300,"show":"5+2","type":"clock"},"variant":{"key":"standard","name":"Standard","short":"Std"},"challenger":{"id":"thibot","name":"thibot","online":true,"provisional":false,"rating":1940,"title":"BOT"},"destUser":{"id":"leelachess","name":"LeelaChess","online":true,"provisional":true,"rating":2670,"title":"BOT"},"perf":{"icon":";","name":"Correspondence"},"rated":true,"speed":"blitz","status":"created"}
 */
export type ChallengeOpenJson = any;

/**
 * @example {"id":"RVAcwgg7","games":[{"id":"NKop9IyD","black":"lizen1","white":"thibault"},{"id":"KT8374ut","black":"lizen3","white":"lizen2"},{"id":"wInQr8Sk","black":"lizen5","white":"lizen4"}],"variant":"standard","clock":{"increment":0,"limit":300},"pairAt":1612289869919,"pairedAt":null,"rated":false,"startClocksAt":1612200422971,"scheduledAt":1612203514628}
 */
export type BulkPairing = any;

export interface GameUser {
  user?: LightUser;
  rating?: number;
  ratingDiff?: number;
  name?: string;
  provisional?: boolean;
  aiLevel?: number;
  analysis?: {
    inaccuracy: number;
    mistake: number;
    blunder: number;
    acpl: number;
  };
  team?: string;
}

/**
 * @example {"id":"q7ZvsdUF","rated":true,"variant":"standard","speed":"blitz","perf":"blitz","createdAt":1514505150384,"lastMoveAt":1514505592843,"status":"draw","players":{"white":{"user":{"name":"Lance5500","title":"LM","patron":true,"id":"lance5500"},"rating":2389,"ratingDiff":4},"black":{"user":{"name":"TryingHard87","id":"tryinghard87"},"rating":2498,"ratingDiff":-4}},"opening":{"eco":"D31","name":"Semi-Slav Defense: Marshall Gambit","ply":7},"moves":"d4 d5 c4 c6 Nc3 e6 e4 Nd7 exd5 cxd5 cxd5 exd5 Nxd5 Nb6 Bb5+ Bd7 Qe2+ Ne7 Nxb6 Qxb6 Bxd7+ Kxd7 Nf3 Qa6 Ne5+ Ke8 Qf3 f6 Nd3 Qc6 Qe2 Kf7 O-O Kg8 Bd2 Re8 Rac1 Nf5 Be3 Qe6 Rfe1 g6 b3 Bd6 Qd2 Kf7 Bf4 Qd7 Bxd6 Nxd6 Nc5 Rxe1+ Rxe1 Qc6 f3 Re8 Rxe8 Nxe8 Kf2 Nc7 Qb4 b6 Qc4+ Nd5 Nd3 Qe6 Nb4 Ne7 Qxe6+ Kxe6 Ke3 Kd6 g3 h6 Kd3 h5 Nc2 Kd5 a3 Nc6 Ne3+ Kd6 h4 Nd8 g4 Ne6 Ke4 Ng7 Nc4+ Ke6 d5+ Kd7 a4 g5 gxh5 Nxh5 hxg5 fxg5 Kf5 Nf4 Ne3 Nh3 Kg4 Ng1 Nc4 Kc7 Nd2 Kd6 Kxg5 Kxd5 f4 Nh3+ Kg4 Nf2+ Kf3 Nd3 Ke3 Nc5 Kf3 Ke6 Ke3 Kf5 Kd4 Ne6+ Kc4","clock":{"initial":300,"increment":3,"totalTime":420}}
 */
export interface GameJson {
  id: string;
  rated: boolean;
  variant: VariantKey;
  speed: Speed;
  perf: string;
  createdAt: number;
  lastMoveAt: number;

  /** Game status code. https://github.com/ornicar/scalachess/blob/0a7d6f2c63b1ca06cd3c958ed3264e738af5c5f6/src/main/scala/Status.scala#L16-L28 */
  status: GameStatus;
  players: { white?: GameUser; black?: GameUser };
  initialFen?: string;
  winner?: "white" | "black";
  opening?: { eco?: string; name?: string; ply?: number };
  moves?: string;
  pgn?: string;
  daysPerTurn?: number;
  analysis?: {
    eval: number;
    best?: string;
    variation?: string;
    judgment?: {
      name?: "Inaccuracy" | "Mistake" | "Blunder";
      comment?: string;
    };
  }[];
  tournament?: string;
  swiss?: string;
  clock?: { initial?: number; increment?: number; totalTime?: number };
}

/**
* @example [Event "Rated Blitz game"]
[Site "https://lichess.org/fY44h4OY"]
[Date "2018.03.29"]
[Round "-"]
[White "pveldman"]
[Black "thibault"]
[Result "1-0"]
[UTCDate "2018.03.29"]
[UTCTime "01:38:15"]
[WhiteElo "1610"]
[BlackElo "1601"]
[WhiteRatingDiff "+10"]
[BlackRatingDiff "-10"]
[Variant "Standard"]
[TimeControl "180+0"]
[ECO "C62"]
[Opening "Ruy Lopez: Steinitz Defense"]
[Termination "Normal"]
[Event "U1700 SuperBlitz Arena"]

1. e4 { [%clk 0:03:00] } e5 { [%clk 0:03:00] } 2. Nf3 { [%clk 0:02:59] } Nc6 { [%clk 0:02:58] } 3. Bb5 { [%clk 0:02:57] } d6 { [%clk 0:02:55] } 4. h3 { [%clk 0:02:54] } Nf6 { [%clk 0:02:52] } 5. Bxc6+ { [%clk 0:02:52] } bxc6 { [%clk 0:02:49] } 6. d3 { [%clk 0:02:51] } Be7 { [%clk 0:02:46] } 7. O-O { [%clk 0:02:47] } O-O { [%clk 0:02:45] } 8. b3 { [%clk 0:02:45] } d5 { [%clk 0:02:45] } 9. exd5 { [%clk 0:02:33] } cxd5 { [%clk 0:02:40] } 10. Nxe5 { [%clk 0:02:31] } Qd6 { [%clk 0:02:38] } 1-0

*/
export type GamePgn = any;

/**
* @example [Event "Wch Blitz"]
[Site "Astana"]
[Date "2012.07.10"]
[Round "23"]
[White "Carlsen, Magnus"]
[Black "Chadaev, Nikolay"]
[Result "1-0"]
[WhiteElo "2837"]
[BlackElo "2580"]

1. e4 e5 2. f4 d5 3. exd5 exf4 4. Nf3 Nf6 5. c4 c6 6. d4 cxd5 7. c5 Nc6 8. Bb5 Be7 9. O-O O-O 10. Bxf4 Bg4 11. Nc3 Ne4 12. Qd3 Bf5 13. Qe3 Bf6 14. Bxc6 bxc6 15. Ne5 Bxe5 16. Bxe5 Bg6 17. Nxe4 Bxe4 18. Qg3 f6 19. Bd6 Re8 20. b4 Bg6 21. a4 a6 22. h4 Qd7 23. h5 Bxh5 24. Rxf6 Qg4 25. Qxg4 Bxg4 26. Rf4 Bh5 27. Raf1 h6 28. Be5 Ra7 29. b5 axb5 30. axb5 cxb5 31. c6 Raa8 32. c7 Kh7 33. Rb1 Be2 34. Rf7 Rg8 35. Re7 Bc4 36. Kh2 Rae8 37. Rd7 Ra8 38. Rb2 Raf8 39. g4 Ra8 40. Rf2 b4 41. Rff7 h5 42. Rxg7+ Rxg7 43. Rxg7+ 1-0

*/
export type MasterGamePgn = any;

/**
* @example [Event "All about the Sicilian Defense: Dragon Variation"]
[Site "https://lichess.org/study/8c8bmUfy/qwnXMwVC"]
[Result "*"]
[UTCDate "2017.06.25"]
[UTCTime "10:12:04"]
[Variant "Standard"]
[ECO "B76"]
[Opening "Sicilian Defense: Dragon Variation, Yugoslav Attack, Panov Variation"]
[Annotator "https://lichess.org/@/Francesco_Super"]

{ This chapter will go over the Dragon Variation, a very common variation used by Black and it is the most aggressive variation in the Sicilian defense. }
1. e4 c5 2. Nf3 { Simple developing move to control the d4 square } { [%csl Gd4,Gc5][%cal Gf3d4,Gc5d4] } 2... d6 { [%cal Gd6e5] } (2... e6 3. d4 cxd4 4. Nxd4 Nf6 5. e5 (5. Nc3 { [%cal Ge4e5] }) 5... Qa5+) 3. d4 { Whites want the exchange of pawns } { [%cal Gc5d4] } 3... cxd4 { [%cal Gf3d4] } 4. Nxd4 { Whites are now ahead in development but blacks still have the two central pawns whereas whites only one. } { [%csl Ge7,Gd6,Ge4] } 4... Nf6 { Blacks are now developing their knight and threatening the e4 pawn } { [%csl Ge4][%cal Gf6e4] } 5. Nc3 { The e4 pawn is now protected by the c3 knight } { [%csl Ge4,Bc3][%cal Rf6e4,Bc3e4] } 5... g6 { This is the DRAGON VARIATION. g6 allows the dark-squared bishop to develop and move to g7, controlling the long dark-squared diagonal } { [%csl Gd4] } 6. Be3 { [%cal Gd1d2,Gf2f3,Ge1c1,Gg2g4,Gh2h4,Gg4g5] } (6. Be2 Bg7 7. O-O Nc6 8. Be3 { [%cal Ge3d4] } (8. f3 Nxe4 { [%cal Gg7d4,Gc6d4] } 9. Nxc6 Qb6+ { [%cal Gb6c6,Gb6g1] } 10. Kh1 Nxc3 { [%cal Gc3d1,Gc3e2] } 11. bxc3 bxc6 { [%cal Gc8a6] }) 8... O-O 9. Nb3 a6 { [%cal Gb7b5,Gb5b4,Ge2c4] }) 6... Bg7 (6... Ng4 { [%cal Gg4e3] } 7. Bb5+ { [%cal Gb5e8,Gb8d7,Gc8d7,Gd1g4] } 7... Nc6 8. Nxc6 bxc6 9. Bxc6+ { [%cal Gc6a8] }) 7. f3 { The key opening moves for White, who attempt to castle queenside , whereas f3 strengthens the pawn structure, connecting e4 to the h2 and g2, while White also plan pushing to g4 and possibly h4. } { [%csl Bf3,Be3][%cal Rg2g4,Rh2h4,Rg4g5] } 7... O-O (7... h5 { Is operating against g4. }) 8. Qd2 { [%csl Gh6,Gg7][%cal Ge1c1,Ga1d1,Re3h6,Rd2h6] } 8... Nc6 { [%csl Gc6,Gh6][%cal Gb8c6,Ge1c1,Ga7a6,Ge3h6] } 9. g4 (9. Bh6 { [%cal Ge3d4] } 9... Bxh6 10. Qxh6 Nxd4) 9... Be6 10. Nxe6 fxe6 { [%cal Gf8f1] } 11. O-O-O Ne5 12. Be2 { [%csl Gf3][%cal Re5f3,Bd1h1,Bg1d1] } 12... Qc7 { [%csl Gc4][%cal Ge5c4,Gc4e3,Gc4d2,Bf8c8,Yc7c3] } 13. h4 Nc4 *

*/
export type StudyPgn = any;

/**
 * @example NM
 */
export enum Title {
  GM = "GM",
  WGM = "WGM",
  IM = "IM",
  WIM = "WIM",
  FM = "FM",
  WFM = "WFM",
  NM = "NM",
  CM = "CM",
  WCM = "WCM",
  WNM = "WNM",
  LM = "LM",
  BOT = "BOT",
}

export interface LightUser {
  /** @example Chess-Network */
  name?: string;
  title?: Title | null;

  /** @example true */
  patron?: boolean;

  /** @example chess-network */
  id?: string;
}

export interface Perf {
  /** @example 2945 */
  games?: number;

  /** @example 1609 */
  rating?: number;

  /** @example 60 */
  rd?: number;

  /** @example -22 */
  prog?: number;
  prov?: boolean;
}

export interface StormPerf {
  /** @example 44 */
  runs?: number;

  /** @example 61 */
  score?: number;
}

export interface Perfs {
  chess960?: Perf;
  atomic?: Perf;
  racingKings?: Perf;
  ultraBullet?: Perf;
  blitz?: Perf;
  kingOfTheHill?: Perf;
  bullet?: Perf;
  correspondence?: Perf;
  horde?: Perf;
  puzzle?: Perf;
  classical?: Perf;
  rapid?: Perf;
  storm?: StormPerf;
}

export interface PlayTime {
  /** @example 3296897 */
  total?: number;

  /** @example 12134 */
  tv?: number;
}

export interface Profile {
  /** @example EC */
  country?: string;
  location?: string;

  /** @example Free bugs! */
  bio?: string;

  /** @example Thibault */
  firstName?: string;

  /** @example Duplessis */
  lastName?: string;

  /** @example 1500 */
  fideRating?: number;

  /** @example 1500 */
  uscfRating?: number;

  /** @example 1500 */
  ecfRating?: number;

  /**
   * @example github.com/ornicar
   * twitter.com/ornicar
   */
  links?: string;
}

export interface Count {
  /** @example 9265 */
  all?: number;

  /** @example 7157 */
  rated?: number;

  /** @example 531 */
  ai?: number;

  /** @example 340 */
  draw?: number;

  /** @example 331 */
  drawH?: number;

  /** @example 4480 */
  loss?: number;

  /** @example 4207 */
  lossH?: number;

  /** @example 4440 */
  win?: number;

  /** @example 4378 */
  winH?: number;

  /** @example 71 */
  bookmark?: number;

  /** @example 6 */
  playing?: number;

  /** @example 66 */
  import?: number;

  /** @example 0 */
  me?: number;
}

export interface User {
  /** @example georges */
  id?: string;

  /** @example Georges */
  username?: string;

  /** @example true */
  online?: boolean;
  perfs?: Perfs;

  /** @example 1290415680000 */
  createdAt?: number;

  /** @example false */
  disabled?: boolean;

  /** @example false */
  tosViolation?: boolean;
  profile?: Profile;

  /** @example 1522636452014 */
  seenAt?: number;

  /** @example true */
  patron?: boolean;

  /** @example true */
  verified?: boolean;
  playTime?: PlayTime;
  title?: Title;
}

export type UserExtended = User & {
  url?: string;
  playing?: string;
  completionRate?: number;
  count?: Count;
  streaming?: boolean;
  followable?: boolean;
  following?: boolean;
  blocking?: boolean;
  followsYou?: boolean;
};

/**
 * @example {"users":{"neio":201.5,"thibault":144.5},"nbGames":346,"matchup":{"users":{"neio":44,"thibault":43},"nbGames":87}}
 */
export type Crosstable = any;

/**
 * @example [{"text":"Takeback sent","user":"lichess"},{"text":"Takeback accepted","user":"lichess"},{"text":"Good game, well played","user":"thibault"}]
 */
export type GameChat = any;

/**
 * @example {"game":{"clock":"10+0","id":"VpVdGbna","perf":{"icon":"#","name":"Rapid"},"pgn":"d4 Nf6 Nf3 g6 Nc3 d6 e4 c5 Be3 cxd4 Bxd4 Nc6 Be3 Qa5 Bd2 Bg7 Be2 O-O O-O Qb6 Rb1 Bg4 h3 Bxf3 Bxf3 Nd4 Be3 Nxf3+ Qxf3 Qc6 Bd4 a6 Bxf6 Bxf6 Nd5 Qxc2 Nxf6+ exf6 Qxf6 Qxe4 Qxd6 Rad8 Qb6 Rfe8 Rfe1 Qxe1+ Rxe1 Rxe1+ Kh2 Rd2 Kg3 Ree2 Qxb7 Rxb2 Qxa6 Rxa2 Qc8+ Kg7 Qc3+ Kg8 Qc5 Rxf2 Qc8+ Kg7 Qc3+ Kh6 Qe3+ Kg7 Qe5+ Kf8 Qh8+ Ke7 Qe5+ Kf8 Qb8+ Kg7 Qe5+ f6 Qe7+ Kh6 Qf8+ Kg5 h4+ Kh5 Qc5+ f5 Qc1 Rxg2+ Kh3 Rh2+ Kg3 Rag2+ Kf3 Rg4 Qd1 Rhxh4 Kf2 Rh2+ Kf3 Rh3+ Ke2 Rg2+ Kf1+ Rg4 Kf2 g5 Qd8 h6 Qe8+ Kh4 Kf1 h5 Qe1+ Rhg3 Qe5 f4 Qe1 f3 Kf2 Rf4 Qh1+ Rh3 Qe1 g4","players":[{"color":"white","name":"borska (2013)","userId":"borska"},{"color":"black","name":"Xxn00bkillar69xX (1990)","userId":"xxn00bkillar69xx"}],"rated":true},"puzzle":{"id":"K69di","initialPly":123,"plays":1970,"rating":2022,"solution":["e1e7","f4f6","e7f6"],"themes":["short","queenRookEndgame","endgame","mateIn2"]}}
 */
export type PuzzleJson = any;

export interface PuzzleRoundJson {
  /** @example BwPiW */
  id?: string;

  /** @example 1514505150384 */
  date?: number;

  /** @example true */
  win?: boolean;

  /** @example 1877 */
  puzzleRating?: number;
}

/**
 * @example {"days":30,"global":{"firstWins":276,"nb":501,"performance":1570,"puzzleRatingAvg":1523,"replayWins":2},"themes":{"advancedPawn":{"results":{"firstWins":19,"nb":39,"performance":1438,"puzzleRatingAvg":1476,"replayWins":1},"theme":"Advanced pawn"},"anastasiaMate":{"results":{"firstWins":5,"nb":6,"performance":1720,"puzzleRatingAvg":1387,"replayWins":0},"theme":"Anastasia's mate"}}}
 */
export type PuzzleDashboardJson = any;

/**
 * @example {"high":{"allTime":11,"day":0,"month":7,"week":0},"days":[{"_id":"2021/1/28","combo":8,"errors":1,"highest":1084,"moves":9,"runs":26,"score":4,"time":175},{"_id":"2021/1/27","combo":14,"errors":1,"highest":1095,"moves":15,"runs":15,"score":7,"time":23},{"_id":"2021/1/22","combo":14,"errors":1,"highest":1095,"moves":15,"runs":15,"score":3,"time":23}]}
 */
export type StormDashboardJson = any;

/**
 * @example [{"name":"Bullet","points":[[2011,0,8,1472],[2011,0,9,1332],[2011,8,12,1314]]},{"name":"Blitz","points":[[2011,7,29,1332]]}]
 */
export type RatingHistory = any;

/**
 * @example {"perf":{"glicko":{"rating":1672.42,"deviation":45.13,"provisional":false},"nb":5692,"progress":-27},"rank":98121,"percentile":69.7,"stat":{"perfType":{"key":"bullet","name":"Bullet"},"highest":{"int":1902,"at":"2021-05-31T08:58:53.701Z","gameId":"YEDqtwig"},"lowest":{"int":1417,"at":"2016-06-28T13:54:39.656Z","gameId":"rNM4J1GJ"},"bestWins":{"results":[{"opInt":2238,"opId":{"id":"hyperdragon84","name":"HyperDragon84","title":null},"at":"2019-06-19T17:09:05.187Z","gameId":"DGB53z9w"},{"opInt":2089,"opId":{"id":"osipov","name":"osipov","title":null},"at":"2017-06-18T09:46:05.016Z","gameId":"gurRhuMi"},{"opInt":2071,"opId":{"id":"spark50","name":"Spark50","title":null},"at":"2020-07-04T08:36:12.948Z","gameId":"a93Dk1mv"},{"opInt":2045,"opId":{"id":"yasha43","name":"Yasha43","title":null},"at":"2021-05-17T14:01:41.098Z","gameId":"j3jZnGTr"},{"opInt":2034,"opId":{"id":"midedu","name":"midedu","title":null},"at":"2020-06-27T17:32:47.001Z","gameId":"OiaMVLQ8"}]},"worstLosses":{"results":[{"opInt":1186,"opId":{"id":"happy0","name":"Happy0","title":null},"at":"2016-07-07T19:48:29.077Z","gameId":"Q01bbiN4"},{"opInt":1197,"opId":{"id":"kazmankiller86","name":"KazmanKiller86","title":null},"at":"2016-10-16T14:21:37.748Z","gameId":"Aivqh9Sp"},{"opInt":1201,"opId":{"id":"artem555","name":"artem555","title":null},"at":"2016-08-28T16:21:30.923Z","gameId":"tiRAbhnX"},{"opInt":1265,"opId":{"id":"arcenuu","name":"Arcenuu","title":null},"at":"2016-12-24T14:28:03.866Z","gameId":"A68wUOoh"},{"opInt":1283,"opId":{"id":"amritalib76","name":"Amritalib76","title":null},"at":"2018-06-26T09:55:39.354Z","gameId":"sbNVikmo"}]},"count":{"all":5858,"rated":5688,"win":2789,"loss":2806,"draw":263,"tour":654,"berserk":1,"opAvg":1671.44,"seconds":784886,"disconnects":0},"resultStreak":{"win":{"cur":{"v":0},"max":{"v":11,"from":{"at":"2021-06-14T15:38:50.681Z","gameId":"wTX2IExo"},"to":{"at":"2021-06-15T18:41:46.970Z","gameId":"1z4rrjgw"}}},"loss":{"cur":{"v":3,"from":{"at":"2021-06-29T17:53:23.642Z","gameId":"pfcnjgik"},"to":{"at":"2021-06-29T18:04:48.358Z","gameId":"6sPaGL8T"}},"max":{"v":14,"from":{"at":"2018-06-11T14:43:39.296Z","gameId":"1fc9dqun"},"to":{"at":"2018-06-11T15:10:30.908Z","gameId":"Nzy6UgwY"}}}},"playStreak":{"nb":{"cur":{"v":0},"max":{"v":118,"from":{"at":"2018-06-11T10:32:21.248Z","gameId":"UAsNnJbN"},"to":{"at":"2018-06-11T15:13:01.193Z","gameId":"T7fHRaFG"}}},"time":{"cur":{"v":0},"max":{"v":12683,"from":{"at":"2018-06-12T14:11:14.021Z","gameId":"IrZCAW58"},"to":{"at":"2018-06-12T18:02:57.010Z","gameId":"RNF1mQ68"}}},"lastDate":"2021-06-29T18:04:48.358Z"}}}
 */
export type PerfStat = any;

/**
 * @example {"bullet":[{"id":"bahadirozen","username":"BahadirOzen","perfs":{"bullet":{"rating":3018,"progress":18}},"online":true,"title":"FM"},{"id":"penguingim1","username":"penguingim1","perfs":{"bullet":{"rating":2983,"progress":-36}},"title":"GM","online":true,"patron":true},{"id":"night-king96","username":"Night-King96","perfs":{"bullet":{"rating":2958,"progress":35}},"title":"GM"}],"blitz":[],"rapid":[],"classical":[],"ultraBullet":[],"chess960":[],"crazyhouse":[],"antichess":[],"atomic":[],"horde":[],"kingOfTheHill":[],"racingKings":[],"threeCheck":[]}
 */
export type Top10S = any;

/**
 * @example {"users":[{"id":"bahadirozen","username":"BahadirOzen","perfs":{"bullet":{"rating":3018,"progress":18}},"online":true,"title":"FM"},{"id":"penguingim1","username":"penguingim1","perfs":{"bullet":{"rating":2983,"progress":-36}},"title":"GM","online":true,"patron":true},{"id":"night-king96","username":"Night-King96","perfs":{"bullet":{"rating":2958,"progress":35}},"title":"GM"}]}
 */
export type Leaderboard = any;

export interface UserPreferences {
  /** @example true */
  dark?: boolean;

  /** @example false */
  transp?: boolean;

  /** @format uri */
  bgImg?: string;

  /** @example false */
  is3d?: boolean;
  theme?:
    | "blue"
    | "blue2"
    | "blue3"
    | "blue-marble"
    | "canvas"
    | "wood"
    | "wood2"
    | "wood3"
    | "wood4"
    | "maple"
    | "maple2"
    | "brown"
    | "leather"
    | "green"
    | "marble"
    | "green-plastic"
    | "grey"
    | "metal"
    | "olive"
    | "newspaper"
    | "purple"
    | "purple-diag"
    | "pink"
    | "ic";
  pieceSet?:
    | "cburnett"
    | "merida"
    | "alpha"
    | "pirouetti"
    | "chessnut"
    | "chess7"
    | "reillycraig"
    | "companion"
    | "riohacha"
    | "kosal"
    | "leipzig"
    | "fantasy"
    | "spatial"
    | "california"
    | "pixel"
    | "maestro"
    | "fresca"
    | "cardinal"
    | "gioco"
    | "tatiana"
    | "staunty"
    | "governor"
    | "dubrovny"
    | "icpieces"
    | "shapes"
    | "letter";
  theme3d?:
    | "Black-White-Aluminium"
    | "Brushed-Aluminium"
    | "China-Blue"
    | "China-Green"
    | "China-Grey"
    | "China-Scarlet"
    | "Classic-Blue"
    | "Gold-Silver"
    | "Light-Wood"
    | "Power-Coated"
    | "Rosewood"
    | "Marble"
    | "Wax"
    | "Jade"
    | "Woodi";
  pieceSet3d?:
    | "Basic"
    | "Wood"
    | "Metal"
    | "RedVBlue"
    | "ModernJade"
    | "ModernWood"
    | "Glass"
    | "Trimmed"
    | "Experimental"
    | "Staunton"
    | "CubesAndPi";
  soundSet?:
    | "silent"
    | "standard"
    | "piano"
    | "nes"
    | "sfx"
    | "futuristic"
    | "robot"
    | "music"
    | "speech";

  /** @example 0 */
  blindfold?: number;

  /** @example 2 */
  autoQueen?: number;

  /** @example 2 */
  autoThreefold?: number;

  /** @example 3 */
  takeback?: number;

  /** @example 3 */
  moretime?: number;

  /** @example 1 */
  clockTenths?: number;

  /** @example true */
  clockBar?: boolean;

  /** @example true */
  clockSound?: boolean;

  /** @example true */
  premove?: boolean;

  /** @example 2 */
  animation?: number;

  /** @example true */
  captured?: boolean;

  /** @example true */
  follow?: boolean;

  /** @example true */
  highlight?: boolean;

  /** @example true */
  destination?: boolean;

  /** @example 2 */
  coords?: number;

  /** @example 2 */
  replay?: number;

  /** @example 4 */
  challenge?: number;

  /** @example 3 */
  message?: number;

  /** @example 2 */
  coordColor?: number;

  /** @example 4 */
  submitMove?: number;

  /** @example 1 */
  confirmResign?: number;

  /** @example 1 */
  insightShare?: number;

  /** @example 0 */
  keyboardMove?: number;

  /** @example 0 */
  zen?: number;

  /** @example 2 */
  moveEvent?: number;

  /** @example 1 */
  rookCastle?: number;
}

export interface ArenaTournaments {
  created?: ArenaTournament[];
  started?: ArenaTournament[];
  finished?: ArenaTournament[];
}

/**
 * @example {"id":"QITRjufu","fullName":"U1700 SuperBlitz Arena","clock":{"increment":0,"limit":180},"minutes":57,"createdBy":"lichess","system":"arena","secondsToStart":0,"secondsToFinish":36000,"isFinished":true,"isRecentlyFinished":true,"pairingsClosed":true,"startsAt":"2018-04-04T01:00:00.000Z","nbPlayers":154,"perf":{"icon":")","key":"blitz","name":"Blitz","position":1},"schedule":{"freq":"hourly","speed":"superblitz"},"variant":{"key":"standard","name":"Standard","short":"Std"},"duels":[{"id":"0MM6q4tQ","p":[{"n":"player1","r":1500,"k":3},{"n":"player2","r":1500,"k":3}]}],"standings":{"page":1,"players":[{"name":"player1","rank":1,"rating":1500,"score":3,"sheet":{"scores":[{"0":2,"1":2},{"0":4,"1":3},0],"total":6,"fire":true}}]},"featured":{"id":"khe72Fer","fen":"rn1qkb1r/pQ3ppp/2b2n2/8/5P2/4P3/PP4PP/RNB1KBNR","color":"black","lastMove":"d7c6","white":{"rank":2,"name":"player1","rating":1360},"black":{"rank":5,"name":"player2","rating":1431}},"podium":[{"name":"player1","rank":1,"rating":1500,"score":3,"sheet":{"scores":[{"0":2,"1":2},{"0":4,"1":3},0],"total":6,"fire":true},"nb":{"game":3,"beserk":0,"win":2},"performance":1787}],"stats":{"games":454,"moves":27542,"whiteWins":236,"blackWins":207,"draws":11,"berserks":0,"averageRating":1320}}
 */
export type ArenaTournament = any;

/**
 * @example {"rated":true,"clock":{"increment":0,"limit":300},"createdBy":"thibault","greatPlayer":{"name":"Wang","url":"https://wikipedia.org/wiki/Wang_Hao_(chess_player)"},"id":"ZmKWCOye","name":"Wang","nbOngoing":0,"nbPlayers":0,"nbRounds":2,"nextRound":{"at":"2020-05-11T12:23:18.233-06:00","in":600},"quote":{"author":"Emanuel Lasker","text":"By what right does White, in an absolutely even position, such as after move one, when both sides have advanced 1. e4, sacrifice a pawn, whose recapture is quite uncertain, and open up his kingside to attack? And then follow up this policy by leaving the check of the black queen open? None whatever !"},"round":0,"startsAt":"2020-05-11T12:23:18.233-06:00","status":"created","variant":"standard"}
 */
export type SwissTournament = any;

/**
 * @example {"fullName":"GM ChessWeeb simul","host":{"id":"chessweeb","name":"ChessWeeb","rating":1500,"title":"GM"},"id":"pDGbxhUe","isCreated":false,"isFinished":true,"isRunning":false,"name":"GM ChessWeeb","nbApplicants":0,"nbPairings":24,"text":"","variants":[{"icon":"+","key":"standard","name":"Standard"}]}
 */
export type Simul = any;

/**
 * @example {"tour":{"description":"Match for 1st 2nd and 3rd place.","id":"QYiOYnl1","name":"New in Chess Classic | Finals","slug":"new-in-chess-classic--finals","url":"https://lichess.org/broadcast/new-in-chess-classic--finals/phgcXuBl"},"rounds":[{"id":"BueO56UJ","name":"Finals Day 1","slug":"finals-day-1","url":"https://lichess.org/broadcast/new-in-chess-classic--finals/finals-day-1/BueO56UJ"},{"id":"yeGGfkfY","name":"Finals Day 2","slug":"finals-day-2","url":"https://lichess.org/broadcast/new-in-chess-classic--finals/finals-day-2/yeGGfkfY"}]}
 */
export type BroadcastTour = any;

/**
 * @example {"id":"BueO56UJ","name":"Finals Day 1","slug":"finals-day-1","url":"https://lichess.org/broadcast/new-in-chess-classic--finals/finals-day-1/BueO56UJ","games":[{"id":"GRjidNTw","name":"Martin Fargac - Vit Kostka","ongoing":true,"res":"*","url":"http://l.org/broadcast/isreali-championship/round-4/iCEwAzEX/GRjidNTw"},{"id":"81TcKCWT","name":"Pavel Zabystrzan - Kilian Slovak","res":"½-½","url":"http://l.org/broadcast/isreali-championship/round-4/iCEwAzEX/tJpK7gbl"},{"id":"xEfufedI","name":"Roman Pilch - Bartolomej Buchta","res":"1-0","url":"http://l.org/broadcast/isreali-championship/round-4/iCEwAzEX/xEfufedI"}]}
 */
export type BroadcastRound = any;

/**
 * @example {"white":1443,"draws":3787,"black":1156,"moves":[{"uci":"c6d5","san":"cxd5","averageRating":2423,"white":1443,"draws":3787,"black":1155,"game":null},{"uci":"g8f6","san":"Nf6","averageRating":2515,"white":0,"draws":0,"black":1,"game":{"id":"1EErB5jc","winner":"black","white":{"name":"Drozdovskij, Yuri","rating":2509},"black":{"name":"Dobrov, Vladimir","rating":2515},"year":2006,"month":"2006-01"}}],"topGames":[{"uci":"c6d5","id":"kN6d9l2i","winner":"black","white":{"name":"Carlsen, M.","rating":2881},"black":{"name":"Anand, V.","rating":2785},"year":2014,"month":"2014-06"},{"uci":"c6d5","id":"qeYPJL2y","winner":"white","white":{"name":"So, W.","rating":2778},"black":{"name":"Carlsen, M.","rating":2843},"year":2018,"month":"2018-06"}],"recentGames":[],"opening":{"eco":"D10","name":"Slav Defense: Exchange Variation"}}
 */
export type OpeningExplorerJson = any;

/**
 * @example {"white":354,"draws":22,"black":268,"moves":[{"uci":"c2c4","san":"c4","averageOpponentRating":1696,"white":349,"draws":22,"black":261,"game":null},{"uci":"c2c3","san":"c3","averageOpponentRating":1796,"white":2,"draws":0,"black":2,"game":null},{"uci":"g1f3","san":"Nf3","averageOpponentRating":1496,"white":1,"draws":0,"black":2,"game":null},{"uci":"e2e4","san":"e4","averageOpponentRating":1762,"white":1,"draws":0,"black":2,"game":null},{"uci":"h2h4","san":"h4","averageOpponentRating":1674,"white":0,"draws":0,"black":1,"game":{"id":"9vA24xBn","winner":"black","speed":"bullet","mode":"rated","white":{"name":"revoof","rating":1657},"black":{"name":"MentalBlood","rating":1674},"year":2020,"month":"2020-06"}},{"uci":"h2h3","san":"h3","averageOpponentRating":1696,"white":1,"draws":0,"black":0,"game":{"id":"zyI4GGKv","winner":"white","speed":"bullet","mode":"rated","white":{"name":"revoof","rating":1702},"black":{"name":"gocool99","rating":1696},"year":2020,"month":"2020-07"}}],"recentGames":[{"uci":"c2c4","id":"xOwRVjjt","winner":"white","speed":"blitz","mode":"rated","white":{"name":"revoof","rating":1799},"black":{"name":"VLASNAME","rating":1076},"year":2021,"month":"2021-10"}],"opening":{"eco":"D00","name":"Queen's Pawn Game"}}
 */
export type OpeningExplorerPlayerJson = any;

/**
 * @example {"dtz":1,"precise_dtz":1,"dtm":17,"checkmate":false,"stalemate":false,"variant_win":false,"variant_loss":false,"insufficient_material":false,"category":"win","moves":[{"uci":"h7h8q","san":"h8=Q+","dtz":-2,"precise_dtz":-2,"dtm":-16,"zeroing":true,"checkmate":false,"stalemate":false,"variant_win":false,"variant_loss":false,"insufficient_material":false,"category":"loss"}]}
 */
export interface TablebaseJson {
  /**
   * `cursed-win` and `blessed-loss` means the 50-move rule prevents
   * the decisive result.
   *
   * `maybe-win` and `maybe-loss` means exact result is unknown due to
   * [DTZ rounding](https://syzygy-tables.info/metrics#dtz), i.e., the
   * win or loss could also be prevented by the 50-move rule if
   * the user has deviated from the tablebase recommendation since the
   * last pawn move or capture.
   */
  category?:
    | "win"
    | "unknown"
    | "maybe-win"
    | "cursed-win"
    | "draw"
    | "blessed-loss"
    | "maybe-loss"
    | "loss";

  /**
   * [DTZ50'' with rounding](https://syzygy-tables.info/metrics#dtz) or null if unknown
   *
   */
  dtz?: number;

  /**
   * DTZ50'' (only if guaranteed to be not rounded) or null if unknown
   *
   */
  precise_dtz?: number;

  /** Distance to mate (only for positions with not more than 5 pieces) */
  dtm?: number;
  checkmate?: boolean;
  stalemate?: boolean;

  /** Only in chess variants */
  variant_win?: boolean;

  /** Only in chess variants */
  variant_loss?: boolean;
  insufficient_material?: boolean;

  /** Information about legal moves, best first */
  moves?: Move[];
}

export interface Move {
  /** @example h7h8q */
  uci?: string;

  /** @example h8=Q+ */
  san?: string;
  category?:
    | "loss"
    | "unknown"
    | "maybe-loss"
    | "blessed-loss"
    | "draw"
    | "cursed-win"
    | "maybe-win"
    | "win";

  /** DTZ50'' with rounding or null if unknown */
  dtz?: number;

  /**
   * DTZ50'' (only if guaranteed to be not rounded) or null if unknown
   *
   */
  precise_dtz?: number;

  /** Distance to mate (only for positions with not more than 5 pieces) */
  dtm?: number;
  zeroing?: boolean;
  checkmate?: boolean;
  stalemate?: boolean;
  variant_win?: boolean;
  variant_loss?: boolean;
  insufficient_material?: boolean;
}

export interface Team {
  /** @example coders */
  id?: string;

  /** @example Coders */
  name?: string;

  /**
   * @example There are 10 kinds of people in the world: those who understand binary, and the others.
   *
   * If you want to join the team, prove (briefly) that you can code in the request message!
   */
  description?: string;

  /** @example false */
  open?: boolean;
  leader?: LightUser;
  leaders?: LightUser[];

  /** @example 3129 */
  nbMembers?: number;

  /** @example Planet Earth */
  location?: string | null;
}

export interface GameEventPlayer {
  aiLevel?: number;
  id?: string;
  name?: string;
  title?: string | null;
  rating?: number;
  provisional?: boolean;
}

export interface GameFullEvent {
  type: string;
  id: string;
  variant: Variant;
  clock: Clock | null;
  speed: Speed;
  perf: { name?: string };
  rated: boolean;
  createdAt: number;
  white: GameEventPlayer;
  black: GameEventPlayer;
  initialFen: string;
  state: GameStateEvent;
  tournamentId?: string;
}

export interface GameStateEvent {
  type: string;

  /** Current moves in UCI format */
  moves: string;

  /** Integer of milliseconds White has left on the clock */
  wtime: number;

  /** Integer of milliseconds Black has left on the clock */
  btime: number;

  /** Integer of White Fisher increment. */
  winc: number;

  /** Integer of Black Fisher increment. */
  binc: number;

  /** Game status code. https://github.com/ornicar/scalachess/blob/0a7d6f2c63b1ca06cd3c958ed3264e738af5c5f6/src/main/scala/Status.scala#L16-L28 */
  status: GameStatus;

  /** Color of the winner, if any */
  winner?: string;

  /** true if white is offering draw, else omitted */
  wdraw?: boolean;

  /** true if black is offering draw, else omitted */
  bdraw?: boolean;

  /** true if white is proposing takeback, else omitted */
  wtakeback?: boolean;

  /** true if black is proposing takeback, else omitted */
  btakeback?: boolean;
}

export interface ChatLineEvent {
  type: string;
  room: "player" | "spectator";
  username: string;
  text: string;
}

export interface GameEventInfo {
  id?: string;
  source?:
    | "lobby"
    | "friend"
    | "ai"
    | "api"
    | "tournament"
    | "position"
    | "import"
    | "importlive"
    | "simul"
    | "relay"
    | "pool"
    | "swiss";
  compat?: { bot?: boolean; board?: boolean };
}

export interface GameStartEvent {
  type?: string;
  game?: GameEventInfo;
}

export interface GameFinishEvent {
  type?: string;
  game?: GameEventInfo;
}

export interface ChallengeEvent {
  type?: string;
  challenge?: ChallengeJson;
}

export interface ChallengeCanceledEvent {
  type?: string;
  challenge?: ChallengeJson;
}

export interface ChallengeDeclinedEvent {
  type?: string;
  challenge?: ChallengeJson;
}

/**
 * @example {"ok":true}
 */
export interface Ok {
  ok?: boolean;
}

/**
 * @example {"error":"This request is invalid because [...]"}
 */
export interface Error {
  /** The cause of the error. */
  error?: string;
}

/**
 * @example {"error":"Not found."}
 */
export interface NotFound {
  error?: string;
}

/**
 * @example {"error":"This user cannot edit this swiss"}
 */
export interface SwissUnauthorisedEdit {
  error?: string;
}

/**
 * @example [{"id":"LuGQwhBb","variant":{"key":"standard","name":"Standard","short":"Std"},"speed":"blitz","perf":"blitz","rated":true,"initialFen":"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1","fen":"rnbqkb1r/1p1ppppp/p6n/2p4Q/8/1P2P3/P1PP1PPP/RNB1KBNR w KQkq - 0 4","player":"white","turns":6,"startedAtTurn":0,"source":"pool","status":{"id":20,"name":"started"},"createdAt":1620029815106,"lastMove":"c7c5"},{"fen":"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w","wc":180,"bc":180},{"fen":"rnbqkbnr/pppppppp/8/8/8/4P3/PPPP1PPP/RNBQKBNR b","lm":"e2e3","wc":180,"bc":180},{"fen":"rnbqkb1r/pppppppp/7n/8/8/4P3/PPPP1PPP/RNBQKBNR w","lm":"g8h6","wc":180,"bc":180},{"fen":"rnbqkb1r/pppppppp/7n/8/8/1P2P3/P1PP1PPP/RNBQKBNR b","lm":"b2b3","wc":177,"bc":180},{"fen":"rnbqkb1r/1ppppppp/p6n/8/8/1P2P3/P1PP1PPP/RNBQKBNR w","lm":"a7a6","wc":177,"bc":177}]
 */
export type MoveStream = any;

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://lichess.org";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(
      typeof value === "number" ? value : `${value}`
    )}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key]
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (
    cancelToken: CancelToken
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${
        queryString ? `?${queryString}` : ""
      }`,
      {
        ...requestParams,
        headers: {
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
          ...(requestParams.headers || {}),
        },
        signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      }
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Lichess.org API reference
 * @version 2.0.0
 * @baseUrl https://lichess.org
 * @contact Lichess.org API <contact@lichess.org> (https://lichess.org/api)
 *
 * # Introduction
 * Welcome to the reference for the Lichess API! Lichess is free/libre,
 * open-source chess server powered by volunteers and donations.
 * - Get help in the [Lichess Discord channel](https://discord.gg/lichess)
 * - [Contribute to this documentation on Github](https://github.com/lichess-org/api)
 * - Check out [Lichess widgets to embed in your website](https://lichess.org/developers)
 * - [Download all Lichess rated games](https://database.lichess.org/)
 * - [Download all Lichess puzzles with themes, ratings and votes](https://database.lichess.org/#puzzles)
 *
 * ## Endpoint
 * All requests go to `https://lichess.org` (unless otherwise specified).
 *
 * ## Clients
 * - [Python general API](https://github.com/ZackClements/berserk)
 * - [MicroPython general API](https://github.com/mkomon/uberserk)
 * - [Python general API - async](https://pypi.org/project/async-lichess-sdk)
 * - [Python Lichess Bot](https://github.com/ShailChoksi/lichess-bot)
 * - [Python Board API for Certabo](https://github.com/haklein/certabo-lichess)
 * - [Java general API](https://github.com/tors42/chariot)
 *
 * ## Rate limiting
 * All requests are rate limited using various strategies,
 * to ensure the API remains responsive for everyone.
 * Only make one request at a time.
 * If you receive an HTTP response with a [429 status](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#429),
 * please wait a full minute before resuming API usage.
 *
 * ## Streaming with ND-JSON
 * Some API endpoints stream their responses as [Newline Delimited JSON a.k.a. **nd-json**](http://ndjson.org/), with one JSON object per line.
 *
 * Here's a [JavaScript utility function](https://gist.github.com/ornicar/a097406810939cf7be1df8ea30e94f3e) to help reading NDJSON streamed responses.
 *
 * # Authentication
 *
 * <!-- ReDoc-Inject: <security-definitions> -->
 */
export class Api<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  api = {
    /**
     * @description Read the `online`, `playing` and `streaming` flags of several users. This API is very fast and cheap on lichess side. So you can call it quite often (like once every 5 seconds). Use it to track players and know when they're connected on lichess and playing games.
     *
     * @tags Users
     * @name ApiUsersStatus
     * @summary Get real-time users status
     * @request GET:/api/users/status
     * @response `200` `({ id?: string, name?: string, title?: string | null, online?: boolean | null, playing?: boolean | null, streaming?: boolean | null, patron?: boolean | null })[]` The list of users and their respective statuses.
     */
    apiUsersStatus: (
      query: { ids: string; withGameIds?: boolean },
      params: RequestParams = {}
    ) =>
      this.http.request<
        {
          id?: string;
          name?: string;
          title?: string | null;
          online?: boolean | null;
          playing?: boolean | null;
          streaming?: boolean | null;
          patron?: boolean | null;
        }[],
        any
      >({
        path: `/api/users/status`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Read public data of a user.
     *
     * @tags Users
     * @name ApiUser
     * @summary Get user public data
     * @request GET:/api/user/{username}
     * @response `200` `UserExtended` The information of the user.
     */
    apiUser: (username: string, params: RequestParams = {}) =>
      this.http.request<UserExtended, any>({
        path: `/api/user/${username}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Read rating history of a user, for all perf types. There is at most one entry per day. Format of an entry is `[year, month, day, rating]`. `month` starts at zero (January).
     *
     * @tags Users
     * @name ApiUserRatingHistory
     * @summary Get rating history of a user
     * @request GET:/api/user/{username}/rating-history
     * @response `200` `RatingHistory` The rating history of the user.
     */
    apiUserRatingHistory: (username: string, params: RequestParams = {}) =>
      this.http.request<RatingHistory, any>({
        path: `/api/user/${username}/rating-history`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Read performance statistics of a user, for a single performance. Similar to the [performance pages on the website](https://lichess.org/@/thibault/perf/bullet).
     *
     * @tags Users
     * @name ApiUserPerf
     * @summary Get performance statistics of a user
     * @request GET:/api/user/{username}/perf/{perf}
     * @response `200` `PerfStat` The performance statistics of the user
     */
    apiUserPerf: (
      username: string,
      perf: PerfType,
      params: RequestParams = {}
    ) =>
      this.http.request<PerfStat, any>({
        path: `/api/user/${username}/perf/${perf}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Read data to generate the activity feed of a user.
     *
     * @tags Users
     * @name ApiUserActivity
     * @summary Get user activity
     * @request GET:/api/user/{username}/activity
     * @response `200` `void` The activity feed of the user.
     */
    apiUserActivity: (username: string, params: RequestParams = {}) =>
      this.http.request<void, any>({
        path: `/api/user/${username}/activity`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get the daily Lichess puzzle in JSON format. Alternatively, you can [post it in your slack workspace](https://lichess.org/daily-puzzle-slack).
     *
     * @tags Puzzles
     * @name ApiPuzzleDaily
     * @summary Get the daily puzzle
     * @request GET:/api/puzzle/daily
     * @response `200` `PuzzleJson` The daily puzzle.
     */
    apiPuzzleDaily: (params: RequestParams = {}) =>
      this.http.request<PuzzleJson, any>({
        path: `/api/puzzle/daily`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Download your puzzle activity in [ndjson](#section/Introduction/Streaming-with-ND-JSON) format. Puzzle activity is sorted by reverse chronological order (most recent first) We recommend streaming the response, for it can be very long.
     *
     * @tags Puzzles
     * @name ApiPuzzleActivity
     * @summary Get your puzzle activity
     * @request GET:/api/puzzle/activity
     * @secure
     * @response `200` `PuzzleRoundJson` The puzzle activity of the logged in user.
     */
    apiPuzzleActivity: (query?: { max?: number }, params: RequestParams = {}) =>
      this.http.request<PuzzleRoundJson, any>({
        path: `/api/puzzle/activity`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Download your [puzzle dashboard](https://lichess.org/training/dashboard/30/dashboard) as JSON. Also includes all puzzle themes played, with aggregated results. Allows re-creating the [improvement/strengths](https://lichess.org/training/dashboard/30/improvementAreas) interfaces.
     *
     * @tags Puzzles
     * @name ApiPuzzleDashboard
     * @summary Get your puzzle dashboard
     * @request GET:/api/puzzle/dashboard/{days}
     * @secure
     * @response `200` `PuzzleDashboardJson` The puzzle dashboard of the logged in user.
     */
    apiPuzzleDashboard: (days: number, params: RequestParams = {}) =>
      this.http.request<PuzzleDashboardJson, any>({
        path: `/api/puzzle/dashboard/${days}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Download the [storm dashboard](https://lichess.org/storm/dashboard/mrbasso) of any player as JSON. Contains the aggregated highscores, and the history of storm runs aggregated by days. Use `?days=0` if you only care about the highscores.
     *
     * @tags Puzzles
     * @name ApiStormDashboard
     * @summary Get the storm dashboard of a player
     * @request GET:/api/storm/dashboard/{username}
     * @response `200` `StormDashboardJson` The storm dashboard of a player.
     */
    apiStormDashboard: (
      username: string,
      query?: { days?: number },
      params: RequestParams = {}
    ) =>
      this.http.request<StormDashboardJson, any>({
        path: `/api/storm/dashboard/${username}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get up to 300 users by their IDs. Users are returned in the same order as the IDs. The method is `POST` so a longer list of IDs can be sent in the request body.
     *
     * @tags Users
     * @name ApiUsers
     * @summary Get users by ID
     * @request POST:/api/users
     * @response `200` `(User)[]` The list of users.
     */
    apiUsers: (data: string, params: RequestParams = {}) =>
      this.http.request<User[], any>({
        path: `/api/users`,
        method: "POST",
        body: data,
        format: "json",
        ...params,
      }),

    /**
     * @description Public informations about the logged in user.
     *
     * @tags Account
     * @name AccountMe
     * @summary Get my profile
     * @request GET:/api/account
     * @secure
     * @response `200` `UserExtended` The public informations about the logged in user.
     */
    accountMe: (params: RequestParams = {}) =>
      this.http.request<UserExtended, any>({
        path: `/api/account`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Read the email address of the logged in user.
     *
     * @tags Account
     * @name AccountEmail
     * @summary Get my email address
     * @request GET:/api/account/email
     * @secure
     * @response `200` `{ email?: string }` The email address of the logged in user.
     */
    accountEmail: (params: RequestParams = {}) =>
      this.http.request<{ email?: string }, any>({
        path: `/api/account/email`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Read the preferences of the logged in user. - <https://lichess.org/account/preferences/game-display> - <https://github.com/ornicar/lila/blob/master/modules/pref/src/main/Pref.scala>
     *
     * @tags Account
     * @name Account
     * @summary Get my preferences
     * @request GET:/api/account/preferences
     * @secure
     * @response `200` `{ prefs?: UserPreferences, language?: string }` The preferences of the logged in user.
     */
    account: (params: RequestParams = {}) =>
      this.http.request<{ prefs?: UserPreferences; language?: string }, any>({
        path: `/api/account/preferences`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Read the kid mode status of the logged in user. - <https://lichess.org/account/kid>
     *
     * @tags Account
     * @name AccountKid
     * @summary Get my kid mode status
     * @request GET:/api/account/kid
     * @secure
     * @response `200` `{ kid?: boolean }` The kid mode status of the logged in user.
     */
    accountKid: (params: RequestParams = {}) =>
      this.http.request<{ kid?: boolean }, any>({
        path: `/api/account/kid`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Set the kid mode status of the logged in user. - <https://lichess.org/account/kid>
     *
     * @tags Account
     * @name AccountKidPost
     * @summary Set my kid mode status
     * @request POST:/api/account/kid
     * @secure
     * @response `200` `Ok` The kid mode status was set successfully for the logged in user.
     */
    accountKidPost: (query: { v: boolean }, params: RequestParams = {}) =>
      this.http.request<Ok, any>({
        path: `/api/account/kid`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Download the ongoing game, or the last game played, of a user. Available in either PGN or JSON format. If the game is ongoing, the 3 last moves are omitted.
     *
     * @tags Games
     * @name ApiUserCurrentGame
     * @summary Export ongoing game of a user
     * @request GET:/api/user/{username}/current-game
     * @response `200` `GamePgn` The ongoing (or last) game of a user.
     */
    apiUserCurrentGame: (
      username: string,
      query?: {
        moves?: boolean;
        pgnInJson?: boolean;
        tags?: boolean;
        clocks?: boolean;
        evals?: boolean;
        opening?: boolean;
        literate?: boolean;
        players?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GamePgn, any>({
        path: `/api/user/${username}/current-game`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Download all games of any user in PGN or [ndjson](#section/Introduction/Streaming-with-ND-JSON) format. Games are sorted by reverse chronological order (most recent first) We recommend streaming the response, for it can be very long. <https://lichess.org/@/german11> for instance has more than 500,000 games. The game stream is throttled, depending on who is making the request: - Anonymous request: 20 games per second - [OAuth2 authenticated](#section/Authentication) request: 30 games per second - Authenticated, downloading your own games: 60 games per second
     *
     * @tags Games
     * @name ApiGamesUser
     * @summary Export games of a user
     * @request GET:/api/games/user/{username}
     * @secure
     * @response `200` `GamePgn` The games of the user.
     */
    apiGamesUser: (
      username: string,
      query?: {
        since?: number;
        until?: number;
        max?: number;
        vs?: string;
        rated?: boolean;
        perfType?: PerfType;
        color?: "white" | "black";
        analysed?: boolean;
        moves?: boolean;
        pgnInJson?: boolean;
        tags?: boolean;
        clocks?: boolean;
        evals?: boolean;
        opening?: boolean;
        ongoing?: boolean;
        finished?: boolean;
        players?: string;
        sort?: "dateAsc" | "dateDesc";
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GamePgn, any>({
        path: `/api/games/user/${username}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Stream the games played between a list of users, in real time. Only games where **both players** are part of the list are included. By default, games are only sent to the stream when they start. To also get all ongoing games at the beginning of the stream, use the `withCurrentGames` flag. Maximum number of users: 300. Games are streamed as [ndjson](#section/Introduction/Streaming-with-ND-JSON). The method is `POST` so a longer list of IDs can be sent in the request body.
     *
     * @tags Games
     * @name GamesByUsers
     * @summary Stream games of users
     * @request POST:/api/stream/games-by-users
     * @response `200` `ChallengeOpenJson` The stream of the games played between the users.
     */
    gamesByUsers: (
      data: string,
      query?: { withCurrentGames?: boolean },
      params: RequestParams = {}
    ) =>
      this.http.request<ChallengeOpenJson, any>({
        path: `/api/stream/games-by-users`,
        method: "POST",
        query: query,
        body: data,
        ...params,
      }),

    /**
     * @description Get the ongoing games of the current user. Real-time and correspondence games are included. The most urgent games are listed first.
     *
     * @tags Games
     * @name ApiAccountPlaying
     * @summary Get my ongoing games
     * @request GET:/api/account/playing
     * @secure
     * @response `200` `ChallengeOpenJson` The ongoing games of the logged in user.
     */
    apiAccountPlaying: (query?: { nb?: number }, params: RequestParams = {}) =>
      this.http.request<ChallengeOpenJson, any>({
        path: `/api/account/playing`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Stream positions and moves of any ongoing game, in [ndjson](#section/Introduction/Streaming-with-ND-JSON). A description of the game is sent as a first message. Then a message is sent each time a move is played. Finally a description of the game is sent when it finishes, and the stream is closed. After move 5, the stream intentionally remains 3 moves behind the game status, as to prevent cheat bots from using this API. No more than 8 game streams can be opened at the same time from the same IP address.
     *
     * @tags Games
     * @name StreamGame
     * @summary Stream moves of a game
     * @request GET:/api/stream/game/{id}
     * @response `200` `MoveStream` The stream of the game moves.
     */
    streamGame: (id: string, params: RequestParams = {}) =>
      this.http.request<MoveStream, any>({
        path: `/api/stream/game/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Import a game from PGN. See <https://lichess.org/paste>. Rate limiting: 200 games per hour for OAuth requests, 100 games per hour for anonymous requests. To broadcast ongoing games, consider [pushing to a broadcast instead](#operation/broadcastPush).
     *
     * @tags Games
     * @name GameImport
     * @summary Import one game
     * @request POST:/api/import
     * @secure
     * @response `200` `ChallengeOpenJson` The game was successfully imported.
     */
    gameImport: (data: { pgn?: string }, params: RequestParams = {}) =>
      this.http.request<ChallengeOpenJson, any>({
        path: `/api/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Get basic info about the best games being played for each speed and variant, but also computer games and bot games. See [lichess.org/tv](https://lichess.org/tv).
     *
     * @tags TV
     * @name TvChannels
     * @summary Get current TV games
     * @request GET:/api/tv/channels
     * @response `200` `ChallengeOpenJson` The list of games being played for each speed and variant.
     */
    tvChannels: (params: RequestParams = {}) =>
      this.http.request<ChallengeOpenJson, any>({
        path: `/api/tv/channels`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Stream positions and moves of the current [TV game](https://lichess.org/tv) in [ndjson](#section/Introduction/Streaming-with-ND-JSON). A summary of the game is sent as a first message, and when the featured game changes. Try it with `curl https://lichess.org/api/tv/feed`.
     *
     * @tags TV
     * @name TvFeed
     * @summary Stream current TV game
     * @request GET:/api/tv/feed
     * @response `200` `ChallengeOpenJson` The stream of the current TV game.
     */
    tvFeed: (params: RequestParams = {}) =>
      this.http.request<ChallengeOpenJson, any>({
        path: `/api/tv/feed`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Get a list of ongoing games for a given TV channel. Similar to [lichess.org/games](https://lichess.org/games). Available in PGN or [ndjson](#section/Introduction/Streaming-with-ND-JSON) format, depending on the request Accept header.
     *
     * @tags TV
     * @name TvChannelGames
     * @summary Get best ongoing games of a TV channel
     * @request GET:/api/tv/{channel}
     * @response `200` `GamePgn` The representation of the games.
     */
    tvChannelGames: (
      channel: string,
      query?: {
        nb?: number;
        moves?: boolean;
        pgnInJson?: boolean;
        tags?: boolean;
        clocks?: boolean;
        opening?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GamePgn, any>({
        path: `/api/tv/${channel}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Get recently finished, ongoing, and upcoming tournaments. This API is used to display the [Lichess tournament schedule](https://lichess.org/tournament).
     *
     * @tags Arena tournaments
     * @name ApiTournament
     * @summary Get current tournaments
     * @request GET:/api/tournament
     * @response `200` `ArenaTournaments` The list of current tournaments.
     */
    apiTournament: (params: RequestParams = {}) =>
      this.http.request<ArenaTournaments, any>({
        path: `/api/tournament`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Create a public or private Arena tournament. This endpoint mirrors the form on <https://lichess.org/tournament/new>. You can create up to 12 public tournaments per day, or 24 private tournaments. A team battle can be created by specifying the `teambBattleByTeam` argument.
     *
     * @tags Arena tournaments
     * @name ApiTournamentPost
     * @summary Create a new Arena tournament
     * @request POST:/api/tournament
     * @secure
     * @response `200` `ArenaTournament` The Arena tournament has been successfully created.
     * @response `400` `Error` The creation of the Arena tournament failed.
     */
    apiTournamentPost: (
      data: {
        name?: string;
        clockTime:
          | 0
          | 0.25
          | 0.5
          | 0.75
          | 1
          | 1.5
          | 2
          | 3
          | 4
          | 5
          | 6
          | 7
          | 10
          | 15
          | 20
          | 25
          | 30
          | 40
          | 50
          | 60;
        clockIncrement: number;
        minutes: number;
        waitMinutes?: number;
        startDate?: number;
        variant?: VariantKey;
        rated?: boolean;
        position?: string;
        berserkable?: boolean;
        streakable?: boolean;
        hasChat?: boolean;
        description?: string;
        password?: string;
        teambBattleByTeam?: string;
        "conditions.teamMember.teamId"?: string;
        "conditions.minRating.rating"?: number;
        "conditions.maxRating.rating"?: number;
        "conditions.nbRatedGame.nb"?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<ArenaTournament, Error>({
        path: `/api/tournament`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Get detailed info about recently finished, current, or upcoming tournament's duels, player standings, and other info.
     *
     * @tags Arena tournaments
     * @name Tournament
     * @summary Get info about an Arena tournament
     * @request GET:/api/tournament/{id}
     * @response `200` `ArenaTournament` The information of the Arena tournament.
     */
    tournament: (
      id: string,
      query?: { page?: number },
      params: RequestParams = {}
    ) =>
      this.http.request<ArenaTournament, any>({
        path: `/api/tournament/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Update an Arena tournament. Be mindful not to make important changes to ongoing tournaments. Can be used to update a team battle.
     *
     * @tags Arena tournaments
     * @name ApiTournamentUpdate
     * @summary Update an Arena tournament
     * @request POST:/api/tournament/{id}
     * @secure
     * @response `200` `ArenaTournament` The Arena tournament was successfully updated.
     * @response `400` `Error` The update of the Arena tournament failed.
     */
    apiTournamentUpdate: (
      id: string,
      data: {
        name?: string;
        clockTime:
          | 0
          | 0.25
          | 0.5
          | 0.75
          | 1
          | 1.5
          | 2
          | 3
          | 4
          | 5
          | 6
          | 7
          | 10
          | 15
          | 20
          | 25
          | 30
          | 40
          | 50
          | 60;
        clockIncrement: number;
        minutes: number;
        waitMinutes?: number;
        startDate?: number;
        variant?: VariantKey;
        rated?: boolean;
        position?: string;
        berserkable?: boolean;
        streakable?: boolean;
        hasChat?: boolean;
        description?: string;
        password?: string;
        "conditions.minRating.rating"?: number;
        "conditions.maxRating.rating"?: number;
        "conditions.nbRatedGame.nb"?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<ArenaTournament, Error>({
        path: `/api/tournament/${id}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Join an Arena tournament, possibly with a password and/or a team.
     *
     * @tags Arena tournaments
     * @name ApiTournamentJoin
     * @summary Join an Arena tournament
     * @request POST:/api/tournament/{id}/join
     * @secure
     * @response `200` `Ok` The tournament was successfully joined.
     * @response `400` `Error` Joining the tournament failed.
     */
    apiTournamentJoin: (
      id: string,
      data: { password?: string; team?: string },
      params: RequestParams = {}
    ) =>
      this.http.request<Ok, Error>({
        path: `/api/tournament/${id}/join`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Leave a future Arena tournament, or take a break on an ongoing Arena tournament. It's possible to join again later. Points and streaks are preserved.
     *
     * @tags Arena tournaments
     * @name ApiTournamentWithdraw
     * @summary Pause or leave an Arena tournament
     * @request POST:/api/tournament/{id}/withdraw
     * @secure
     * @response `200` `Ok` The tournament was successfully paused or left.
     * @response `400` `Error` Pausing/leaving the tournament failed.
     */
    apiTournamentWithdraw: (id: string, params: RequestParams = {}) =>
      this.http.request<Ok, Error>({
        path: `/api/tournament/${id}/withdraw`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Terminate an Arena tournament
     *
     * @tags Arena tournaments
     * @name ApiTournamentTerminate
     * @summary Terminate an Arena tournament
     * @request POST:/api/tournament/{id}/terminate
     * @secure
     * @response `200` `Ok` The tournament was successfully terminated.
     * @response `400` `Error` Terminating the tournament failed.
     */
    apiTournamentTerminate: (id: string, params: RequestParams = {}) =>
      this.http.request<Ok, Error>({
        path: `/api/tournament/${id}/terminate`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Set the teams and number of leaders of a team battle. To update the other attributes of a team battle, use the [tournament update endpoint](#operation/apiTournamentUpdate).
     *
     * @tags Arena tournaments
     * @name ApiTournamentTeamBattlePost
     * @summary Update a team battle
     * @request POST:/api/tournament/team-battle/{id}
     * @secure
     * @response `200` `ArenaTournament` The team battle tournament was successfully updated.
     * @response `400` `Error` The update of the team battle tournament failed.
     */
    apiTournamentTeamBattlePost: (
      id: string,
      data: { teams: string; nbLeaders: number },
      params: RequestParams = {}
    ) =>
      this.http.request<ArenaTournament, Error>({
        path: `/api/tournament/team-battle/${id}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Download games of a tournament in PGN or [ndjson](#section/Introduction/Streaming-with-ND-JSON) format. Games are sorted by reverse chronological order (most recent first)
     *
     * @tags Arena tournaments
     * @name GamesByTournament
     * @summary Export games of an Arena tournament
     * @request GET:/api/tournament/{id}/games
     * @response `200` `GamePgn` The list of games of an Arena tournament.
     */
    gamesByTournament: (
      id: string,
      query?: {
        player?: string;
        moves?: boolean;
        pgnInJson?: boolean;
        tags?: boolean;
        clocks?: boolean;
        evals?: boolean;
        opening?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GamePgn, any>({
        path: `/api/tournament/${id}/games`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Players of an Arena tournament, with their score and performance, sorted by rank (best first). **Players are streamed as [ndjson](#section/Introduction/Streaming-with-ND-JSON)**, i.e. one JSON object per line. If called on an ongoing tournament, results can be inconsistent due to ranking changes while the players are being streamed. Use on finished tournaments for guaranteed consistency.
     *
     * @tags Arena tournaments
     * @name ResultsByTournament
     * @summary Get results of an Arena tournament
     * @request GET:/api/tournament/{id}/results
     * @response `200` `ChallengeOpenJson` The results of the Arena tournament.
     */
    resultsByTournament: (
      id: string,
      query?: { nb?: number },
      params: RequestParams = {}
    ) =>
      this.http.request<ChallengeOpenJson, any>({
        path: `/api/tournament/${id}/results`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Teams of a team battle tournament, with top players, sorted by rank (best first).
     *
     * @tags Arena tournaments
     * @name TeamsByTournament
     * @summary Get team standing of a team battle
     * @request GET:/api/tournament/{id}/teams
     * @response `200` `ChallengeOpenJson` The list of teams of a team battle tournament, with their respective top players.
     */
    teamsByTournament: (id: string, params: RequestParams = {}) =>
      this.http.request<ChallengeOpenJson, any>({
        path: `/api/tournament/${id}/teams`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get all tournaments created by a given user. Tournaments are sorted by reverse chronological order of start date (last starting first). Tournaments are streamed as [ndjson](#section/Introduction/Streaming-with-ND-JSON).
     *
     * @tags Arena tournaments
     * @name ApiUserNameTournamentCreated
     * @summary Get tournaments created by a user
     * @request GET:/api/user/{username}/tournament/created
     * @response `200` `ArenaTournament` The list of tournaments created by the user.
     */
    apiUserNameTournamentCreated: (
      username: string,
      query?: { status?: 10 | 20 | 30 },
      params: RequestParams = {}
    ) =>
      this.http.request<ArenaTournament, any>({
        path: `/api/user/${username}/tournament/created`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Create a Swiss tournament for your team. This endpoint mirrors the Swiss tournament form from your team pagee. You can create up to 12 tournaments per day.
     *
     * @tags Swiss tournaments
     * @name ApiSwissNew
     * @summary Create a new Swiss tournament
     * @request POST:/api/swiss/new/{teamId}
     * @secure
     * @response `200` `SwissTournament` The Swiss tournament was successfully created.
     * @response `400` `Error` The creation of the Swiss tournament failed.
     */
    apiSwissNew: (
      teamId: string,
      data: {
        name?: string;
        "clock.limit": number;
        "clock.increment": number;
        nbRounds: number;
        startsAt?: number;
        roundInterval?: number;
        variant?: VariantKey;
        description?: string;
        rated?: boolean;
        chatFor?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<SwissTournament, Error>({
        path: `/api/swiss/new/${teamId}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Update a Swiss tournament. Be mindful not to make important changes to ongoing tournaments.
     *
     * @tags Swiss tournaments
     * @name ApiSwissUpdate
     * @summary Update a Swiss tournament.
     * @request POST:/api/swiss/{id}/edit
     * @secure
     * @response `200` `SwissTournament` The Swiss tournament was successfully updated.
     * @response `400` `Error` Updating the swiss failed.
     * @response `401` `SwissUnauthorisedEdit` This user cannot update this Swiss.
     */
    apiSwissUpdate: (
      id: string,
      data: {
        name?: string;
        "clock.limit": number;
        "clock.increment": number;
        nbRounds: number;
        startsAt?: number;
        roundInterval?: number;
        variant?: VariantKey;
        description?: string;
        rated?: boolean;
        chatFor?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<SwissTournament, Error | SwissUnauthorisedEdit>({
        path: `/api/swiss/${id}/edit`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Join a Swiss tournament, possibly with a password.
     *
     * @tags Swiss tournaments
     * @name ApiSwissJoin
     * @summary Join a Swiss tournament
     * @request POST:/api/swiss/{id}/join
     * @secure
     * @response `200` `Ok` The tournament was successfully joined.
     * @response `400` `Error` Joining the tournament failed.
     */
    apiSwissJoin: (
      id: string,
      data: { password?: string },
      params: RequestParams = {}
    ) =>
      this.http.request<Ok, Error>({
        path: `/api/swiss/${id}/join`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Terminate a Swiss tournament
     *
     * @tags Swiss tournaments
     * @name ApiSwissTerminate
     * @summary Terminate a Swiss tournament
     * @request POST:/api/swiss/{id}/terminate
     * @secure
     * @response `200` `Ok` The Swiss tournament was successfully terminated.
     * @response `400` `Error` Terminating the Swiss tournament failed.
     */
    apiSwissTerminate: (id: string, params: RequestParams = {}) =>
      this.http.request<Ok, Error>({
        path: `/api/swiss/${id}/terminate`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Download games of a swiss tournament in PGN or [ndjson](#section/Introduction/Streaming-with-ND-JSON) format. Games are sorted by reverse chronological order (last round first)
     *
     * @tags Swiss tournaments
     * @name GamesBySwiss
     * @summary Export games of a Swiss tournament
     * @request GET:/api/swiss/{id}/games
     * @response `200` `GamePgn` The list of games of a Swiss tournament.
     */
    gamesBySwiss: (
      id: string,
      query?: {
        moves?: boolean;
        pgnInJson?: boolean;
        tags?: boolean;
        clocks?: boolean;
        evals?: boolean;
        opening?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GamePgn, any>({
        path: `/api/swiss/${id}/games`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Players of a swiss tournament, with their score and performance, sorted by rank (best first). Players are streamed as [ndjson](#section/Introduction/Streaming-with-ND-JSON). If called on an ongoing tournament, results can be inconsistent due to ranking changes while the players are being streamed. Use on finished tournaments for guaranteed consistency.
     *
     * @tags Swiss tournaments
     * @name ResultsBySwiss
     * @summary Get results of a swiss tournament
     * @request GET:/api/swiss/{id}/results
     * @response `200` `ChallengeOpenJson` The results of a Swiss tournament.
     */
    resultsBySwiss: (
      id: string,
      query?: { nb?: number },
      params: RequestParams = {}
    ) =>
      this.http.request<ChallengeOpenJson, any>({
        path: `/api/swiss/${id}/results`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Get all swiss tournaments of a team. Tournaments are sorted by reverse chronological order of start date (last starting first). Tournaments are streamed as [ndjson](#section/Introduction/Streaming-with-ND-JSON).
     *
     * @tags Teams, Swiss tournaments
     * @name ApiTeamSwiss
     * @summary Get team swiss tournaments
     * @request GET:/api/team/{teamId}/swiss
     * @response `200` `SwissTournament` The list of Swiss tournaments of a team.
     */
    apiTeamSwiss: (
      teamId: string,
      query?: { max?: number },
      params: RequestParams = {}
    ) =>
      this.http.request<SwissTournament, any>({
        path: `/api/team/${teamId}/swiss`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Download all chapters of a study in PGN format.
     *
     * @tags Studies
     * @name StudyAllChaptersPgn
     * @summary Export all chapters
     * @request GET:/api/study/{studyId}.pgn
     * @response `200` `StudyPgn` The PGN representation of the study.
     */
    studyAllChaptersPgn: (
      studyId: string,
      query?: { clocks?: boolean; comments?: boolean; variations?: boolean },
      params: RequestParams = {}
    ) =>
      this.http.request<StudyPgn, any>({
        path: `/api/study/${studyId}.pgn`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Get all incoming, ongoing, and finished official broadcasts. The broadcasts are sorted by start date, most recent first. Broadcasts are streamed as [ndjson](#section/Introduction/Streaming-with-ND-JSON).
     *
     * @tags Broadcasts
     * @name BroadcastIndex
     * @summary Get official broadcasts
     * @request GET:/api/broadcast
     * @response `200` `(BroadcastTour)[]` The list of official broadcasts.
     */
    broadcastIndex: (query?: { nb?: number }, params: RequestParams = {}) =>
      this.http.request<BroadcastTour[], any>({
        path: `/api/broadcast`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This streaming endpoint first sends all games of a broadcast tournament in PGN format. Then, it waits for new moves to be played. As soon as it happens, the entire PGN of the game is sent to the stream. The stream will also send PGNs when games are added to the tournament. This is the best way to get updates about an ongoing tournament. Streaming means no polling, and no pollings means no latency, and minimum impact on the server.
     *
     * @tags Broadcasts
     * @name BroadcastStreamRoundPgn
     * @summary Stream an ongoing broadcast tournament as PGN
     * @request GET:/api/stream/broadcast/round/{broadcastRoundId}.pgn
     * @response `200` `StudyPgn` The PGN representation of the tournament games, then the PGNs of games as they are updated.
     */
    broadcastStreamRoundPgn: (
      broadcastRoundId: string,
      params: RequestParams = {}
    ) =>
      this.http.request<StudyPgn, any>({
        path: `/api/stream/broadcast/round/${broadcastRoundId}.pgn`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Download all games of a single round of a broadcast tournament in PGN format. You *could* poll this endpoint to get updates about a tournament, but it would be slow, and very inneficient. Instead, consider [streaming the tournament](#operation/broadcastStreamRoundPgn) to get a new PGN every time a game is updated, in real-time.
     *
     * @tags Broadcasts
     * @name BroadcastRoundPgn
     * @summary Export one round as PGN
     * @request GET:/api/broadcast/round/{broadcastRoundId}.pgn
     * @response `200` `StudyPgn` The PGN representation of the round.
     */
    broadcastRoundPgn: (broadcastRoundId: string, params: RequestParams = {}) =>
      this.http.request<StudyPgn, any>({
        path: `/api/broadcast/round/${broadcastRoundId}.pgn`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Download all games of all rounds of a broadcast in PGN format. You may want to [download only the games of a single round](#operation/broadcastRoundPgn) instead.
     *
     * @tags Broadcasts
     * @name BroadcastAllRoundsPgn
     * @summary Export all rounds as PGN
     * @request GET:/api/broadcast/{broadcastTournamentId}.pgn
     * @response `200` `StudyPgn` The PGN representation of the broadcast.
     */
    broadcastAllRoundsPgn: (
      broadcastTournamentId: string,
      params: RequestParams = {}
    ) =>
      this.http.request<StudyPgn, any>({
        path: `/api/broadcast/${broadcastTournamentId}.pgn`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Get recently finished, ongoing, and upcoming simuls.
     *
     * @tags Simuls
     * @name ApiSimul
     * @summary Get current simuls
     * @request GET:/api/simul
     * @response `200` `(Simul)[]` The list of simuls.
     */
    apiSimul: (params: RequestParams = {}) =>
      this.http.request<Simul[], any>({
        path: `/api/simul`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Infos about a team
     *
     * @tags Teams
     * @name TeamShow
     * @summary Get a single team
     * @request GET:/api/team/{teamId}
     * @response `200` `Team` The information about the team.
     */
    teamShow: (teamId: string, params: RequestParams = {}) =>
      this.http.request<Team, any>({
        path: `/api/team/${teamId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Paginator of the most popular teams.
     *
     * @tags Teams
     * @name TeamAll
     * @summary Get popular teams
     * @request GET:/api/team/all
     * @response `200` `{ currentPage?: number, maxPerPage?: number, currentPageResults?: (Team)[], nbResults?: number, previousPage?: number | null, nextPage?: number | null, nbPages?: number }` A paginated list of the most popular teams.
     */
    teamAll: (query?: { page?: number }, params: RequestParams = {}) =>
      this.http.request<
        {
          currentPage?: number;
          maxPerPage?: number;
          currentPageResults?: Team[];
          nbResults?: number;
          previousPage?: number | null;
          nextPage?: number | null;
          nbPages?: number;
        },
        any
      >({
        path: `/api/team/all`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description All the teams a player is a member of.
     *
     * @tags Teams
     * @name TeamOfUsername
     * @summary Teams of a player
     * @request GET:/api/team/of/{username}
     * @response `200` `(Team)[]` The list of teams the user is a member of.
     */
    teamOfUsername: (username: string, params: RequestParams = {}) =>
      this.http.request<Team[], any>({
        path: `/api/team/of/${username}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Paginator of team search results for a keyword.
     *
     * @tags Teams
     * @name TeamSearch
     * @summary Search teams
     * @request GET:/api/team/search
     * @response `200` `(Team)[]` The paginated list of teams.
     */
    teamSearch: (
      query?: { text?: string; page?: number },
      params: RequestParams = {}
    ) =>
      this.http.request<Team[], any>({
        path: `/api/team/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Members are sorted by reverse chronological order of joining the team (most recent first). OAuth only required if the list of members is private. Members are streamed as [ndjson](#section/Introduction/Streaming-with-ND-JSON).
     *
     * @tags Users, Teams
     * @name TeamIdUsers
     * @summary Get members of a team
     * @request GET:/api/team/{teamId}/users
     * @secure
     * @response `200` `UserExtended` The list of users in the team.
     */
    teamIdUsers: (teamId: string, params: RequestParams = {}) =>
      this.http.request<UserExtended, any>({
        path: `/api/team/${teamId}/users`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Get all Arena tournaments relevant to a team. Tournaments are sorted by reverse chronological order of start date (last starting first). Tournaments are streamed as [ndjson](#section/Introduction/Streaming-with-ND-JSON).
     *
     * @tags Teams, Arena tournaments
     * @name ApiTeamArena
     * @summary Get team Arena tournaments
     * @request GET:/api/team/{teamId}/arena
     * @response `200` `(ArenaTournament)[]` The list of Arena tournaments of a team.
     */
    apiTeamArena: (
      teamId: string,
      query?: { max?: number },
      params: RequestParams = {}
    ) =>
      this.http.request<ArenaTournament[], any>({
        path: `/api/team/${teamId}/arena`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get total number of games, and current score, of any two users. If the `matchup` flag is provided, and the users are currently playing, also gets the current match game number and scores.
     *
     * @tags Users
     * @name ApiCrosstable
     * @summary Get crosstable
     * @request GET:/api/crosstable/{user1}/{user2}
     * @response `200` `Crosstable` The crosstable of the two users.
     */
    apiCrosstable: (
      user1: string,
      user2: string,
      query?: { matchup?: boolean },
      params: RequestParams = {}
    ) =>
      this.http.request<Crosstable, any>({
        path: `/api/crosstable/${user1}/${user2}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Users are streamed as [ndjson](#section/Introduction/Streaming-with-ND-JSON).
     *
     * @tags Relations
     * @name ApiUserFollowing
     * @summary Get users followed the logged in user
     * @request GET:/api/rel/following
     * @secure
     * @response `200` `UserExtended` The list of users followed by a user.
     */
    apiUserFollowing: (params: RequestParams = {}) =>
      this.http.request<UserExtended, any>({
        path: `/api/rel/following`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Follow a player, adding them to your list of Lichess friends.
     *
     * @tags Relations
     * @name FollowUser
     * @summary Follow a player
     * @request POST:/api/rel/follow/{username}
     * @secure
     * @response `200` `Ok` The player was successfully added.
     */
    followUser: (username: string, params: RequestParams = {}) =>
      this.http.request<Ok, any>({
        path: `/api/rel/follow/${username}`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Unfollow a player, removing them from your list of Lichess friends.
     *
     * @tags Relations
     * @name UnfollowUser
     * @summary Unfollow a player
     * @request POST:/api/rel/unfollow/{username}
     * @secure
     * @response `200` `Ok` The player was successfully removed.
     */
    unfollowUser: (username: string, params: RequestParams = {}) =>
      this.http.request<Ok, any>({
        path: `/api/rel/unfollow/${username}`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Stream the events reaching a lichess user in real time as [ndjson](#section/Introduction/Streaming-with-ND-JSON). Each line is a JSON object containing a `type` field. Possible values are: - `gameStart` Start of a game - `gameFinish` Completion of a game - `challenge` A player sends you a challenge - `challengeCanceled` A player cancels their challenge to you - `challengeDeclined` The opponent declines your challenge When the stream opens, all current challenges and games are sent.
     *
     * @tags Board, Bot
     * @name ApiStreamEvent
     * @summary Stream incoming events
     * @request GET:/api/stream/event
     * @secure
     * @response `200` `(GameStartEvent | GameFinishEvent | ChallengeEvent | ChallengeCanceledEvent | ChallengeDeclinedEvent)` The stream of events reaching the logged in user.
     */
    apiStreamEvent: (params: RequestParams = {}) =>
      this.http.request<
        | GameStartEvent
        | GameFinishEvent
        | ChallengeEvent
        | ChallengeCanceledEvent
        | ChallengeDeclinedEvent,
        any
      >({
        path: `/api/stream/event`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Create a public seek, to start a game with a random player. ### Real-time seek Specify the `time` and `increment` clock values.  The response is streamed but doesn't contain any information. **Keep the connection open to keep the seek active**. If the client closes the connection, the seek is canceled. This way, if the client terminates, the user won't be paired in a game they wouldn't play. When the seek is accepted, or expires, the server closes the connection. **Make sure to also have an [Event stream](#operation/apiStreamEvent) open**, to be notified when a game starts. We recommend opening the [Event stream](#operation/apiStreamEvent) first, then the seek stream. This way, you won't miss the game event if the seek is accepted immediately. ### Correspondence seek Specify the `days` per turn value.  The response is not streamed, it immediately completes with the seek ID. The seek remains active on the server until it is joined by someone.
     *
     * @tags Board
     * @name ApiBoardSeek
     * @summary Create a seek
     * @request POST:/api/board/seek
     * @secure
     * @response `200` `void` The seek was successfully created.
     * @response `400` `Error` The creation of the seek failed.
     */
    apiBoardSeek: (
      data: {
        rated?: boolean;
        time?: number;
        increment?: number;
        days?: 1 | 3 | 5 | 7 | 10 | 14;
        variant?: VariantKey;
        color?: "random" | "white" | "black";
        ratingRange?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<void, Error>({
        path: `/api/board/seek`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * @description Stream the state of a game being played with the Board API, as [ndjson](#section/Introduction/Streaming-with-ND-JSON). Use this endpoint to get updates about the game in real-time, with a single request. Each line is a JSON object containing a `type` field. Possible values are: - `gameFull` Full game data. All values are immutable, except for the `state` field. - `gameState` Current state of the game. Immutable values not included. Sent when a move is played, a draw is offered, or when the game ends. - `chatLine` Chat message sent by a user in the `room` "player" or "spectator". The first line is always of type `gameFull`.
     *
     * @tags Board
     * @name BoardGameStream
     * @summary Stream Board game state
     * @request GET:/api/board/game/stream/{gameId}
     * @secure
     * @response `200` `(GameFullEvent | GameStateEvent | ChatLineEvent)` The stream of the game.
     * @response `404` `NotFound` The game was not found.
     */
    boardGameStream: (gameId: string, params: RequestParams = {}) =>
      this.http.request<
        GameFullEvent | GameStateEvent | ChatLineEvent,
        NotFound
      >({
        path: `/api/board/game/stream/${gameId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Make a move in a game being played with the Board API. The move can also contain a draw offer/agreement.
     *
     * @tags Board
     * @name BoardGameMove
     * @summary Make a Board move
     * @request POST:/api/board/game/{gameId}/move/{move}
     * @secure
     * @response `200` `Ok` The move was successfully made.
     * @response `400` `Error` The move failed.
     */
    boardGameMove: (
      gameId: string,
      move: string,
      query?: { offeringDraw?: boolean },
      params: RequestParams = {}
    ) =>
      this.http.request<Ok, Error>({
        path: `/api/board/game/${gameId}/move/${move}`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Post a message to the player or spectator chat, in a game being played with the Board API.
     *
     * @tags Board
     * @name BoardGameChatPost
     * @summary Write in the chat
     * @request POST:/api/board/game/{gameId}/chat
     * @secure
     * @response `200` `Ok` The message was successfully posted in the chat.
     * @response `400` `Error` The posting of the message in the chat failed.
     */
    boardGameChatPost: (
      gameId: string,
      data: { room: "player" | "spectator"; text: string },
      params: RequestParams = {}
    ) =>
      this.http.request<Ok, Error>({
        path: `/api/board/game/${gameId}/chat`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the messages posted in the game chat
     *
     * @tags Board
     * @name BoardGameChatGet
     * @summary Fetch the game chat
     * @request GET:/api/board/game/{gameId}/chat
     * @secure
     * @response `200` `GameChat` The messages posted in the chat.
     */
    boardGameChatGet: (gameId: string, params: RequestParams = {}) =>
      this.http.request<GameChat, any>({
        path: `/api/board/game/${gameId}/chat`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Abort a game being played with the Board API.
     *
     * @tags Board
     * @name BoardGameAbort
     * @summary Abort a game
     * @request POST:/api/board/game/{gameId}/abort
     * @secure
     * @response `200` `Ok` The game successfully aborted.
     * @response `400` `Error` The abortion of the game failed.
     */
    boardGameAbort: (gameId: string, params: RequestParams = {}) =>
      this.http.request<Ok, Error>({
        path: `/api/board/game/${gameId}/abort`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Resign a game being played with the Board API.
     *
     * @tags Board
     * @name BoardGameResign
     * @summary Resign a game
     * @request POST:/api/board/game/{gameId}/resign
     * @secure
     * @response `200` `Ok` The game was successfully resigned.
     * @response `400` `Error` The resigning from the game failed.
     */
    boardGameResign: (gameId: string, params: RequestParams = {}) =>
      this.http.request<Ok, Error>({
        path: `/api/board/game/${gameId}/resign`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create/accept/decline draw offers. - `yes`: Offer a draw, or accept the opponent's draw offer. - `no`: Decline a draw offer from the opponent.
     *
     * @tags Board
     * @name BoardGameDraw
     * @summary Handle draw offers
     * @request POST:/api/board/game/{gameId}/draw/{accept}
     * @secure
     * @response `200` `Ok` The draw offer was successfully sent.
     * @response `400` `Error` The draw offering failed.
     */
    boardGameDraw: (
      gameId: string,
      accept: boolean | string,
      params: RequestParams = {}
    ) =>
      this.http.request<Ok, Error>({
        path: `/api/board/game/${gameId}/draw/${accept}`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create/accept/decline takebacks. - `yes`: Propose a takeback, or accept the opponent's takeback offer. - `no`: Decline a takeback offer from the opponent.
     *
     * @tags Board
     * @name BoardGameTakeback
     * @summary Handle takeback offers
     * @request POST:/api/board/game/{gameId}/takeback/{accept}
     * @secure
     * @response `200` `Ok` The takeback offer was successfully sent.
     * @response `400` `Error` The takeback offering failed.
     */
    boardGameTakeback: (
      gameId: string,
      accept: boolean | string,
      params: RequestParams = {}
    ) =>
      this.http.request<Ok, Error>({
        path: `/api/board/game/${gameId}/takeback/${accept}`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Claim victory when the opponent has left the game for a while.
     *
     * @tags Board
     * @name BoardGameClaimVictory
     * @summary Claim victory of a game
     * @request POST:/api/board/game/{gameId}/claim-victory
     * @secure
     * @response `200` `Ok` The victory was successfully claimed.
     * @response `400` `Error` The victory claim has failed.
     */
    boardGameClaimVictory: (gameId: string, params: RequestParams = {}) =>
      this.http.request<Ok, Error>({
        path: `/api/board/game/${gameId}/claim-victory`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Stream the [online bot users](https://lichess.org/player/bots), as [ndjson](#section/Introduction/Streaming-with-ND-JSON). Throttled to 50 bot users per second.
     *
     * @tags Bot
     * @name ApiBotOnline
     * @summary Get online bots
     * @request GET:/api/bot/online
     * @response `200` `User` The list of online bot users
     */
    apiBotOnline: (query?: { nb?: number }, params: RequestParams = {}) =>
      this.http.request<User, any>({
        path: `/api/bot/online`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Upgrade a lichess player account into a Bot account. Only Bot accounts can use the Bot API. The account **cannot have played any game** before becoming a Bot account. The upgrade is **irreversible**. The account will only be able to play as a Bot. To upgrade an account to Bot, use the [official lichess-bot client](https://github.com/ShailChoksi/lichess-bot), or follow these steps: - Create an [API access token](https://lichess.org/account/oauth/token/create?scopes[]=bot:play) with "Play bot moves" permission. - `curl -d '' https://lichess.org/api/bot/account/upgrade -H "Authorization: Bearer <yourTokenHere>"` To know if an account has already been upgraded, use the [Get my profile API](#operation/accountMe): the `title` field should be set to `BOT`.
     *
     * @tags Bot
     * @name BotAccountUpgrade
     * @summary Upgrade to Bot account
     * @request POST:/api/bot/account/upgrade
     * @secure
     * @response `200` `Ok` The bot account was successfully upgraded.
     * @response `400` `Error` The upgrade of the bot account failed.
     */
    botAccountUpgrade: (params: RequestParams = {}) =>
      this.http.request<Ok, Error>({
        path: `/api/bot/account/upgrade`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Stream the state of a game being played with the Bot API, as [ndjson](#section/Introduction/Streaming-with-ND-JSON). Use this endpoint to get updates about the game in real-time, with a single request. Each line is a JSON object containing a `type` field. Possible values are: - `gameFull` Full game data. All values are immutable, except for the `state` field. - `gameState` Current state of the game. Immutable values not included. - `chatLine` Chat message sent by a user (or the bot itself) in the `room` "player" or "spectator". The first line is always of type `gameFull`.
     *
     * @tags Bot
     * @name BotGameStream
     * @summary Stream Bot game state
     * @request GET:/api/bot/game/stream/{gameId}
     * @secure
     * @response `200` `(GameFullEvent | GameStateEvent | ChatLineEvent)` The stream of the bot game.
     * @response `404` `NotFound` The bot game was not found.
     */
    botGameStream: (gameId: string, params: RequestParams = {}) =>
      this.http.request<
        GameFullEvent | GameStateEvent | ChatLineEvent,
        NotFound
      >({
        path: `/api/bot/game/stream/${gameId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Make a move in a game being played with the Bot API. The move can also contain a draw offer/agreement.
     *
     * @tags Bot
     * @name BotGameMove
     * @summary Make a Bot move
     * @request POST:/api/bot/game/{gameId}/move/{move}
     * @secure
     * @response `200` `Ok` The bot move was successfully made.
     * @response `400` `Error` The bot move failed.
     */
    botGameMove: (
      gameId: string,
      move: string,
      query?: { offeringDraw?: boolean },
      params: RequestParams = {}
    ) =>
      this.http.request<Ok, Error>({
        path: `/api/bot/game/${gameId}/move/${move}`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Post a message to the player or spectator chat, in a game being played with the Bot API.
     *
     * @tags Bot
     * @name BotGameChat
     * @summary Write in the chat
     * @request POST:/api/bot/game/{gameId}/chat
     * @secure
     * @response `200` `Ok` The message was successfully posted in chat.
     * @response `400` `Error` The posting of the  message in chat failed.
     */
    botGameChat: (
      gameId: string,
      data: { room: "player" | "spectator"; text: string },
      params: RequestParams = {}
    ) =>
      this.http.request<Ok, Error>({
        path: `/api/bot/game/${gameId}/chat`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the messages posted in the game chat
     *
     * @tags Bot
     * @name BotGameChatGet
     * @summary Fetch the game chat
     * @request GET:/api/bot/game/{gameId}/chat
     * @secure
     * @response `200` `GameChat` The messages posted in the chat.
     */
    botGameChatGet: (gameId: string, params: RequestParams = {}) =>
      this.http.request<GameChat, any>({
        path: `/api/bot/game/${gameId}/chat`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Abort a game being played with the Bot API.
     *
     * @tags Bot
     * @name BotGameAbort
     * @summary Abort a game
     * @request POST:/api/bot/game/{gameId}/abort
     * @secure
     * @response `200` `Ok` The game was successfully aborted.
     * @response `400` `Error` The abortion of the game failed.
     */
    botGameAbort: (gameId: string, params: RequestParams = {}) =>
      this.http.request<Ok, Error>({
        path: `/api/bot/game/${gameId}/abort`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Resign a game being played with the Bot API.
     *
     * @tags Bot
     * @name BotGameResign
     * @summary Resign a game
     * @request POST:/api/bot/game/{gameId}/resign
     * @secure
     * @response `200` `Ok` The game was successfully resigned from.
     * @response `400` `Error` Resigning the game failed.
     */
    botGameResign: (gameId: string, params: RequestParams = {}) =>
      this.http.request<Ok, Error>({
        path: `/api/bot/game/${gameId}/resign`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a list of challenges created by or targeted at you.
     *
     * @tags Challenges
     * @name ChallengeList
     * @summary List your challenges
     * @request GET:/api/challenge
     * @secure
     * @response `200` `{ in?: (ChallengeJson)[], out?: (ChallengeJson)[] }` The list of challenges created by or targeted at the logged in user.
     */
    challengeList: (params: RequestParams = {}) =>
      this.http.request<{ in?: ChallengeJson[]; out?: ChallengeJson[] }, any>({
        path: `/api/challenge`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Challenge someone to play. The targeted player can choose to accept or decline. If the challenge is accepted, you will be notified on the [event stream](#operation/apiStreamEvent) that a new game has started. The game ID will be the same as the challenge ID. If you also have an OAuth token with `challenge:write` scope for the receiving user, you can make them accept the challenge immediately by setting the `acceptByToken` field. Challenges for realtime games (not correspondence) expire after 20s if not accepted. To prevent that, use the `keepAliveStream` flag described below.
     *
     * @tags Challenges
     * @name ChallengeCreate
     * @summary Create a challenge
     * @request POST:/api/challenge/{username}
     * @secure
     * @response `200` `ChallengeJson` The challenge was successfully created.
     * @response `400` `Error` The creation of the challenge failed.
     */
    challengeCreate: (
      username: string,
      data: {
        rated?: boolean;
        "clock.limit"?: number;
        "clock.increment"?: number;
        days?: number;
        color?: "random" | "white" | "black";
        variant?: VariantKey;
        fen?: string;
        keepAliveStream?: boolean;
        acceptByToken?: string;
        message?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<ChallengeJson, Error>({
        path: `/api/challenge/${username}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Accept an incoming challenge. You should receive a `gameStart` event on the [incoming events stream](#operation/apiStreamEvent).
     *
     * @tags Challenges
     * @name ChallengeAccept
     * @summary Accept a challenge
     * @request POST:/api/challenge/{challengeId}/accept
     * @secure
     * @response `200` `Ok` The challenge was successfully accepted.
     * @response `404` `NotFound` The challenge to accept was not found.
     */
    challengeAccept: (challengeId: string, params: RequestParams = {}) =>
      this.http.request<Ok, NotFound>({
        path: `/api/challenge/${challengeId}/accept`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Decline an incoming challenge.
     *
     * @tags Challenges
     * @name ChallengeDecline
     * @summary Decline a challenge
     * @request POST:/api/challenge/{challengeId}/decline
     * @secure
     * @response `200` `Ok` The challenge was successfully declined.
     * @response `404` `NotFound` The challenge to decline was not found.
     */
    challengeDecline: (
      challengeId: string,
      data?: {
        reason?:
          | "generic"
          | "later"
          | "tooFast"
          | "tooSlow"
          | "timeControl"
          | "rated"
          | "casual"
          | "standard"
          | "variant"
          | "noBot"
          | "onlyBot";
      },
      params: RequestParams = {}
    ) =>
      this.http.request<Ok, NotFound>({
        path: `/api/challenge/${challengeId}/decline`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Cancel a challenge you sent, or aborts the game if the challenge was accepted, but the game was not yet played. Note that the ID of a game is the same as the ID of the challenge that created it.
     *
     * @tags Challenges
     * @name ChallengeCancel
     * @summary Cancel a challenge
     * @request POST:/api/challenge/{challengeId}/cancel
     * @secure
     * @response `200` `Ok` The challenge was successfully cancelled.
     * @response `404` `NotFound` The challenge to cancel was not found.
     */
    challengeCancel: (
      challengeId: string,
      query?: { opponentToken?: string },
      params: RequestParams = {}
    ) =>
      this.http.request<Ok, NotFound>({
        path: `/api/challenge/${challengeId}/cancel`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Start a game with Lichess AI. You will be notified on the [event stream](#operation/apiStreamEvent) that a new game has started.
     *
     * @tags Challenges
     * @name ChallengeAi
     * @summary Challenge the AI
     * @request POST:/api/challenge/ai
     * @secure
     * @response `200` `GameJson` The game with Lichess AI was successfully started.
     * @response `400` `Error` The creation of a game with Lichess AI failed.
     */
    challengeAi: (
      data: {
        level?: number;
        "clock.limit"?: number;
        "clock.increment"?: number;
        days?: number;
        color?: "random" | "white" | "black";
        variant?: VariantKey;
        fen?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GameJson, Error>({
        path: `/api/challenge/ai`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a challenge that any 2 players can join. Share the URL of the challenge. the first 2 players to click it will be paired for a game. The response body also contains `whiteUrl` and `blackUrl`. You can control which color each player gets by giving them these URLs, instead of the main challenge URL. Open challenges expire after 24h. To directly pair 2 known players, use [this endpoint](#operation/challengeCreate) instead, with the `acceptByToken` parameter.
     *
     * @tags Challenges
     * @name ChallengeOpen
     * @summary Open-ended challenge
     * @request POST:/api/challenge/open
     * @response `200` `ChallengeOpenJson` The challenge was successfully created.
     * @response `400` `Error` The creation of the challenge failed.
     */
    challengeOpen: (
      data: {
        rated?: boolean;
        "clock.limit"?: number;
        "clock.increment"?: number;
        variant?: VariantKey;
        fen?: string;
        name?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<ChallengeOpenJson, Error>({
        path: `/api/challenge/open`,
        method: "POST",
        body: data,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Start the clocks of a game immediately, even if a player has not yet made a move. Requires the OAuth tokens of both players with `challenge:write` scope. If the clocks have already started, the call will have no effect.
     *
     * @tags Challenges
     * @name ChallengeStartClocks
     * @summary Start clocks of a game
     * @request POST:/api/challenge/{gameId}/start-clocks
     * @secure
     * @response `200` `Ok` The clock of a game was successfully started.
     */
    challengeStartClocks: (
      gameId: string,
      query?: { token1?: string; token2?: string },
      params: RequestParams = {}
    ) =>
      this.http.request<Ok, any>({
        path: `/api/challenge/${gameId}/start-clocks`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a list of upcoming bulk pairings you created. Only bulk pairings that are scheduled in the future, or that have a clock start scheduled in the future, are listed. Bulk pairings are deleted from the server after the pairings are done and the clocks have started.
     *
     * @tags Bulk pairings
     * @name BulkPairingGet
     * @summary View upcoming bulk pairings
     * @request GET:/api/bulk-pairing
     * @secure
     * @response `200` `(BulkPairing)[]` The list of upcoming bulk pairing the logged in user created.
     */
    bulkPairingGet: (params: RequestParams = {}) =>
      this.http.request<BulkPairing[], any>({
        path: `/api/bulk-pairing`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Schedule many games at once, up to 24h in advance. OAuth tokens are required for all paired players, with the `challenge:write` scope. You can schedule up to 500 games every 10 minutes. [Contact us](mailto:contact@lichess.org) if you need higher limits. The entire bulk is rejected if: - a token is missing - a token is present more than once - a token lacks the `challenge:write` scope - a player account is closed - a player is paired more than once - a bulk is already scheduled to start at the same time with the same player - you have 10 scheduled bulks - you have 1000 scheduled games Partial bulks are never created. Either it all fails, or it all succeeds. When it fails, it does so with an error message explaining the issue. Failed bulks are not counted in the rate limiting, they are free. Fix the issues, manually or programmatically, then retry to schedule the bulk. A successful bulk creation returns a JSON bulk document. Its ID can be used for further operations.
     *
     * @tags Bulk pairings
     * @name BulkPairingCreate
     * @summary Create a bulk pairing
     * @request POST:/api/bulk-pairing
     * @secure
     * @response `200` `BulkPairing` The bulk pairings have been successfully created.
     * @response `400` `Error` The creation of the bulk pairings failed.
     */
    bulkPairingCreate: (
      data: {
        players?: string;
        "clock.limit"?: number;
        "clock.increment"?: number;
        pairAt?: number;
        startClocksAt?: number;
        rated?: boolean;
        variant?: VariantKey;
        message?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<BulkPairing, Error>({
        path: `/api/bulk-pairing`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Immediately start all clocks of the games of a bulk pairing. This overrides the `startClocksAt` value of an existing bulk pairing. If the games have not yet been created (`bulk.pairAt` is in the future), then this does nothing. If the clocks have already started (`bulk.startClocksAt` is in the past), then this does nothing.
     *
     * @tags Bulk pairings
     * @name BulkPairingStartClocks
     * @summary Manually start clocks
     * @request POST:/api/bulk-pairing/{id}/start-clocks
     * @secure
     * @response `200` `Ok` The clocks of the games of a bulk pairing were successfully started.
     * @response `404` `NotFound` The bulk pairing was not found.
     */
    bulkPairingStartClocks: (id: string, params: RequestParams = {}) =>
      this.http.request<Ok, NotFound>({
        path: `/api/bulk-pairing/${id}/start-clocks`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Cancel and delete a bulk pairing that is scheduled in the future. If the games have already been created, then this does nothing. Canceling a bulk pairing does not refund the rate limit cost of that bulk pairing.
     *
     * @tags Bulk pairings
     * @name BulkPairingDelete
     * @summary Cancel a bulk pairing
     * @request DELETE:/api/bulk-pairing/{id}
     * @secure
     * @response `200` `Ok` The bulk pairing was successfully deleted.
     * @response `404` `NotFound` The bulk pairing to delete was not found.
     */
    bulkPairingDelete: (id: string, params: RequestParams = {}) =>
      this.http.request<Ok, NotFound>({
        path: `/api/bulk-pairing/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Add seconds to the opponent's clock. Can be used to create games with time odds.
     *
     * @tags Challenges
     * @name RoundAddTime
     * @summary Add time to the opponent clock
     * @request POST:/api/round/{gameId}/add-time/{seconds}
     * @secure
     * @response `200` `Ok` Time was successfully added to the opponent's clock.
     */
    roundAddTime: (
      gameId: string,
      seconds: string,
      params: RequestParams = {}
    ) =>
      this.http.request<Ok, any>({
        path: `/api/round/${gameId}/add-time/${seconds}`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **For administrators only. You are not allowed to use this endpoint.** Create and obtain `challenge:write` tokens for multiple users. If a similar token already exists for a user, it is reused. This endpoint is idempotent.
     *
     * @tags Challenges
     * @name AdminChallengeTokens
     * @summary Admin challenge tokens
     * @request POST:/api/token/admin-challenge
     * @secure
     * @response `200` `void` The `challenge:write` tokens of each user
     * @response `400` `Error` The creation of the tokens failed.
     */
    adminChallengeTokens: (
      data: { users: string; description: string },
      params: RequestParams = {}
    ) =>
      this.http.request<void, Error>({
        path: `/api/token/admin-challenge`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the cached evaluation of a position, if available. Opening positions have more chances of being available. There are about 7 million positions in the database. Up to 5 variations may be available. Variants are supported.
     *
     * @tags Analysis
     * @name ApiCloudEval
     * @summary Get cloud evaluation of a position.
     * @request GET:/api/cloud-eval
     * @response `200` `void` The evaluation of the position.
     */
    apiCloudEval: (
      query: { fen: string; multiPv?: number; variant?: VariantKey },
      params: RequestParams = {}
    ) =>
      this.http.request<void, any>({
        path: `/api/cloud-eval`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description OAuth2 token endpoint. Exchanges an authorization code for an access token.
     *
     * @tags OAuth
     * @name ApiToken
     * @summary Obtain access token
     * @request POST:/api/token
     * @response `200` `void` Access token successfully obtained.
     * @response `400` `Error` Failed to obtain access token.
     */
    apiToken: (
      data: {
        grant_type?: string;
        code?: string;
        code_verifier?: string;
        redirect_uri?: string;
        client_id?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<void, Error>({
        path: `/api/token`,
        method: "POST",
        body: data,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Revokes the access token sent as Bearer for this request.
     *
     * @tags OAuth
     * @name ApiTokenDelete
     * @summary Revoke access token
     * @request DELETE:/api/token
     * @secure
     * @response `204` `void` Access token revoked.
     */
    apiTokenDelete: (params: RequestParams = {}) =>
      this.http.request<void, any>({
        path: `/api/token`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description For up to 1000 OAuth tokens, returns their associated user ID and scopes, or `null` if the token is invalid. The method is `POST` so a longer list of tokens can be sent in the request body.
     *
     * @tags OAuth
     * @name TokenTest
     * @summary Test multiple OAuth tokens
     * @request POST:/api/token/test
     * @response `200` `(object)[]` The representation of the OAuth tokens.
     */
    tokenTest: (data: string, params: RequestParams = {}) =>
      this.http.request<object[], any>({
        path: `/api/token/test`,
        method: "POST",
        body: data,
        format: "json",
        ...params,
      }),
  };
  player = {
    /**
     * @description Get the top 10 players for each speed and variant. See <https://lichess.org/player>.
     *
     * @tags Users
     * @name Player
     * @summary Get all top 10
     * @request GET:/player
     * @response `200` `Top10S` The list of variants with their respective top players.
     */
    player: (params: RequestParams = {}) =>
      this.http.request<Top10S, any>({
        path: `/player`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get the leaderboard for a single speed or variant (a.k.a. `perfType`). There is no leaderboard for correspondence or puzzles. See <https://lichess.org/player/top/200/bullet>.
     *
     * @tags Users
     * @name PlayerTopNbPerfType
     * @summary Get one leaderboard
     * @request GET:/player/top/{nb}/{perfType}
     * @response `200` `Leaderboard` The list of top players for the variant.
     */
    playerTopNbPerfType: (
      nb: number,
      perfType:
        | "ultraBullet"
        | "bullet"
        | "blitz"
        | "rapid"
        | "classical"
        | "chess960"
        | "crazyhouse"
        | "antichess"
        | "atomic"
        | "horde"
        | "kingOfTheHill"
        | "racingKings"
        | "threeCheck",
      params: RequestParams = {}
    ) =>
      this.http.request<Leaderboard, any>({
        path: `/player/top/${nb}/${perfType}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ServersPlayer
     * @request SERVERS:/player?
     */
    serversPlayer: (params: RequestParams = {}) =>
      this.http.request<any, any>({
        path: `/player?`,
        method: "SERVERS",
        ...params,
      }),

    /**
     * @description **Endpoint: <https://explorer.lichess.ovh/player>** Games of a Lichess player. Responds with a stream of newline delimited JSON. Will start indexing on demand, immediately respond with the current results, and stream more updates until indexing is complete. The stream is throttled and deduplicated. Empty lines may be sent to avoid timeouts. Will index new games at most once per minute, and revisit previously ongoing games at most once every day. Example: `curl https://explorer.lichess.ovh/player?player=revoof&color=white&play=d2d4,d7d5&recentGames=1`
     *
     * @tags Opening Explorer
     * @name OpeningExplorerPlayer
     * @summary Player games
     * @request GET:/player?
     * @response `200` `OpeningExplorerPlayerJson` Opening statistics and game references for the position.
     */
    openingExplorerPlayer: (
      query?: {
        player?: string;
        variant?: VariantKey;
        fen?: string;
        play?: string;
        speeds?: Speed[];
        modes?: ("casual" | "rated")[];
        since?: string;
        until?: string;
        moves?: number;
        recentGames?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<OpeningExplorerPlayerJson, any>({
        path: `/player?`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  game = {
    /**
     * @description Download one game in either PGN or JSON format. Ongoing games have their last 3 moves omitted, after move 5.
     *
     * @tags Games
     * @name GamePgn
     * @summary Export one game
     * @request GET:/game/export/{gameId}
     * @response `200` `GamePgn` The game representation.
     */
    gamePgn: (
      gameId: string,
      query?: {
        moves?: boolean;
        pgnInJson?: boolean;
        tags?: boolean;
        clocks?: boolean;
        evals?: boolean;
        opening?: boolean;
        literate?: boolean;
        players?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GamePgn, any>({
        path: `/game/export/${gameId}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  games = {
    /**
     * @description Download games by IDs in PGN or [ndjson](#section/Introduction/Streaming-with-ND-JSON) format, depending on the request Accept header. Games are sorted by reverse chronological order (most recent first) The method is `POST` so a longer list of IDs can be sent in the request body. 300 IDs can be submitted. Ongoing games have their last 3 moves omitted, after move 5.
     *
     * @tags Games
     * @name GamesExportIds
     * @summary Export games by IDs
     * @request POST:/games/export/_ids
     * @response `200` `GamePgn` The representation of the games.
     */
    gamesExportIds: (
      data: string,
      query?: {
        moves?: boolean;
        pgnInJson?: boolean;
        tags?: boolean;
        clocks?: boolean;
        evals?: boolean;
        opening?: boolean;
        players?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<GamePgn, any>({
        path: `/games/export/_ids`,
        method: "POST",
        query: query,
        body: data,
        ...params,
      }),
  };
  swiss = {
    /**
     * @description Download a tournament in the Tournament Report File format, the FIDE standard. Documentation: <https://www.fide.com/FIDE/handbook/C04Annex2_TRF16.pdf> Example: <https://lichess.org/swiss/j8rtJ5GL.trf>
     *
     * @tags Swiss tournaments
     * @name SwissTrf
     * @summary Export TRF of a Swiss tournament
     * @request GET:/swiss/{id}.trf
     * @response `200` `string` The TRF representation of a Swiss tournament.
     */
    swissTrf: (id: string, params: RequestParams = {}) =>
      this.http.request<string, any>({
        path: `/swiss/${id}.trf`,
        method: "GET",
        ...params,
      }),
  };
  study = {
    /**
     * @description Download one study chapter in PGN format.
     *
     * @tags Studies
     * @name StudyChapterPgn
     * @summary Export one study chapter
     * @request GET:/study/{studyId}/{chapterId}.pgn
     * @response `200` `StudyPgn` The chapter of the study.
     */
    studyChapterPgn: (
      studyId: string,
      chapterId: string,
      query?: { clocks?: boolean; comments?: boolean; variations?: boolean },
      params: RequestParams = {}
    ) =>
      this.http.request<StudyPgn, any>({
        path: `/study/${studyId}/${chapterId}.pgn`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Download all chapters of all studies of a user in PGN format. If authenticated, then all public, unlisted, and private studies are included. If not, only public, listed studies are included.
     *
     * @tags Studies
     * @name StudyExportAllPgn
     * @summary Export all studies of a user
     * @request GET:/study/by/{username}/export.pgn
     * @secure
     * @response `200` `StudyPgn` The studies of the user.
     */
    studyExportAllPgn: (
      username: string,
      query?: { clocks?: boolean; comments?: boolean; variations?: boolean },
      params: RequestParams = {}
    ) =>
      this.http.request<StudyPgn, any>({
        path: `/study/by/${username}/export.pgn`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  broadcast = {
    /**
     * @description Create a new broadcast tournament to relay external games. This endpoint accepts the same form data as the [web form](https://lichess.org/broadcast/new).
     *
     * @tags Broadcasts
     * @name BroadcastTourCreate
     * @summary Create a broadcast tournament
     * @request POST:/broadcast/new
     * @secure
     * @response `200` `BroadcastTour` The broadcast tournament was successfully created.
     * @response `400` `Error` The creation of the broadcast tournament failed.
     */
    broadcastTourCreate: (
      data: {
        name: string;
        description: string;
        markup?: string;
        official?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<BroadcastTour, Error>({
        path: `/broadcast/new`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Get information about a broadcast tournament.
     *
     * @tags Broadcasts
     * @name BroadcastTourGet
     * @summary Get your broadcast tournament
     * @request GET:/broadcast/{slug}/{broadcastTournamentId}
     * @secure
     * @response `200` `(BroadcastTour)[]` The information about the broadcast tournament.
     */
    broadcastTourGet: (
      slug: string,
      broadcastTournamentId: string,
      params: RequestParams = {}
    ) =>
      this.http.request<BroadcastTour[], any>({
        path: `/broadcast/${slug}/${broadcastTournamentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update information about a broadcast tournament that you created. This endpoint accepts the same form data as the web form. All fields must be populated with data. Missing fields will override the broadcast with empty data.
     *
     * @tags Broadcasts
     * @name BroadcastTourUpdate
     * @summary Update your broadcast tournament
     * @request POST:/broadcast/{broadcastTournamentId}/edit
     * @secure
     * @response `200` `Ok` The broadcast tournament was successfully edited.
     * @response `400` `Error` The edition of the broadcast tournament failed.
     */
    broadcastTourUpdate: (
      broadcastTournamentId: string,
      data: {
        name: string;
        description: string;
        markup?: string;
        official?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<Ok, Error>({
        path: `/broadcast/${broadcastTournamentId}/edit`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new broadcast round to relay external games. This endpoint accepts the same form data as the web form.
     *
     * @tags Broadcasts
     * @name BroadcastRoundCreate
     * @summary Create a broadcast round
     * @request POST:/broadcast/{broadcastTournamentId}/new
     * @secure
     * @response `200` `BroadcastRound` The broadcast round was successfully created.
     * @response `400` `Error` The creation of the broadcast failed.
     */
    broadcastRoundCreate: (
      broadcastTournamentId: string,
      data: { name: string; syncUrl?: string; startsAt?: number },
      params: RequestParams = {}
    ) =>
      this.http.request<BroadcastRound, Error>({
        path: `/broadcast/${broadcastTournamentId}/new`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Get information about a broadcast round.
     *
     * @tags Broadcasts
     * @name BroadcastRoundGet
     * @summary Get your broadcast round
     * @request GET:/broadcast/{broadcastTournamentSlug}/{broadcastRoundSlug}/{broadcastRoundId}
     * @secure
     * @response `200` `(BroadcastRound)[]` The information about the broadcast round.
     */
    broadcastRoundGet: (
      broadcastTournamentSlug: string,
      broadcastRoundSlug: string,
      broadcastRoundId: string,
      params: RequestParams = {}
    ) =>
      this.http.request<BroadcastRound[], any>({
        path: `/broadcast/${broadcastTournamentSlug}/${broadcastRoundSlug}/${broadcastRoundId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update information about a broadcast round that you created. This endpoint accepts the same form data as the web form. All fields must be populated with data. Missing fields will override the broadcast with empty data. For instance, if you omit `startDate`, then any pre-existing start date will be removed.
     *
     * @tags Broadcasts
     * @name BroadcastRoundUpdate
     * @summary Update your broadcast round
     * @request POST:/broadcast/round/{broadcastRoundId}/edit
     * @secure
     * @response `200` `Ok` The broadcast round was successfully edited.
     * @response `400` `Error` The edition of the broadcast tournament failed.
     */
    broadcastRoundUpdate: (
      broadcastRoundId: string,
      data: { name: string; syncUrl?: string; startsAt?: number },
      params: RequestParams = {}
    ) =>
      this.http.request<Ok, Error>({
        path: `/broadcast/round/${broadcastRoundId}/edit`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Update your broadcast with new PGN. Only for broadcast without a source URL.
     *
     * @tags Broadcasts
     * @name BroadcastPush
     * @summary Push PGN to your broadcast round
     * @request POST:/broadcast/round/{broadcastRoundId}/push
     * @secure
     * @response `200` `(Ok)[]` The broadcast was successfully updated.
     */
    broadcastPush: (
      broadcastRoundId: string,
      data: string,
      params: RequestParams = {}
    ) =>
      this.http.request<Ok[], any>({
        path: `/broadcast/round/${broadcastRoundId}/push`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  team = {
    /**
     * @description Join a team. If the team requires a password but the `password` field is incorrect, then the call fails with `403 Forbidden`. Similarly, if the team join policy requires a confirmation but the `message` parameter is not given, then the call fails with `403 Forbidden`.
     *
     * @tags Teams
     * @name TeamIdJoin
     * @summary Join a team
     * @request POST:/team/{teamId}/join
     * @secure
     * @response `200` `Ok` The request to join a team was successfully sent.
     */
    teamIdJoin: (
      teamId: string,
      data: { message?: string; password?: string },
      params: RequestParams = {}
    ) =>
      this.http.request<Ok, any>({
        path: `/team/${teamId}/join`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * @description Leave a team. - <https://lichess.org/team>
     *
     * @tags Teams
     * @name TeamIdQuit
     * @summary Leave a team
     * @request POST:/team/{teamId}/quit
     * @secure
     * @response `200` `Ok` The logged in user has successfully left the team.
     */
    teamIdQuit: (teamId: string, params: RequestParams = {}) =>
      this.http.request<Ok, any>({
        path: `/team/${teamId}/quit`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Kick a member out of one of your teams. - <https://lichess.org/team>
     *
     * @tags Teams
     * @name TeamIdKickUserId
     * @summary Kick a user from your team
     * @request POST:/team/{teamId}/kick/{userId}
     * @secure
     * @response `200` `Ok` The member has been kicked from the team.
     */
    teamIdKickUserId: (
      teamId: string,
      userId: string,
      params: RequestParams = {}
    ) =>
      this.http.request<Ok, any>({
        path: `/team/${teamId}/kick/${userId}`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Send a private message to all members of a team. You must own the team.
     *
     * @tags Teams
     * @name TeamIdPmAll
     * @summary Message all members
     * @request POST:/team/{teamId}/pm-all
     * @secure
     * @response `200` `Ok` The message has successfully been sent to all team members.
     * @response `400` `Error` The sending of message to all team members has failed.
     */
    teamIdPmAll: (
      teamId: string,
      data: { message?: string },
      params: RequestParams = {}
    ) =>
      this.http.request<Ok, Error>({
        path: `/team/${teamId}/pm-all`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),
  };
  streamer = {
    /**
     * @description Get basic info about currently streaming users. This API is very fast and cheap on lichess side. So you can call it quite often (like once every 5 seconds).
     *
     * @tags Users
     * @name StreamerLive
     * @summary Get live streamers
     * @request GET:/streamer/live
     * @response `200` `({ id?: string, name?: string, title?: string | null, online?: boolean | null, patron?: boolean | null })[]` The list of live streamers and their respective information.
     */
    streamerLive: (params: RequestParams = {}) =>
      this.http.request<
        {
          id?: string;
          name?: string;
          title?: string | null;
          online?: boolean | null;
          patron?: boolean | null;
        }[],
        any
      >({
        path: `/streamer/live`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  inbox = {
    /**
     * @description Send a private message to another player.
     *
     * @tags Messaging
     * @name InboxUsername
     * @summary Send a private message
     * @request POST:/inbox/{username}
     * @secure
     * @response `200` `Ok` The private message has been successfully sent.
     * @response `400` `Error` The sending of the private message has failed.
     */
    inboxUsername: (
      username: string,
      data: { text: string },
      params: RequestParams = {}
    ) =>
      this.http.request<Ok, Error>({
        path: `/inbox/${username}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),
  };
  oauth = {
    /**
     * @description OAuth2 authorization endpoint. Start the OAuth2 Authorization Code Flow with PKCE by securely generating two random strings unique to each authorization request: * `code_verifier` * `state` Store these in session storage. Make sure not to reveal `code_verifier` to eavesdroppers. Do not show it in URLs, do not abuse `state` to store it, do not send it over insecure connections. However it is fine if the user themselves can extract `code_verifier`, which will always be possible for fully client-side apps. Then send the user to this endpoint. They will be prompted to grant authorization and then be redirected back to the given `redirect_uri`. If the authorization failed, the following query string parameters will be appended to the redirection: * `error`, in particular with value `access_denied` if the user cancelled authorization * `error_description` to aid debugging * `state`, exactly as passed in the `state` parameter If the authorization succeeded, the following query string parameters will be appended to the redirection: * `code`, containing a fresh short-lived authorization code * `state`, exactly as passed in the `state` parameter Next, to defend against cross site request forgery, check that the returned `state` matches the `state` you originally generated. Finally, continue by using the authorization code to [obtain an access token](#operation/apiToken).
     *
     * @tags OAuth
     * @name Oauth
     * @summary Request authorization code
     * @request GET:/oauth
     * @response `200` `void` Authorization prompt will be displayed to the user.
     */
    oauth: (
      query: {
        response_type: string;
        client_id: string;
        redirect_uri: string;
        code_challenge_method: string;
        code_challenge: string;
        scope?: string;
        state?: string;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<void, any>({
        path: `/oauth`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  masters = {
    /**
     * No description
     *
     * @name ServersMasters
     * @request SERVERS:/masters
     */
    serversMasters: (params: RequestParams = {}) =>
      this.http.request<any, any>({
        path: `/masters`,
        method: "SERVERS",
        ...params,
      }),

    /**
     * @description **Endpoint: <https://explorer.lichess.ovh/masters>** Example: `curl https://explorer.lichess.ovh/masters?play=d2d4,d7d5,c2c4,c7c6,c4d5`
     *
     * @tags Opening Explorer
     * @name OpeningExplorerMaster
     * @summary Masters database
     * @request GET:/masters
     * @response `200` `OpeningExplorerJson` Opening statistics and game references for the position.
     */
    openingExplorerMaster: (
      query?: {
        fen?: string;
        play?: string;
        since?: number;
        until?: number;
        moves?: number;
        topGames?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<OpeningExplorerJson, any>({
        path: `/masters`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  lichess = {
    /**
     * No description
     *
     * @name ServersLichess
     * @request SERVERS:/lichess
     */
    serversLichess: (params: RequestParams = {}) =>
      this.http.request<any, any>({
        path: `/lichess`,
        method: "SERVERS",
        ...params,
      }),

    /**
     * @description **Endpoint: <https://explorer.lichess.ovh/lichess>** Games sampled from all Lichess players. Example: `curl https://explorer.lichess.ovh/lichess?variant=standard&speeds=blitz,rapid,classical&ratings=2200,2500&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR%20w%20KQkq%20-%200%201`
     *
     * @tags Opening Explorer
     * @name OpeningExplorerLichess
     * @summary Lichess games
     * @request GET:/lichess
     * @response `200` `OpeningExplorerJson` Opening statistics and game references for the position.
     */
    openingExplorerLichess: (
      query?: {
        variant?: VariantKey;
        fen?: string;
        play?: string;
        speeds?: Speed[];
        ratings?: (1600 | 1800 | 2000 | 2200 | 2500)[];
        since?: string;
        until?: string;
        moves?: number;
        topGames?: number;
        recentGames?: number;
      },
      params: RequestParams = {}
    ) =>
      this.http.request<OpeningExplorerJson, any>({
        path: `/lichess`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  master = {
    /**
     * No description
     *
     * @name ServersMaster
     * @request SERVERS:/master/pgn/{gameId}
     */
    serversMaster: (gameId: string, params: RequestParams = {}) =>
      this.http.request<any, any>({
        path: `/master/pgn/${gameId}`,
        method: "SERVERS",
        ...params,
      }),

    /**
     * @description **Endpoint: `https://explorer.lichess.ovh/masters/pgn/{gameId}`** Example: `curl https://explorer.lichess.ovh/masters/pgn/aAbqI4ey`
     *
     * @tags Opening Explorer
     * @name OpeningExplorerMasterGame
     * @summary OTB master game
     * @request GET:/master/pgn/{gameId}
     * @response `200` `MasterGamePgn` The PGN representation of the game.
     */
    openingExplorerMasterGame: (gameId: string, params: RequestParams = {}) =>
      this.http.request<MasterGamePgn, any>({
        path: `/master/pgn/${gameId}`,
        method: "GET",
        ...params,
      }),
  };
  standard = {
    /**
     * No description
     *
     * @name ServersStandard
     * @request SERVERS:/standard
     */
    serversStandard: (params: RequestParams = {}) =>
      this.http.request<any, any>({
        path: `/standard`,
        method: "SERVERS",
        ...params,
      }),

    /**
     * @description **Endpoint: <https://tablebase.lichess.ovh>** Example: `curl http://tablebase.lichess.ovh/standard?fen=4k3/6KP/8/8/8/8/7p/8_w_-_-_0_1`
     *
     * @tags Tablebase
     * @name TablebaseStandard
     * @summary Tablebase lookup
     * @request GET:/standard
     * @response `200` `TablebaseJson` The tablebase information for the position in standard chess.
     */
    tablebaseStandard: (query: { fen: string }, params: RequestParams = {}) =>
      this.http.request<TablebaseJson, any>({
        path: `/standard`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  atomic = {
    /**
     * No description
     *
     * @name ServersAtomic
     * @request SERVERS:/atomic
     */
    serversAtomic: (params: RequestParams = {}) =>
      this.http.request<any, any>({
        path: `/atomic`,
        method: "SERVERS",
        ...params,
      }),

    /**
     * @description **Endpoint: <https://tablebase.lichess.ovh>**
     *
     * @tags Tablebase
     * @name TablebaseAtomic
     * @summary Tablebase lookup for Atomic chess
     * @request GET:/atomic
     * @response `200` `string` The tablebase information for the position in atomic chess.
     */
    tablebaseAtomic: (params: RequestParams = {}) =>
      this.http.request<string, any>({
        path: `/atomic`,
        method: "GET",
        ...params,
      }),
  };
  antichess = {
    /**
     * No description
     *
     * @name ServersAntichess
     * @request SERVERS:/antichess
     */
    serversAntichess: (params: RequestParams = {}) =>
      this.http.request<any, any>({
        path: `/antichess`,
        method: "SERVERS",
        ...params,
      }),

    /**
     * @description **Endpoint: <https://tablebase.lichess.ovh>**
     *
     * @tags Tablebase
     * @name AntichessAtomic
     * @summary Tablebase lookup for Antichess
     * @request GET:/antichess
     * @response `200` `string` The tablebase information for the position in atomic chess.
     */
    antichessAtomic: (params: RequestParams = {}) =>
      this.http.request<string, any>({
        path: `/antichess`,
        method: "GET",
        ...params,
      }),
  };
}
