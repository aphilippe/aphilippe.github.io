---
title: Contacts
position: footer
---
<ul>
{% for contact in site.data.contacts %}
<li>
<a href="{{ contact.link }}" ><span class="fa fa-{{ contact.icon }}"></span>{{ contact.text }}</a>
</li>
{% endfor %}
</ul>