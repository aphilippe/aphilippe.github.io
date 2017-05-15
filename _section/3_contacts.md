---
title: Contacts
position: footer
---

{% for contact in site.data.contacts %}
<a href="{{ contact.link }}" ><span class="fa fa-{{ contact.type }}"></span>{{ contact.text }}</a>
{% endfor %}