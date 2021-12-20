---
sidebar_position: 2
title: Demands
---

export const Highlight = ({children, color, text}) => (
<span
style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: text ? text : '#fff',
      padding: '0.2rem',
    }}>
{children}
</span>
);

| Rank | Requestable Demands | Explanation/Restrictions |
| ----------------- | ------------------- | ------------------------ |
| <Highlight color="#cccccc">**Security Class 0**</Highlight> | Food Items. | Pizza, soda, etc. |
| <Highlight color="#f1c232">**Security Class 2**</Highlight> | Jeep Wrangler. | A maximum of **two** Jeep Wranglers may be requested. |
| <Highlight color="#0084ff">**Security Class 3**</Highlight> | Low-risk anomalies, unarmed Humvee. | A maximum of **one** Humvee may be requested. |
| <Highlight color="#e13238">**Security Class 4**</Highlight> | Moderate-risk anomalies, armed humvees. |A maximum of **one** armed Humvee or **two** unarmed Humvees may be requested. |
| <Highlight color="#e13238">**Installation Director**</Highlight> | Weapons, access to the Clean Room. | Admin commands cannot be used for this. |
| <Highlight color="#e13238">**O5 Council**</Highlight> | Anything. | At the discretion of the O5 Councillor. |

- Two Security Class 1 personnel hold the same value as one Security Class 2.
- Five Security Class 1 personnel, or four Security Class 2 personnel hold the same value as one Security Class 3.
- Six Security Class 2 personnel, or two Security Class 3 personnel hold the same value as one Security Class 4.
- Two Security Class 4 personnel, or four Security Class 3 personnel hold the same value as an Installation Director.