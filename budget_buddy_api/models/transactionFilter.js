class TransactionFilter {
    constructor({
        UserID = null,
        AccountIds = [],
        CategoryIds = [],
        TransactionTypeIds = [],
        AmountMin = null,
        AmountMax = null,
        DateMin = null,
        DateMax = null,
        IsRecurring = null,
        DestinationAccountIds = []
    } = {}) {
        this.UserID = UserID;
        this.AccountIds = AccountIds;
        this.CategoryIds = CategoryIds;
        this.TransactionTypeIds = TransactionTypeIds;
        this.AmountMin = AmountMin;
        this.AmountMax = AmountMax;
        this.DateMin = DateMin;
        this.DateMax = DateMax;
        this.IsRecurring = IsRecurring;
        this.DestinationAccountIds = DestinationAccountIds;
    }

    isGuid(value) {
        const regexGuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        return regexGuid.test(value);
    }

    // Method to validate the filter or to convert it to a format suitable for the database query
    validateAndFormat() {
        if (this.UserID !== null && !isGuid(this.UserID)) {
            throw new Error('UserID must be a valid GUID');
        }

        if(this.AccountIds !== null) {
            if(!Array.isArray(this.AccountIds)) {
                throw new Error('AccountIds must be an array');
            }

            this.AccountIds.forEach(id => {
                if (!isGuid(id)) {
                    throw new Error('AccountIds must be an array of valid GUIDs');
                }
            });
        }

        if(this.CategoryIds !== null) {
            if(!Array.isArray(this.CategoryIds)) {
                throw new Error('CategoryIds must be an array');
            }

            this.CategoryIds.forEach(id => {
                if (!isGuid(id)) {
                    throw new Error('CategoryIds must be an array of valid GUIDs');
                }
            });
        }

        if(this.TransactionTypeIds !== null) {
            if(!Array.isArray(this.TransactionTypeIds)) {
                throw new Error('TransactionTypeIds must be an array');
            }

            this.TransactionTypeIds.forEach(id => {
                if (!isGuid(id)) {
                    throw new Error('TransactionTypeIds must be an array of valid GUIDs');
                }
            });
        }

        if(this.AmountMin !== null) {
            if(typeof this.AmountMin !== 'number') {
                throw new Error('AmountMin must be a number');
            }
        }

        if(this.AmountMax !== null) {
            if(typeof this.AmountMax !== 'number') {
                throw new Error('AmountMax must be a number');
            }
        }

        if(this.DateMin !== null) {
            if(typeof this.DateMin !== 'Date') {
                throw new Error('DateMin must be a Date');
            }
        }

        if(this.DateMax !== null) {
            if(typeof this.DateMax !== 'Date') {
                throw new Error('DateMax must be a Date');
            }
        }
        
        if((this.DateMin === null) !== (this.DateMax === null)) {
            throw new Error('DateMin and DateMax must both be null or both be a Date');

            if (this.DateMin > this.DateMax) {
                throw new Error('DateMin must be less than or equal to DateMax');
            }
        }

        if(this.AmountMin && typeof this.AmountMin !== 'number') {
            throw new Error('AmountMin must be a number');
        }

        if(this.AmountMax && typeof this.AmountMax !== 'number') {
            throw new Error('AmountMax must be a number');
        }

        if(this.DateMin && typeof this.DateMin !== 'Date') {
            throw new Error('DateMin must be a Date');
        }

        if(this.DateMax && typeof this.DateMax !== 'Date') {
            throw new Error('DateMax must be a Date');
        }

        if(this.IsRecurring && typeof this.IsRecurring !== 'boolean') {
            throw new Error('IsRecurring must be a boolean');
        }

        if(this.DestinationAccountIds && !Array.isArray(this.DestinationAccountIds)) {
            throw new Error('DestinationAccountIds must be an array');
        }

        if(this.DestinationAccountIds.forEach(id => typeof id !== 'guid')) {
            throw new Error('DestinationAccountIds must be an array of valid GUIDs');
        }
    }
}