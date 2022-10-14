import React from 'react';
var typedwordno = 0;
var typedcharnoofword = 0;
var textList = [];
var word = "";
var countword = 0;
class typing extends React.Component {

    async callApi() {
        console.log('calling');
        var obj = this.props.state.textdetails;
        var body = { textdetails: obj }

        const requestOptions = {
            method: 'POST',
            Credential: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };

        var res = await fetch('http://localhost:8000/text', requestOptions).then((res) => res.json());

        // console.log(res);
        var text = res.text;
        // console.log(text);
        // var text = "Hello this is not defined";
        this.loadtext(text.text, this.props);
    }
    async componentDidMount() {
        //request to get paragraph accoriding to typing condition;
        this.callApi();
    }

    async componentDidUpdate() {
        this.callApi();
    }


    loadtext(text, props) {
        console.log("got text from server : Now loading text");

        textList = text.split(" ");

        //Creating the word display area;
        const contentarea = document.getElementById("contentarea");
        contentarea.innerHTML = "";

        for (var i = 0; i < textList.length; i++) {
            contentarea.appendChild(this.createworddiv(textList[i], i));
        }

        // Creating typing area
        const typing = document.getElementById('typingarea');
        typing.innerHTML = "";
        // console.log(contentarea.offsetTop);

        typing.style.top = (contentarea.offsetTop) + "px";

        for (var i = 0; i < textList.length; i++) {
            typing.appendChild(this.createtypingdiv(i, textList[i].length, props));
        }
        // contentareawidth = document.getElementById("contentarea").offsetWidth;
        var ele = document.getElementById(`typingword0char0`);
        ele.setAttribute('contenteditable', 'true');
        ele.focus();
        ele.addEventListener('input', () => { this.begintimer(props) });
    }

    begintimer(props) {
        console.log('begin time');
        props.state.begintime();
    }

    render() {
        return (
            <React.Fragment>
                <div className='workingarea'>
                    <div id="contentarea">
                    </div>
                    <div id="typingarea"></div>
                </div>
                <div className='result'></div>
            </React.Fragment>
        );
    }


    createworddiv(word, wordno) {
        var worddiv = document.createElement('div');
        worddiv.style.display = 'inline-block';
        worddiv.classList.add('word');

        worddiv.setAttribute('id', `wordno${wordno}`);
        var i = 0;
        for (i = 0; i < word.length; i++) {
            var chardiv = document.createElement('div');
            chardiv.setAttribute('id', `wordno${wordno}char${i}`);
            chardiv.style.display = 'inline-block';
            chardiv.style.fontSize = '2rem';
            chardiv.style.margin = '1px'
            chardiv.classList.add('chardiv');

            chardiv.innerText = word[i];
            worddiv.appendChild(chardiv);
        }

        var chardiv = document.createElement('div');
        chardiv.setAttribute('id', `wordno${wordno}char${i}`);
        chardiv.style.display = 'inline-block';
        chardiv.style.fontSize = '2rem';

        chardiv.classList.add('chardiv');

        chardiv.innerHTML = '&nbsp;'
        worddiv.appendChild(chardiv);

        return worddiv;
    }
    createtypingdiv(wordno, wordlength, props) {

        // var ele = document.getElementById(`wordno${wordno}`);
        var divcontainer = document.createElement('div');
        divcontainer.setAttribute('id', `typingwordno${wordno}`);
        divcontainer.style.display = 'inline-block';
        divcontainer.style.background = 'transparent';
        divcontainer.classList.add('typingword');


        for (var i = 0; i < wordlength + 1; i++) {
            var chardiv = document.createElement('div');
            chardiv.setAttribute('id', `typingword${wordno}char${i}`);
            chardiv.style.display = 'inline-block';
            chardiv.style.fontSize = '2rem';
            chardiv.style.marginLeft = '1.5px'
            // chardiv.style.marginBottom ='0.4px'

            chardiv.style.background = 'transparent'
            var char = document.getElementById(`wordno${wordno}char${i}`);
            chardiv.style.width = (char.offsetWidth) + "px";
            chardiv.style.height = (char.offsetHeight) + "px";
            chardiv.style.overflow = 'clip';

            chardiv.addEventListener('input', () => { this.fxn(props) });

            chardiv.classList.add('chardiv');

            divcontainer.appendChild(chardiv);
        }
        divcontainer.style.overflow = 'clip';
        return divcontainer
    }
    fxn(props) {
        // event.preventDefault();
        // console.log(typedwordno+ " : " + typedcharnoofword);
        var textarea = document.getElementById(`typingword${typedwordno}char${typedcharnoofword}`);
        // console.log(textarea);
        var character = textarea.innerText;
        textarea.innerHTML = "";
        console.log(character);


        console.log(typedwordno + " " + typedcharnoofword)
        if (typedcharnoofword < textList[typedwordno].length) {
            word += character;
            if (character == textList[countword].charAt(typedcharnoofword)) {
                document.getElementById(`wordno${typedwordno}char${typedcharnoofword}`).classList.add('correctword');
            }
            else {
                document.getElementById(`wordno${typedwordno}char${typedcharnoofword}`).classList.add('wrongword')
            }
            typedcharnoofword++;
            document.getElementById(`typingword${typedwordno}char${typedcharnoofword}`).contentEditable = 'true';
            document.getElementById(`typingword${typedwordno}char${typedcharnoofword}`).focus();
            textarea.contentEditable = 'false';
        }
        else {
            console.log('space detected');
            console.log(word + " " + textList[countword]);
            if (word == textList[countword]) {
                document.getElementById(`wordno${typedwordno}char${typedcharnoofword}`).color = 'white'

                console.log("correct");
                props.worddetails.correctword++;
            }
            else {
                document.getElementById(`wordno${typedwordno}char${typedcharnoofword}`).color = 'red'
                console.log("wrong");
                props.worddetails.wrongword++;
            }
            word = "";
            countword++;
            typedwordno++;
            typedcharnoofword = 0;
            document.getElementById(`typingword${typedwordno}char${typedcharnoofword}`).contentEditable = 'true';
            document.getElementById(`typingword${typedwordno}char${typedcharnoofword}`).focus();
            textarea.contentEditable = 'false';

            document.getElementById(`typingwordno${typedwordno - 1}`).remove();
            document.getElementById(`wordno${typedwordno - 1}`).remove();
        }
    }
}

export default typing;