# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "nettv-blog"
  spec.version       = "4.0.12"
  spec.authors       = ["Lạc Trần"]
  spec.email         = ["tri.vh15@gmail.com"]

  spec.summary       = "NetTV blog theme."
  spec.homepage      = "https://n-tv.github.io"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2.2"

  spec.add_development_dependency "bundler", "~> 2.0.1"
  spec.add_development_dependency "rake", "~> 12.0"
end
