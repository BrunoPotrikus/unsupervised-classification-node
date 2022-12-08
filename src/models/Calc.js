class Calc {
    calcMean (data) {

        let sum = 0;

        for (let i = 0; i < data.length; i++) {
            sum += data[i];
        }

        const mean = sum / data.length;

        return mean;
    }

    calcStdDeviation (mean, data) {

        let sum = 0;

        for (let i = 0; i < data.length; i++) {
            sum += Math.pow((data[i] - mean), 2);
        }

        const div = sum / (data.length - 1);
        const stdDeviation = Math.sqrt(div);
        
        return stdDeviation;
    }

    calcVariance (mean, data) {

        let sum = 0;

        for (let i = 0; i < data.length; i++) {
            sum += Math.pow((data[i] - mean), 2);  
        }

        const variance = sum / (data.length - 1);
        
        return variance;
    }

    calcTotalVariances (data) {

        let sum = 0;

        for (let i = 0; i < data.length; i++) {
            sum += data[i].variance;
        }

        return sum;
    }

    calcPercVariance (total, data) {

        let perc = data / total;
        return perc;
    }

    calcTotalPercVariances (data) {

        let sum = 0;

        for (let i = 0; i < data.length; i++) {
            sum += data[i].percVariance;
        }

        return sum;
    }

    calcFisher (mean0, mean1, std0, std1) {

        const fisher = Math.pow((mean0 - mean1), 2) / (Math.pow(std0, 2) + Math.pow(std1, 2));

        return fisher;

    }
}

module.exports = new Calc();