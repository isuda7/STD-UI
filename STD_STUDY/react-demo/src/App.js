import logo from './logo.svg';
import './App.css';

function App() {
	// 주석
	const element = <h1>React Study</h1>;
	return (
		<div className="App">
			{element}
			<div className="section">
				<h2>1. Hello World</h2>
				<p>Hello World</p>
			</div>
			<div className="section">
				<h2>2. JSX 소개</h2>
				<p>JSX는 변수를 중괄호로 적용합니다. &#123;변수&#125;</p>
				<p>속성에 따옴표를 이용해 문자열 리터럴을 정의할 수 있습니다.</p>
				<p>어트리뷰트에 JavaScript 표현식을 삽입할 때 중괄호 주변에 따옴표를 입력하지 마세요. <br/>따옴표(문자열 값에 사용) 또는 중괄호(표현식에 사용) 중 하나만 사용하고, 동일한 어트리뷰트에 두 가지를 동시에 사용하면 안 됩니다.</p>
			</div>
			<div className="section">
				<h2>3. 엘리먼트 렌더링</h2>
				<p>React DOM은 해당 엘리먼트와 그 자식 엘리먼트를 이전의 엘리먼트와 비교하고 DOM을 원하는 상태로 만드는데 필요한 경우에만 DOM을 업데이트합니다.</p>
			</div>
			<div className="section">
				<h2>4. Component와 Props</h2>
			</div>
			<div className="section">
				<h2>5. State와 생명주기</h2>
			</div>
			<div className="section">
				<h2>6. 이벤트 처리하기</h2>
			</div>
			<div className="section">
				<h2>7. 조건부 렌더링</h2>
			</div>
			<div className="section">
				<h2>8. 리스트와 Key</h2>
			</div>
			<div className="section">
				<h2>9. 폼</h2>
			</div>
			<div className="section">
				<h2>10. State 끌어올리기</h2>
			</div>
			<div className="section">
				<h2>11. 합성 vs 상속</h2>
			</div>
			<div className="section">
				<h2>12. React로 생각하기</h2>
			</div>
		</div>
	);
}

export default App;
