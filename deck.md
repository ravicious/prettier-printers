theme: Simple, 1
autoscale: true
slidenumbers: true

# [fit] [Free Formatter For You, Jim](https://www.youtube.com/watch?v=cd4-UnU8lWY)

^ After video: That's a clip from Tim and Eric Awesome Show Great Job
today I have a free formatter for you Jim (next slide)

---

# [fit] Free Formatter For You, Jim

## [fit] \(You gotta install it but the formatter is free\)

---

![inline](its-free-software.gif)

^ I'm not gonna sit around all day it's for you!
okay okay, but why do you need a formatter?

---

# Style rules in linters are bad
## (when you can just have a formatter)

---

# You don't need a tool that tells you "Ooops, forgot a semicolon there!" when it can just remove it for you.

---

# [fit] DEMO

^ I think the best way to sell formatters is just seeing them in action, so let's jump straight into
the demo.
TURN ON QUICKTIME

---

> (…) for me it's about freeing up the brain/focus space by not having to worry about formatting or semicolons or whitespace or any of that, my focus can remain on the problem I'm solving.
-- [@brianloveswords](https://twitter.com/brianloveswords/status/1087766767622082562)

---

> Working in environments without an automatic code formatter makes me feel like I have to keep a context (that's unrelated to the problem space) in my head at all times of satisfying a linter or style guide or whatever.
-- [@brianloveswords](https://twitter.com/brianloveswords/status/1087767249736339456)


---

# [fit] Wait, where did it come from?

^ Hopefully by now you're sold on this thing but I'd like to talk briefly about how we got stuff
like prettier in the first place

---

![inline](https://dreamsongs.com/OOPSLA2007/Photos/Impressions%20Pix/wadler.gif)![inline](https://pbs.twimg.com/media/Doj79ISX4AEWU-E.jpg)

^ We can trace prettier back to Philip Wadler, most known for being Lambda Man.
But in all seriousness, he wrote a ton of computer science papers since he finished maths and
computer science degrees in late seventies.

---


> Joyce Kilmer and most computer scientists agree: there is no poem as lovely as a tree.
-- Philip Wadler, "A prettier printer" (2003)

^ And one of those papers is "A prettier printer" release in 2003, so almost thirty years ago.
In this paper Wadler describes how to write such a printer which takes a source file, parses it as
AST (abstract syntax tree) and then puts it back together but in a prettier way.

---

# Abstract Syntax Trees

```ruby
>> Parser::CurrentRuby.parse("2 + 4")
=> s(:send,
  s(:int, 2), :+,
  s(:int, 4))
```

^ For those who don't know, AST is just a way to represent what we wrote in a more abstract way.
So here I have 2 + 4 which basically means that I call method plus on 2 and pass 4 as an argument.

---

# Abstract Syntax Trees

```ruby
>> Parser::CurrentRuby.parse("foo.bar.baz")
=> s(:send,
  s(:send,
    s(:send, nil, :foo), :bar), :baz)
```

^ And the thing about AST which also helps in writing a printer is that there are cases where I can
write the same code in a few different ways but they all result in the same AST.

---

# Abstract Syntax Trees

```ruby
>> Parser::CurrentRuby.parse("foo\n.bar\n.baz")
=> s(:send,
  s(:send,
    s(:send, nil, :foo), :bar), :baz)
```

---

# Abstract Syntax Trees

```ruby
>> Parser::CurrentRuby.parse("foo.bar().baz()")
=> s(:send,
  s(:send,
    s(:send, nil, :foo), :bar), :baz)
```

---

# [fit] FUTURE

^ What can we expect in the future? Well, expect formatters to be more and more common.

---

# [fit] FUTURE
# for ASTs in our lives

^ When it comes to AST, imagine what stuff would be possible if our source files weren't pure text
but rather an AST. Then you wouldn't even need a formatter because you could just set your editor
preferences to your liking and then the editor would render the code exactly how you want it. And
I'd have my own settings and my editor would render that as I like.
One time a friend of mine was interested in writing a git diff algorithm which would diff not the
source code directly but rather the AST. So that could help with merge conflicts.

---

# [fit] FUTURE
# for Ruby formatters

^ When it comes to Ruby, there are people who work on formatters like prettier for Ruby but there's
nothing production ready right now I think.

---

# Future for Ruby formatters

```ruby
class Foo
  # …

  def bar
    # …

    baz
    # What is `baz`?
    # A variable? A method call?
    # Should I put parens after it?
  end
end
```

^ It might be that writing a formatter for Ruby is a harder task because Ruby has much more vague
rules than other langs when it comes to syntax

---

# Future for Ruby formatters

```ruby
# Prefer `do...end` over `{...}` for procedural blocks.
# Good: return value is not used out of scope
map do |x|
  x
end

# Prefer `{...}` over `do...end` for functional blocks.
# Good: return value is used/assigned
foo = map { |x|
  x
}
map { |x|
  x
}.inspect
```

^ Also, over the years we adopted a lot of peculiar formatting habits which might or might not
stay in opposition to an automated tool like prettier.

---

# [fit] `yarn add prettier`
#  `prettier.io`

^ Soo, in the end, I want you all to go to your project and type `yarn add prettier`.
Before that you might want to visit prettier.io just to play with it, thanks.
