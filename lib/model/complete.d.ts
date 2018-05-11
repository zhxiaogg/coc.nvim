import { CompleteOption, VimCompleteItem, CompleteResult } from '../types';
import Source from './source';
export declare type Callback = () => void;
export default class Complete {
    results: CompleteResult[] | null;
    option: CompleteOption;
    startcol?: number;
    icase: boolean;
    constructor(opts: CompleteOption);
    private completeSource(source);
    filterResults(results: CompleteResult[], icase: boolean): VimCompleteItem[];
    doComplete(sources: Source[]): Promise<[number, VimCompleteItem[]]>;
}
