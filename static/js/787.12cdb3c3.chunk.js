"use strict";(self.webpackChunkreact_homework_template2=self.webpackChunkreact_homework_template2||[]).push([[787],{3787:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r=t(2791),a=t(4087),i=t(5946),o=t(9439),s=t(9434),c=t(3461),u=function(n){return n.contacts.items},l=function(n){return n.contacts.isLoading},d=t(2392),f=t(8208),x=t(9140),h=t(4224),p=t(184);function m(){var n=(0,r.useState)(""),e=(0,o.Z)(n,2),t=e[0],i=e[1],l=(0,r.useState)(""),m=(0,o.Z)(l,2),g=m[0],j=m[1],v=(0,s.I0)(),b=(0,s.v9)(u);return(0,p.jsxs)(a.xu,{display:"flex",flexDirection:"column",gap:4,children:[(0,p.jsxs)(d.NI,{onSubmit:function(n){n.preventDefault();var e={name:t,number:g};if(b.find((function(n){return n.name===t})))return alert("".concat(t," is already in contacts.")),i(""),void j("");v((0,c.je)(e)),i(""),j("")},children:[(0,p.jsx)(f.l,{fontSize:"20px",fontWeight:"600",children:"Name:"}),(0,p.jsx)(x.I,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:function(n){return i(n.target.value)}})]}),(0,p.jsxs)(d.NI,{children:[(0,p.jsx)(f.l,{fontSize:"20px",fontWeight:"600",children:"Number:"}),(0,p.jsx)(x.I,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:g,onChange:function(n){return j(n.target.value)}})]}),(0,p.jsx)(h.z,{type:"submit",colorScheme:"blue",size:"lg",children:"Add contact"})]})}var g,j=t(778),v=function(n){return n.filter},b=function(){var n=(0,s.I0)(),e=(0,s.v9)(v);return(0,p.jsxs)(d.NI,{children:[(0,p.jsx)(f.l,{fontSize:"20px",fontWeight:"600",children:"Find contacts by name"}),(0,p.jsx)(x.I,{type:"text",name:"filter",required:!0,value:e,onChange:function(e){var t=e.target.value;n((0,j.W1)(t))}})]})},y=t(168),z=t(4313).ZP.ul(g||(g=(0,y.Z)(["\n  margin-top: 30px;\n  padding-left: 15px;\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  gap: 10px;\n\n  & li {\n    font-weight: 600;\n    font-size: 18px;\n    display: flex;\n    justify-content: space-between;\n  }\n\n  & button {\n    background-color: tomato;\n    border-radius: 4px;\n    border: none;\n    cursor: pointer;\n    width: 70px;\n    height: 25px;\n    font-size: 15px;\n  }\n\n  & button:active {\n    background-color: #9999ff;\n  }\n"]))),C=function(){var n=(0,s.I0)(),e=(0,s.v9)(u),t=(0,s.v9)(l),a=(0,s.v9)(v);(0,r.useEffect)((function(){n((0,c.VC)())}),[n]);var i=function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))}(e,a);return(0,p.jsxs)(p.Fragment,{children:[t&&(0,p.jsx)("div",{children:(0,p.jsx)("span",{children:"Loading..."})}),(0,p.jsx)(z,{children:i.map((function(e){var t=e.id,r=e.name,a=e.number;return(0,p.jsxs)("li",{children:[r,": ",a," ",(0,p.jsx)("button",{onClick:function(){return n((0,c.xX)(t))},children:"Delete"})]},t)}))})]})},k=function(){return(0,p.jsxs)(a.xu,{maxWidth:"500px",margin:"0 auto",children:[(0,p.jsx)(i.X,{as:"h1",size:"xl",marginY:"2rem",children:"Phonebook"}),(0,p.jsx)(m,{}),(0,p.jsx)(i.X,{as:"h2",size:"lg",marginY:"2rem",children:"Contacts"}),(0,p.jsx)(b,{}),(0,p.jsx)(C,{})]})}}}]);
//# sourceMappingURL=787.12cdb3c3.chunk.js.map