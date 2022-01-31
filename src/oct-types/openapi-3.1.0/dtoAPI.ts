export type VariantKey = 'standard' | 'chess960' | 'crazyhouse' | 'antichess' | 'atomic' | 'horde' | 'kingOfTheHill' | 'racingKings' | 'threeCheck';
export interface Variant {
    key: VariantKey;
    name: string;
    short: string;
}
export type Speed = 'ultraBullet' | 'bullet' | 'blitz' | 'rapid' | 'classical' | 'correspondence';
export type PerfType = 'ultraBullet' | 'bullet' | 'blitz' | 'rapid' | 'classical' | 'correspondence' | 'chess960' | 'crazyhouse' | 'antichess' | 'atomic' | 'horde' | 'kingOfTheHill' | 'racingKings' | 'threeCheck';
export interface Clock {
    limit: number;
    increment: number;
}
/**
 * Game status code. https://github.com/ornicar/scalachess/blob/0a7d6f2c63b1ca06cd3c958ed3264e738af5c5f6/src/main/scala/Status.scala#L16-L28 
 */
export type GameStatus = 'created' | 'started' | 'aborted' | 'mate' | 'resign' | 'stalemate' | 'timeout' | 'draw' | 'outoftime' | 'cheat' | 'noStart' | 'unknownFinish' | 'variantEnd';
// TODO: ERROR! Something wrong with ChallengeUser 
export interface ChallengeJson {
    id: string;
    url: string;
    status: string;
    challenger: ChallengeUser;
    destUser: ChallengeUser;
    variant: Variant;
    rated: boolean;
    speed: Speed;
    color: string;
    direction: string;
    initialFen: string;
    declineReason: string;
}
// TODO: ERROR! Something wrong with ChallengeOpenJson 
// TODO: ERROR! Something wrong with BulkPairing 
export interface GameUser {
    user: LightUser;
    rating: number;
    ratingDiff: number;
    name: string;
    provisional: boolean;
    aiLevel: number;
    team: string;
}
export interface GameJson {
    id: string;
    rated: boolean;
    variant: VariantKey;
    speed: Speed;
    perf: string;
    createdAt: number;
    lastMoveAt: number;
    status: GameStatus;
    initialFen: string;
    winner: string;
    moves: string;
    pgn: string;
    daysPerTurn: number;
    analysis: object[];
    tournament: string;
    swiss: string;
}
// TODO: ERROR! Something wrong with GamePgn 
// TODO: ERROR! Something wrong with MasterGamePgn 
// TODO: ERROR! Something wrong with StudyPgn 
// TODO: ERROR! Something wrong with Title 
export interface LightUser {
    name: string;
    title: any;
    patron: boolean;
    id: string;
}
export interface Perf {
    games: number;
    rating: number;
    rd: number;
    prog: number;
    prov: boolean;
}
export interface StormPerf {
    runs: number;
    score: number;
}
export interface Perfs {
    chess960: Perf;
    atomic: Perf;
    racingKings: Perf;
    ultraBullet: Perf;
    blitz: Perf;
    kingOfTheHill: Perf;
    bullet: Perf;
    correspondence: Perf;
    horde: Perf;
    puzzle: Perf;
    classical: Perf;
    rapid: Perf;
    storm: StormPerf;
}
export interface PlayTime {
    total: number;
    tv: number;
}
export interface Profile {
    country: string;
    location: string;
    bio: string;
    firstName: string;
    lastName: string;
    fideRating: number;
    uscfRating: number;
    ecfRating: number;
    links: string;
}
export interface Count {
    all: number;
    rated: number;
    ai: number;
    draw: number;
    drawH: number;
    loss: number;
    lossH: number;
    win: number;
    winH: number;
    bookmark: number;
    playing: number;
    import: number;
    me: number;
}
export interface User {
    id: string;
    username: string;
    online: boolean;
    perfs: Perfs;
    createdAt: number;
    disabled: boolean;
    tosViolation: boolean;
    profile: Profile;
    seenAt: number;
    patron: boolean;
    verified: boolean;
    playTime: PlayTime;
    title: Title;
}
// TODO: ERROR! Something wrong with UserExtended 
// TODO: ERROR! Something wrong with Crosstable 
// TODO: ERROR! Something wrong with GameChat 
// TODO: ERROR! Something wrong with PuzzleJson 
export interface PuzzleRoundJson {
    id: string;
    date: number;
    win: boolean;
    puzzleRating: number;
}
// TODO: ERROR! Something wrong with PuzzleDashboardJson 
// TODO: ERROR! Something wrong with StormDashboardJson 
// TODO: ERROR! Something wrong with RatingHistory 
// TODO: ERROR! Something wrong with PerfStat 
// TODO: ERROR! Something wrong with Top10s 
// TODO: ERROR! Something wrong with Leaderboard 
export interface UserPreferences {
    dark: boolean;
    transp: boolean;
    bgImg: string; // format: "uri"
    is3d: boolean;
    theme: string;
    pieceSet: string;
    theme3d: string;
    pieceSet3d: string;
    soundSet: string;
    blindfold: number;
    autoQueen: number;
    autoThreefold: number;
    takeback: number;
    moretime: number;
    clockTenths: number;
    clockBar: boolean;
    clockSound: boolean;
    premove: boolean;
    animation: number;
    captured: boolean;
    follow: boolean;
    highlight: boolean;
    destination: boolean;
    coords: number;
    replay: number;
    challenge: number;
    message: number;
    coordColor: number;
    submitMove: number;
    confirmResign: number;
    insightShare: number;
    keyboardMove: number;
    zen: number;
    moveEvent: number;
    rookCastle: number;
}
export interface ArenaTournaments {
    created: ArenaTournament[];
    started: ArenaTournament[];
    finished: ArenaTournament[];
}
// TODO: ERROR! Something wrong with ArenaTournament 
// TODO: ERROR! Something wrong with SwissTournament 
// TODO: ERROR! Something wrong with Simul 
// TODO: ERROR! Something wrong with BroadcastTour 
// TODO: ERROR! Something wrong with BroadcastRound 
// TODO: ERROR! Something wrong with OpeningExplorerJson 
// TODO: ERROR! Something wrong with OpeningExplorerPlayerJson 
export interface TablebaseJson {
/**
 * `cursed-win` and `blessed-loss` means the 50-move rule prevents
the decisive result.

`maybe-win` and `maybe-loss` means exact result is unknown due to
[DTZ rounding](https://syzygy-tables.info/metrics#dtz), i.e., the
win or loss could also be prevented by the 50-move rule if
the user has deviated from the tablebase recommendation since the
last pawn move or capture.
 
 */
    category: string;
/**
 * [DTZ50'' with rounding](https://syzygy-tables.info/metrics#dtz) or null if unknown
 
 */
    dtz: number;
/**
 * DTZ50'' (only if guaranteed to be not rounded) or null if unknown
 
 */
    precise_dtz: number;
/**
 * Distance to mate (only for positions with not more than 5 pieces) 
 */
    dtm: number;
    checkmate: boolean;
    stalemate: boolean;
/**
 * Only in chess variants 
 */
    variant_win: boolean;
/**
 * Only in chess variants 
 */
    variant_loss: boolean;
    insufficient_material: boolean;
/**
 * Information about legal moves, best first 
 */
    moves: Move[];
}
export interface Move {
    uci: string;
    san: string;
    category: string;
/**
 * DTZ50'' with rounding or null if unknown 
 */
    dtz: number;
/**
 * DTZ50'' (only if guaranteed to be not rounded) or null if unknown
 
 */
    precise_dtz: number;
/**
 * Distance to mate (only for positions with not more than 5 pieces) 
 */
    dtm: number;
    zeroing: boolean;
    checkmate: boolean;
    stalemate: boolean;
    variant_win: boolean;
    variant_loss: boolean;
    insufficient_material: boolean;
}
export interface Team {
    id: string;
    name: string;
    description: string;
    open: boolean;
    leader: LightUser;
    leaders: LightUser[];
    nbMembers: number;
}
export interface GameEventPlayer {
    aiLevel: number;
    id: string;
    name: string;
    rating: number;
    provisional: boolean;
}
export interface GameFullEvent {
    type: string;
    id: string;
    variant: Variant;
    clock: Clock;
    speed: Speed;
    rated: boolean;
    createdAt: number;
    white: GameEventPlayer;
    black: GameEventPlayer;
    initialFen: string;
    state: GameStateEvent;
    tournamentId: string;
}
export interface GameStateEvent {
    type: string;
/**
 * Current moves in UCI format 
 */
    moves: string;
/**
 * Integer of milliseconds White has left on the clock 
 */
    wtime: number;
/**
 * Integer of milliseconds Black has left on the clock 
 */
    btime: number;
/**
 * Integer of White Fisher increment. 
 */
    winc: number;
/**
 * Integer of Black Fisher increment. 
 */
    binc: number;
    status: GameStatus;
/**
 * Color of the winner, if any 
 */
    winner: string;
/**
 * true if white is offering draw, else omitted 
 */
    wdraw: boolean;
/**
 * true if black is offering draw, else omitted 
 */
    bdraw: boolean;
/**
 * true if white is proposing takeback, else omitted 
 */
    wtakeback: boolean;
/**
 * true if black is proposing takeback, else omitted 
 */
    btakeback: boolean;
}
export interface ChatLineEvent {
    type: string;
    room: string;
    username: string;
    text: string;
}
export interface GameEventInfo {
    id: string;
    source: string;
}
export interface GameStartEvent {
    type: string;
    game: GameEventInfo;
}
export interface GameFinishEvent {
    type: string;
    game: GameEventInfo;
}
export interface ChallengeEvent {
    type: string;
    challenge: ChallengeJson;
}
export interface ChallengeCanceledEvent {
    type: string;
    challenge: ChallengeJson;
}
export interface ChallengeDeclinedEvent {
    type: string;
    challenge: ChallengeJson;
}
// TODO: ERROR! Something wrong with Ok 
// TODO: ERROR! Something wrong with Error 
// TODO: ERROR! Something wrong with NotFound 
// TODO: ERROR! Something wrong with SwissUnauthorisedEdit 
// TODO: ERROR! Something wrong with MoveStream 
 
