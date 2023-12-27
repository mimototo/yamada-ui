import{a as e,j as a}from"./jsx-runtime-TtYKBvr-.js";import{I as ia,f as ca}from"./fontawesome-icon-nl9SZpml.js";import{u as ua}from"./index-a_Nj0cMp.js";import{u as pa,A as t}from"./avatar-M6Zu4X6w.js";import{f as ra}from"./forward-ref-6T0UNPU-.js";import{p as da,i as C,q as va,u as f,a as oa}from"./factory-K2EgzEzN.js";import{r as la}from"./index-IybTgENJ.js";import{u as ha}from"./use-component-style-SBdvRTzg.js";import{o as ga}from"./theme-provider-WG22_9xQ.js";import{W as ea}from"./flex-euEh5ill.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-yFQ9IdhB.js";import"./index-3YLteYYa.js";import"./index-gWY0u-sb.js";import"./index-gvcGOgrq.js";import"./use-image-cgtv85zI.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";const sa=ra((s,A)=>{const[n]=ha("Avatar",s),{className:H,max:o,borderColor:Y,gap:m="-sm",borderRadius:x="full",rounded:y="full",children:z,...w}=ga(s);let r=da(z);const i=C(o)?0:r.length-o;r=C(o)?r:r.slice(0,o),r=r.reverse();const _=r.map((S,ma)=>la.cloneElement(S,va({marginEnd:ma?m:0,size:s.size,borderColor:S.props.borderColor??Y,borderWidth:"2px"})));return e(f.div,{ref:A,className:oa("ui-avatar-group",H),__css:{display:"flex",flexDirection:"row-reverse",justifyContent:"flex-end",alignItems:"center",...n.group},...w,children:[i>0?a(f.span,{className:"ui-avatar__excess",borderRadius:x,rounded:y,ms:m,__css:{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",flexShrink:0,textAlign:"center",textTransform:"uppercase",fontWeight:"medium",borderWidth:"2px",...n.excess},children:`+${i}`}):null,_]})}),ba={"top-start":{top:"0",insetStart:"0",transform:"translate(-25%, -25%)"},"top-end":{top:"0",insetEnd:"0",transform:"translate(25%, -25%)"},"bottom-start":{bottom:"0",insetStart:"0",transform:"translate(-25%, 25%)"},"bottom-end":{bottom:"0",insetEnd:"0",transform:"translate(25%, 25%)"}},na=ra(({className:s,boxSize:A="1em",placement:n="bottom-end",ping:H,pingColor:o=["blackAlpha.400","whiteAlpha.500"],pingDuration:Y="1.4s",pingCount:m="infinite",pingScale:x=1.8,children:y,...z},w)=>{const r=pa(),i=ua({keyframes:{"75%, 100%":{transform:`scale(${x})`,opacity:0}},fillMode:"forwards",duration:Y,timingFunction:"cubic-bezier(0, 0, 0.2, 1)",iterationCount:m}),_={position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",...ba[n],...r.badge};return e(f.div,{ref:w,className:oa("ui-avatar__badge",s),boxSize:A,__css:_,...z,children:[y,H?a(f.div,{className:"ui-avatar__badge__ping",__css:{position:"absolute",boxSize:"full",rounded:"full",opacity:.75,zIndex:-1,bg:o},animation:i}):null]})}),Ba={title:"Components / Media And Icons / Avatar",component:t},c=()=>a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),u=()=>e(ea,{gap:"md",children:[a(t,{size:"2xs",name:"Hirotomo Yamada"}),a(t,{size:"xs",name:"Hirotomo Yamada"}),a(t,{size:"sm",name:"Hirotomo Yamada"}),a(t,{size:"md",name:"Hirotomo Yamada"}),a(t,{size:"lg",name:"Hirotomo Yamada"}),a(t,{size:"xl",name:"Hirotomo Yamada"}),a(t,{size:"2xl",name:"Hirotomo Yamada"})]}),p=()=>a(t,{name:"Hirotomo Yamada"}),d=()=>a(t,{src:"https://avatars.githubusercontent.com/u/84060430?v=4",alt:"Hirotomo Yamada"}),v=()=>e(ea,{gap:"md",children:[a(t,{bg:"secondary",src:"https://not-found.com"}),a(t,{src:"https://not-found.com"}),a(t,{icon:a(ia,{icon:ca}),src:"https://not-found.com"})]}),l=()=>a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",children:a(na,{bg:"primary"})}),h=()=>a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",children:a(na,{bg:"primary",ping:!0,pingColor:"primary.400"})}),g=()=>e(sa,{children:[a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})]}),b=()=>e(sa,{max:3,children:[a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})]});var I,G,W;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />;
}`,...(W=(G=c.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var N,j,E;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Avatar size="2xs" name="Hirotomo Yamada" />
      <Avatar size="xs" name="Hirotomo Yamada" />
      <Avatar size="sm" name="Hirotomo Yamada" />
      <Avatar size="md" name="Hirotomo Yamada" />
      <Avatar size="lg" name="Hirotomo Yamada" />
      <Avatar size="xl" name="Hirotomo Yamada" />
      <Avatar size="2xl" name="Hirotomo Yamada" />
    </Wrap>;
}`,...(E=(j=u.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var k,B,M;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <Avatar name="Hirotomo Yamada" />;
}`,...(M=(B=p.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var P,F,R;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <Avatar src="https://avatars.githubusercontent.com/u/84060430?v=4" alt="Hirotomo Yamada" />;
}`,...(R=(F=d.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var T,U,$;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Avatar bg="secondary" src="https://not-found.com" />
      <Avatar src="https://not-found.com" />
      <Avatar icon={<Icon icon={faPoo} />} src="https://not-found.com" />
    </Wrap>;
}`,...($=(U=v.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var q,D,O;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4">
      <AvatarBadge bg="primary" />
    </Avatar>;
}`,...(O=(D=l.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var V,J,K;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4">
      <AvatarBadge bg="primary" ping pingColor="primary.400" />
    </Avatar>;
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,Q,X;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <AvatarGroup>
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
    </AvatarGroup>;
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,aa,ta;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <AvatarGroup max={3}>
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
    </AvatarGroup>;
}`,...(ta=(aa=b.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};const Ma=["basic","withSize","withName","withImage","withFallback","withBarge","withPing","useGroup","withGroupMax"];export{Ma as __namedExportsOrder,c as basic,Ba as default,g as useGroup,l as withBarge,v as withFallback,b as withGroupMax,d as withImage,p as withName,h as withPing,u as withSize};
