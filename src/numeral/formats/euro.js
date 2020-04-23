import numeral from 'numeral';

// load a format
numeral.register('format', 'euro', {
    regexps: {
        format: /(€)/,
        unformat: /(€)/
    },
    format: function(value, format, roundingFunction) {
        var space = numeral._.includes(format, ' €') ? ' ' : '',
            output;
        // check for space before %
        format = format.replace(/\s?€/, '');

        output = numeral._.numberToFormat(value, format, roundingFunction);

        if (numeral._.includes(output, ')')) {
            output = output.split('');

            output.splice(-1, 0, space + '€');

            output = output.join('');
        } else {
            output = output + space + '€';
        }

        return output;
    },
    unformat: function(string) {
        return numeral._.stringToNumber(string) * 0.01;
    }
});