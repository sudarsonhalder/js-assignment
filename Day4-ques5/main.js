let wages = prompt("The wages of the person is ");
        wages = Number(wages);
        console.log(`The wages is ${wages}`);

        let benefit = prompt("The sales made by the person is ");
        profit = Number(benefit);
        console.log(`The sales made is ${benefit}`);

        let final,increase;

        if (benefit <=5000 && benefit >=0)
        {
            final = (2*wages)/100
            increase = wages + final;
            console.log(`Total money earned:${increase}`);
        }
        
        else if (benefit >= 5001 && benefit <=10000)
        {
            final = (5*wages)/100
            increase = wages + final;
            console.log(`Total money earned:${increase}`);
        }

        else if (benefit >= 10001 && benefit <=20000)
        {
            final = (7*wages)/100
            increase = wages + final;
            console.log(`Total money earned:${increase}`);
        }

        else
        {
            final = (10*wages)/100
            increase = wages + final;
            console.log(`Total money earned:${increase}`);
        }
