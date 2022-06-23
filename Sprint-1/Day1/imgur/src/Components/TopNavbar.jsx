import React, { useState,useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Style/Navbar.css';
import {useNavigate} from 'react-router-dom';


const TopNavbar = () => {
   const navigate=useNavigate();
    const [suggestions, setSuggestions] = useState("");

    const debounce = (func) => {
      let timer;
      return function (...args) {
        const context = this;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          timer = null;
          func.apply(context, args);
        }, 500);
      };
    };

    const handler = (event) => {
        if(event.key==='Enter'){
navigate("/search");
        }
    };
    
    const handleChange =async (value) => {
      const res=await fetch(`https://api.unsplash.com/search/?query=${value}photos/&client_id=CiUHdv8t1CZ0RdkGWvepkPXZAFaWvFZNgM7IyR5o0ME`);
      const data=await res.json();
        setSuggestions(data);
        localStorage.setItem('searchItems',JSON.stringify(data));
        console.log(data);
    };

const display = useCallback(debounce(handleChange), []);
   
  return (
<div className="navContainer">
        <div className="logo">
            <Link to='/'><div><img src="https://images5.alphacoders.com/415/415275.jpg" alt="imgur" /></div></Link>
            <Link to='/post'><button className='green'> New Post</button></Link>
            
        </div>
        <div className='searchContainer'>
           
            <div className='search' >
                <input type="text" onChange={(e) => display(e.target.value)} onKeyPress={(e) => handler(e)} placeholder='Images, #tags, @users oh my!...'/>
                <div><img style={{width:"40px", height:"30px"}} src="https://th.bing.com/th/id/R.27fd7bcbe89bcf85757a4960e2e802ef?rik=tzjKihQb7nZyIA&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fJ%2fQ%2fb%2fm%2fQ%2f3%2fsearch-without-text-hi.png&ehk=9eMoP62OuVqLaZXsB0rTrqZSuz9%2fwvIdeMCmaXpzIBY%3d&risl=&pid=ImgRaw&r=0" alt="search" /></div>
            </div>
            
        </div>
        <div className="login">
            <div>
                <img style={{width:"40px", height:"30px"}} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAD3APgDASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAQFAgMGAQf/xABEEAACAgECAwUFBQMKBAcAAAABAgADEQQSBSExE0FRcfAGImGBkRQyobHBI0LRFSQzQ1JicoKS4RZjovE0U4OjssLT/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAIFAQMEBgf/xAAxEQACAgEDAgQEBAcBAAAAAAAAAQIDEQQSITFRBRMiQQYUMnEkYZHRQlKBscHh8KH/2gAMAwEAAhEDEQA/APkUREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAERO64L7KaWunT38a07M+qCmulnsr+zq3NDYEIOT3g9M+OQNdlka1mRsrrlY8ROIqrtudKqkey2xglddalndicAKq8yZ1Ok9itddVYdTq69NqFVX7A1m3Cnl77qwAPiAD+k7Xhui4TwbXq9WlopW2q2hnWstagPvAqTufuwceM3uznUtdRUdhRk/b+5uDYIO1cnl8pwWaxv6ODtr0iX1nE6D2G1Op1N1V/EKK6qaxaWqrssscbgpVVbao+Zlqnsh7PlNZpyupL1rUU1HbftQTuz7oHZ45f2ZfJ29Fr3LfWjuhrICIRtJBIxYT4TEEg2MNSc27d521YOM4/dnPLVWP3N609cfY5Cr2C1uobU2UcQ0q6amwV7r0tFpJG7GysFeQx+8JHu9itatOqfTauq+2jZirszV2hIJKo7MRkfEDr9e8pt1FNVlNVtLJY5sYPWC24gL95CD3Cax2tddiGvczu1jNW2eoAA2tg93iZP5yzgh8rW8nx10srd67EZHQlXVwVZWHUEHnMZ9ls4f7PXaFG1Wj0Oq1JUvqLbKx26M3PYz8rAFGAOfdOU4z7K6T+T21nDqTVqVLXHThnZbNPjoock7h97r346jn2w1cJNJ8HJPSyWWjhYiJ1nKIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAJJ0Wkt12q02kq+/c+3OM7VALMxHwGT8pHAJIABJJwAOZJ8AJ9E9i+DpoLdRqeKKadTqaFo0a2DlUrnc/a+DNgAeHMHGZqtsVccmyutzlg3aH2W4RoVo1VLPqr63WxLtQAFSxCDypHujB7iWnTaiwcQrrPZGtnXN7NzXd3iod4PXJ8e+F0aLbewb9j0ZQfcsKnqcdw6fGQdXq9TfeNBw6vtNQ2QSuNqY5EknkMd56D4nkKaU5T5ky2jGMeIIarV6LRBi7brCBkk7nYeJJOcfMCRal9o+Kc9Fo2roP3btQRXXjxBfGfkrS90HAOH6BTq9eyanUrh3stBamtv8Al1tnJ+JyfDEt7NXVUUWzf2rgFaVG63B6AqDgfWTjUusiDs7HMV+yfFbBnVcXVCf3NNXY4HzLIP8Apmz/AINp6/ytq93j2VfX/VOo3EgEjBwMg4JHw5cp5um3ZEhvl3OUs9lOJ1jOl4uHI6LqK7Fz8wzj/pkO1PaPhmTq9KbaR1uoIsQD4lenzUTtixwcDJ7hkDPwyZHTWVWM6JvFy53UuNtpx1AB5E/ORlXFklORzFGq0GvUA7Q2OhwGA+Hw+ZElGg2XUjU2fzbO61wCGIHRDt6Z6Z/KSNbwbh3EF+1aQrp9QSWW2oba3Yd1iDBB8SAD5yu02q1OluOh4gpSxfdVjjDg9CCOWD3dx+B66HHazapZXBA477Pez/EbcabSDTaxzyfQgIh7y1lX3MeJAHnPnHE9BbwzXavQ2sGbT2FQ6ghbEI3K6g9xGDPsdtHYLZbQgIsA3bRlvgB8JzHtN7KcS11NfEqjUddUmy3R/wBbZSMlSHzt3jmNvh35GD2ae6Sltm+Dlvpi47oLk+bxPWVlZlYFWUkMCMEEciCDPJZlcIiIAiIgCIiAIiIAiIgCIiAIiIAiJ6ASQAMknAxAOo9itJbfxLVahFUnR6U2IWRXC2O6oCAw643T6Lp6vtblbaShrwbCOdbDnyXPOc/7K8P13ANNdbZUjajXLW2pptU/s0TcUrBBBDcyW+n7vPuF206azU2IK8p2rqDnaNucZx+kqbmrLMp8ItKk668Ncsp+Kai1Oy0WkBOouKogTltBOBg93f5YJ7hLHh2h0vCtPtyGudTZqLQPesNa7iFH9le4fHxMh8Kq7W3U8TvwGculWelaD77D6bR5Hxm99SPtIawWCu3S1qmxGdtj4dgAozz6Gaoc+pk58elG5vtWrqouUqCLDcA+RX1wqKQD90dT4k+HKTUNuW7Gut2+8UYOWPiXKhpoqr0y+/Xp+zzzG9Srf6STj8JtZ1VWdjhUVnY+CgZJm3JA2lp4WlLZxLUuT2e2pO4BVZ8f3mbPPyE1fbtYP69vmEP6RkztL7dNVwDgHsK7WXmu99hUjoQ4Ut9JX6XiDW2LVdtDOdqOBgFj0Ujpz6CTi0xkYwQ9us0lOr1LlSXsF4CFmrGDhkYkA+8Oh8QPHn7q9PpeKacKSA4RbaHI95O0XcM/3T3+XiJlfTpH9+3TC0jmdilm+aAjP4yB9rUasNStpqo0l/ab0evFVebApDgHK9B5/WD7E13M+F6izNuh1X9NVlfe57gOR9fEGZaynU9ptN2yjbkNjNhHTaM8vnI+sOXo19JBdShJH7yEe7+HL5y6sqq1+iRwWCsquGTG8DkSRnlmalynEm/S0z5P7a6fT1a/Q3UKAL9J+1PVrLUtcF3PeSMZ8pys+r+0/A+GcQ4dt0aleIaQvbQ72Fm1AIG+l8nHPGV5Dny/e5fKSCCQQQQcEHqDLbTTUoJe6KzURxNv2Z5EROk5xERAEREAREQBERAEREAREQBJGhfs9boLP7Gq07+H3bFPWR5YcG4e/E+I6PSKCVZ99xGfdpr99zkfDkPiZiTSTbJRTbSR9kq0evXU01G1mqNwDi0B/cBycMeY+sncdZq9IlS9brFQf4V94/kJr4Q/ErdbUuovssqWuxiHVSdwwB72M/jN3HBnVcNrPQFn/wCpf4SjfFTaLfObEmRnApo0+jQgGyqyhT05rWSSc+JmOmfXhEU1LUu1d1rvuLKAFXZWpx0x1P54kfWmx7K1rYCyuvtkBON2WKMAfpNtf2gNWdVYhcgmqmoYrQLyLk9SRnGegz48xs6cEMZJm4SNrnxpNTzxlUB8jYoMzLzEsCMEAjI5EAjlz74bM4KYuOfMSdqhUvDeHsiICw09jMANzNbv3Enqe76TfbatVVthVT2aF8YUZx3ZxKzU619SldZUIiMrfeJPug4UcgAOfhMZJYNDOVDMCQVG4EdxHMTo7W/aPywSQ3+oBpQaWhNTaFexErX3rBn9o6jmVrXvJ/DrLey3e7vyG5iQBzwO4RngNcmzdn/brKviV/EuysrqpS9Nth7Wuza6KVKsHqc+BOSG+mMSU9uOQ6/lINw1BdjpLa1uAU20XgGm1W90OO8HuJzg458xk62ySWD3Sk9k+isILaenT1sRzHv1BuR+BzL3gDFtPbSf6mwgD+63vfxnLcP7aq5xcym3UUm9wpB2KjCpASOWev4Tp/Z//wAVrF/tVo2PJmH6yMHiyJmxehlbqqdFptZbXZWGPagntWLKAxDclPu/hPjnEbhqOIcSvGMXavU2jaABhrGIxifeeKWaHS67dbRp2uKV2Bra0ZscwB7w+E+Je0Oiq0PGOIU0j+bPadRpcdBTd+0Vflnb8pYaVKM5ROLUtyhFlTERLA4BERAEREAREQBERAEREAREQBLr2Y1f2XjGiDWNXXqz9jsdWKkC4gKSQem7bmUs26atrtRpqlzutuqrXHXLMFGMSMkpRaZKDcZJo+1ainiXDdFxXW036hbqdGxrcu52N21WSM8s4yJA0PEtbrl4fdq7nttAZNznJ5ai1f4SYaNTZ2qai+1vtFOo0w+0WsdzW1si4DnrnEo9Fuq04GMGm9vPFgDj8VaUMvpwi6XEssu9YGa2rY4Sxai1Rbo20ksuQPmOU2VjsXKPabtTava3Oc8kXkoAPRcnl8z3ctGrNdldTsSE3Al1GSgYDDY7x48/ymFTVUitVsNl+ptBscnJKpnJ7+QAIHjn6bMkdpYbhMLLkrRnc4VcZOCepwOQ5zVvzI+tb+a3/wDpn/3FmMksGyzV6O1LK2d9rqVbarg4PgcSLqqq66qL694S3ZgOc5VwSrDPPukItJuucDh/Dcn+r0X/AN5kEM2MhDoSHT3kI6hhzBEu77FVzt/fVLAO4B0D/rOZsu91tvQA5Pf07pe3Eq1anqun0qnzFKZkZPgylye7syNcovsWtbTRqq17XTXLnOwnDAgdVyPeHkfgcy+PKRLzVct9Vjmu7S2F6bNwDKHxtPUcjkA8+WPrqRPBjoUdNRabLFsuelbLmUHbWGYbEyQOfUnkO4SXfxDWaGnW3aS16rRUFDIcHJvqUfmZG0K1Vpc1ZZq2flY42tbs5F9uTgdwGe7PUzVrCW0tuASbLkUDxFSmxvxZfpC5kjEvpZZ169tVo+E36/bdqbtJvey9VZiGvt2jLDwxPnPtTr6tfxa/sVrFGkVdHV2ahQ3Zkl35eLFsfKfVtJrquHjR6FuS6SvTUkOuASiqHI3DxzPiuvQVa7iFY6V6rUIPJbGAljpEnNyODVNqCRGiIlkV4iIgCIiAIiIAiIgCIiAIiIAmdVtlFtN1TFbabEtrYdVdCGBHlMIgH2H2es0XGtCnEQ6JZS6rqxa4BovXDZLOeh6qc/iDjK7T1faNUKmVqdUGap1+5uLblIz4NkfOcN7E7bNfr6WICnR9udxwo7KxRkk8v3jPoNbaewimvcwXLCzGKyT1Vc85T3QUJ7V0LaqbnBS9yHpLt9T0vyavKEHnhTy5g+HSa1s0ulsctUy2bCOpZCOuazjOG785x4zZxKi7TWLrqgSOQ1AHTw3Hz7/j5zQ2oFyK1YqJ5lRqFFlZ+DAjIPxH/bnzt4ZvXq5RJqsYJp1fO56yxz1zyb9Z7bseuytjgOpXPhnvleH11lq23LsrrDqCpDAu5xgsCef8PE8/Et920nJFdjjPU7M5/CRcsE0jTY71kqynI7z90/ETVbqLbUpW20tXSP2SkgKvXw8zjzk/d8eX4TIORzGAfgq5/KPM7mdpE0ulbUsrWBk0isDdcRgFRzKV56segx8+ksrbTbbbYRjexbA6KD0A8poa13ILuTgYyxJwPnNFluUrI+7ZYoz/AHM9fn+sw5ZCWOWbrXLJqUT76Vhh583/AEkWyzS6tqv2TvdsAAVii9ck2sBnavwwTnGekzcapLWupXclgrQtu2bXU4wrEjn5ePiOWanslZrDSpwNy6eta618AuBknxJ/3LpyZM7G7NEqXmSAihRjIHIAAePdJ1GkNl+jp2hxpxvcZwr2Ke0YZPLBbC+Qkfhems1Nh1jqRWpI04PQsOW7yHd8fKWbdtTj7OFZg2bQDhzjoFzy8c85sisLczVJ7ntRXcW4u/B9NbfrqGNpLLp6Ll92+48+R6bR1Yg/DqZ8mvus1F199pBsuse2wqAoLOxY4A5Cdj7e8ROrt4HpjuH2bTai1lORh7rdvMH4IJxUtdLWow3dyr1M3KW1+wiInUcwiIgCIiAIiIAiIgCIiAIiIAiIgG7S6rU6O6vUadylqHkRggjvDA8iD3ifVPZ/2o4XxDSOG0zLxOoKLNMuewsB5dqr9QviOvPqc5HyWWXA+ILwziej1T7uwD9nqQgyTQ/utgeI6jymi6pWRb9zfTa4Sx7H2jSMmqrFGoUB2BUcvdfI+6M9/wAO+c7xTher4VY91Ss+jYliBk9mPHyHj3d/iZ3DLaONOt+lvrtrT7ldD5eoeLpycMe8kflLpeJabtbtFqm7WushDqNpK7wOYfbzyvTcP9zUtZ4kWecPMTjFfSaj3mUM2NpZTstA8GIByPNTMzVaE2Uaa7bz94PXerZ5ZzUAR8OX8ZdcS9lUsJ1PDLAjPmwKpBRs942nHzH0M5y6viujYrqtI7BcAvUpb64GR81E1uDRtU0yUtdyAJsLFRzFZVyPgQhJyPKeZbptfP8AZ2Nu/wBOM/hIK6/SNy3YI6gjOP8ATmZ/a9N/5g+jfwmpp9jamu5Mau5wU2MpYHHaFUz8MOQeflPOytK7L9Ldt5DcXrpVccs7rQSfpILa/Rry35J7gMZ/1YmyleKaxlXSaNwG5B7VIHy3DP0UyST7EJNdzex0mnBcIFbGA7N2lpHghIGB5KJI4bwzV8XtWx0avRLgjOQbAfDvwfHv7uXMWnDfZQA/auKWByoDsrkCtcc8sG5fNj/lEun1TNVdTwlUzWhIt5je3etAPMn+8fl4jaoY5kanPPETTa2k0jVaNSodQA6rgGtByC8uhP4TmfaXiVXs6unsqb7Tbrhc+lpsJzWEIBe4jquThehOD4ZMnUazhtdHaa/VVaQruZLLSe03dSBWP2jZ7xifNOP8Ufi3EbtTuJpRU0+lByMUV8gcHxOWPnOmivzZZkuDnus8qOIvkia7X67iWps1etua6+zALN0CjkFUDkAO4CRYiWqWOEVjeeWIiJkwIiIAiIgCIiAIiIAiIgCIiAIiIAiIHfALbhgvpX7TTZZVdv8A2dlTsjrt5ZDKQZ3/AAfilV2jYkouurK09nkDczDlcoPdjmfiMd85Kiha6KK+9a13f4jzP6zJqge4GUt1inJnv6vCPw8I++D6Zpq9ToNFdqVuuqWtAwUjfVbYx2qrI/u8yeowfpNq8YrsqVtfolZdyrvoKvhj0xXbhvo8+ZVajXacjsr7lUMG7Mu5qJH9qsnafp9J0NfH9BZTpFvS6p0sZ7krTtFJACqUORy5nr+PWa8tdCtv8Ntr5xn7HVW0+ympUNfWawTgHUae5Rk926xGX8ZH/kn2I69tosd39D/+Up9T7UcHvp02lqTWIq3i17ba0FeAhUYVHZu/wkl9boCmg1H2zT9gO2zb2q7V+5155z8MZmXJr2OKWnnH6k0WtdPshpNprUMTkr2FF2Wwe4oiD8ZvHFaVfsNDolrYhSX1OEXDdD2dJLH5uJzPE/ajglr6GrTnV39h2wtuWoJXhtpAQWMHPQ9w6zTf7Q8PXsNRp1utvRGrNVqGtcg7lLOCeXXp+HUZbkmThpLJ9Is6DW2606sV6qw3VbUtpAQJRhh1Fa+7kHI55lTrOLfyEtppKWXuCdChYOFJz71oB6L4Hry7jOV12u4jxO/t9Ze7sAERBlaqkHMJXWOQHrnI61AdwGfhiR4Tzkt6PCJPG8rOJi68Wau92sva02XWOSXdrCSWJ+JlROpuoWym6rvdGA88ZH6TlsYlnpbN8WuxS+O6P5a6Ml0kv7f8hEROs8+IiIAiIgCIiAIiIAiIgCIiAIiIAiIgCbtKnaX0qem4MfJec0yboFw1lh7gFHmeZ9fGQslti2dWjr8y+MX0yXQs9evXKZiz1mRA/wCPr15z3f8AGUzgfR4anBN3g9fQjCN85FD+vjMxZ09eu6QcGjpjqE+puNYP+01mnvwM/Dx/OBZ69fKbBZ3Rlok41T6mFdQBLHHgJswg85razmf09ecwLxhy6kVKutYib94+EwNk0F/j3zAv8fCSUDXLUm82Y9evRlBq02ai4AcixZfJucti3r165Sv165NVniCp+XMevhOzTemWO55zxt+dQpfyv/RBiIlieMEREAREQBERAEREAREQBERAEREAREQBLPSptpTxbL/XpK1VLMqjqzBR85dhdoCjoAAPIY9fOc2olhJF54RTunKzt/kx5+vXrEZMyxPMTjPRbWhumW8zDHWMeHr1+kYRlSkjaHMyD4yZo5iMmR2mxXNG0uZiW9GYc/zjHr165zOERdsme7vXwnhJjE9xMkPUzzn69eszTqU3U2d+3DD5evxkjE92ggg9DkH58vXlMxltaZCynzIOD9yiiZOhR3Q9VYg/KYy0PCtNPDEREGBERAEREAREQBERAEREAREQBERAJWhr33gnpWpc+fQevhLbH+8icNrxVbZ3u20eS/8AeTsevXylbqJ5njse38J0+zTKT/i5/wC/Q1kH1+k8wJsxPCJoyWbga8evXrnPMevXrnNhHr165Rj0PXrEzk1us14mg2fzkVcsdnj/ADfe/KSsfT5dJTG4/aDdz/pN3U9MzopjvyVPiN/y+z83/wCLqW2Ix67vX8JngfDpy6dDGPXr1zmjJaqGTHHr165T0CZgevXrnAEjkmoGIHr+M9x69fKZY9fCe4mMmxQKfX17L9w6WKG+fQyJLfiNeaUs763wfJv95US0plugjwvidPk6mS9nz+oiIm4rRERAEREAREQBERAEREAREQBETfpKu21FFfcXBb/CvvGYbwsk64OyShHq+C709XZUUpjmqAt5nJP6zZibcevXrlPMSjctzyfVIUKuCguiWDXj9fXjMcHPrym3E8x+sxkOBrx69euc8xNmJ5j0JLJBwI2pbs9Pe3PO3YPNuUo+ktOKPhKKh+8TYfIe6P1lVLPTRxDPc8N43bv1Oxfwr/Zd6Ru009Ld4Gw+a8u6SAPQ8JA4W+RdUe4iwf8AxP6SyAnDcts2j1Hhs/P00Jf0/Qxx69euUY/XMzxPcTTkslAxx69evOe4mWPpPceszGTYoGm6rtabq8c2QgeY5j9Jzc6vE53WVdjqb07g5ZcdNrcxid2jn1ieV+ItPhQuX2f91/kjRESwPICIiAIiIAiIgCIiAIiIAiIgCWPCuwSy2222tNibEDsASWPPA8vzldEhOO+LidOlv+XtjalnB0zazh466ms+W4/kPWZrbiPDh/XM3+Gtv1nOxOVaOC92XsviTUvpCK/X9y+PFNB3dqf8gH5mS0auxFetg6now7/P8Jy036fU36Zt1bcj95TzVvMTE9JHHo6mzTfEVnmfiEnH8uqOkI9evlPNs06XWUaoe6dtoHvVnr5qe8Te7CtLLT0rRnPyGRK9xlF7WuT19dtVtfm1yzHuc/xGztNVbjpXisf5Rg9ZEmTMWLMerMWPmTmYy8jHakj5ZqLXdbKx+7bJWhs7PVU5PJyaz/m5D9J0GP4TllJBBHUEEeY5zqamFtdVg6WIH+o5zg1kcYkes+G7d0Z0v25Pceus8YpWjPYyoi/eY9B65zXqtXRpB+0O6wjK1Kefm3gJQ6nVX6ls2N7o+6i8kXyE0U6eVnL4RaeI+LU6NOEfVPt2+/7FsOKaH/mjwOwH9czYvEuHH+tYdOtbfpmc7E7Ho6/zPNx+ItXHqov+j/c6Zdbw89NTWP8AFuGPqPWJWcVNDvRbVbW+5CjBGBI28xkfP8JWRJV6ZVy3JmvWeN2ayl02QX3WREROooRERAEREAREQBERAEREAREQBERAEREAREQD1WZSGUkEEEEZBB8xLB+JWW6Syixc2NtXtBgZQHJDDxldEhKEZYbR0U6m2hSjXLCksM9M8iJM5wJY18Tsp0qUVriwFh2jc9qk5G0eMrokJQjPiR0Uam3TtyqlhtYMmZmZmZiWYkksckk+JmMRJmhvPLEREGBERAEREAREQBERAEREA9IIJB6gkHzE8iIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAegEkAdSQB5mIiAf/Z" alt=""/>
            </div>
            <div>
                <button className='blue'>Go Add-Free</button>
            </div>
            <Link className='link' to='/login'>
            <div className='signin'>Sign In</div>
            </Link>
            <Link to='/sign'>
            <div>
                <button className='green'>Sign Up</button>
            </div>
            </Link>
            
        </div>
        
    </div>
    
  )
}

export default TopNavbar;