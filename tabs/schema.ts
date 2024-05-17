type TabsSchema = {
    tab1Enabled: boolean;
    tab2Title: string;
    tab3Color: string;
  
}


const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        button.classList.add('active');
        tabContents[index].classList.add('active');
    });
});