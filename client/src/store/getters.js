export default {
    filteredKids: (state) => {
        var currFilter = state.kids.filter(kid =>
            (kid.firstName.toLowerCase() + ' ' + kid.lastName.toLowerCase())
                .includes(state.kidsFilter.text)
        )
        if (state.kidsFilter.radio === "present") currFilter = currFilter.filter(kid => kid.isPresent)
        else if (state.kidsFilter.radio === "absent") currFilter = currFilter.filter(kid => !kid.isPresent)
        return currFilter;
    },
}

