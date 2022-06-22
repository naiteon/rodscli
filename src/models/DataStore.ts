type Entries = {[key: string]: any};

export default class DataStore {

    private static instance: DataStore;

    data: Entries;
    transactions: Entries[];

    private constructor() {
        this.data = <Entries>{};
        this.transactions = [];
    }

    public static getInstance(): DataStore {
        if (!DataStore.instance) {
            DataStore.instance = new DataStore();
        }

        return DataStore.instance;
    }

    getCurrentTransaction(): Entries | undefined {
        return this.transactions.at(-1);
    } 

    getCurrentContext(): Entries {
        return this.getCurrentTransaction() ?? this.data;
    }

    setEntry(index: string, value: any): void {

        let curTransaction = this.transactions.at(-1);
        
        if(curTransaction === undefined) {
            this.data =  {
                ...this.data,
                [index]: value
            };
        } else {
            this.transactions[this.transactions.length -1] = {
                ...this.transactions.at(-1),
                [index]: value
            };
        }
    }

    getEntry(index: string): any|null {
        let ref = this.getCurrentContext();

        return ref[index] || null;
    }

    unsetEntry(index: string): void {
        let curTransaction = this.transactions.at(-1);
        
        if(curTransaction === undefined) {
            if(index in this.data) {
                delete this.data[index];
            }
        } else {
            if(index in curTransaction) {
                delete curTransaction[index];
            }
        }
    }

    numEqualTo(value: number): number {
        let ref = this.getCurrentContext();
        let result = 0;

        let found = Object.values(ref).filter(element => element == value);

        return found.length || 0;
    }

    beginTransaction(): void {
        this.transactions.push({} as Entries);
    }

    commitTransaction(): void {
        if(this.transactions.length > 0) {
            this.data =  {
                ...this.data,
                ...this.transactions.at(-1)
            };

            this.transactions.splice(-1, 1);
        }
    }

    rollbackTransaction(): void {
        if(this.transactions.length > 0) {
            this.transactions.splice(-1, 1);
        }
    }

}