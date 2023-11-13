(function() {var implementors = {
"cumulus_pallet_aura_ext":[["impl&lt;Block, T, I&gt; <a class=\"trait\" href=\"frame_support/traits/misc/trait.ExecuteBlock.html\" title=\"trait frame_support::traits::misc::ExecuteBlock\">ExecuteBlock</a>&lt;Block&gt; for <a class=\"struct\" href=\"cumulus_pallet_aura_ext/struct.BlockExecutor.html\" title=\"struct cumulus_pallet_aura_ext::BlockExecutor\">BlockExecutor</a>&lt;T, I&gt;<span class=\"where fmt-newline\">where\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,\n    T: <a class=\"trait\" href=\"cumulus_pallet_aura_ext/pallet/trait.Config.html\" title=\"trait cumulus_pallet_aura_ext::pallet::Config\">Config</a>,\n    I: <a class=\"trait\" href=\"frame_support/traits/misc/trait.ExecuteBlock.html\" title=\"trait frame_support::traits::misc::ExecuteBlock\">ExecuteBlock</a>&lt;Block&gt;,</span>"]],
"frame":[],
"frame_executive":[["impl&lt;System: Config + <a class=\"trait\" href=\"frame_support/traits/misc/trait.EnsureInherentsAreFirst.html\" title=\"trait frame_support::traits::misc::EnsureInherentsAreFirst\">EnsureInherentsAreFirst</a>&lt;Block&gt;, Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&lt;Header = HeaderFor&lt;System&gt;, Hash = System::Hash&gt;, Context: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, UnsignedValidator, AllPalletsWithSystem: <a class=\"trait\" href=\"frame_support/traits/hooks/trait.OnRuntimeUpgrade.html\" title=\"trait frame_support::traits::hooks::OnRuntimeUpgrade\">OnRuntimeUpgrade</a> + <a class=\"trait\" href=\"frame_support/traits/hooks/trait.BeforeAllRuntimeMigrations.html\" title=\"trait frame_support::traits::hooks::BeforeAllRuntimeMigrations\">BeforeAllRuntimeMigrations</a> + <a class=\"trait\" href=\"frame_support/traits/hooks/trait.OnInitialize.html\" title=\"trait frame_support::traits::hooks::OnInitialize\">OnInitialize</a>&lt;BlockNumberFor&lt;System&gt;&gt; + <a class=\"trait\" href=\"frame_support/traits/hooks/trait.OnIdle.html\" title=\"trait frame_support::traits::hooks::OnIdle\">OnIdle</a>&lt;BlockNumberFor&lt;System&gt;&gt; + <a class=\"trait\" href=\"frame_support/traits/hooks/trait.OnFinalize.html\" title=\"trait frame_support::traits::hooks::OnFinalize\">OnFinalize</a>&lt;BlockNumberFor&lt;System&gt;&gt; + <a class=\"trait\" href=\"frame_support/traits/misc/trait.OffchainWorker.html\" title=\"trait frame_support::traits::misc::OffchainWorker\">OffchainWorker</a>&lt;BlockNumberFor&lt;System&gt;&gt;, COnRuntimeUpgrade: <a class=\"trait\" href=\"frame_support/traits/hooks/trait.OnRuntimeUpgrade.html\" title=\"trait frame_support::traits::hooks::OnRuntimeUpgrade\">OnRuntimeUpgrade</a>&gt; <a class=\"trait\" href=\"frame_support/traits/misc/trait.ExecuteBlock.html\" title=\"trait frame_support::traits::misc::ExecuteBlock\">ExecuteBlock</a>&lt;Block&gt; for <a class=\"struct\" href=\"frame_executive/struct.Executive.html\" title=\"struct frame_executive::Executive\">Executive</a>&lt;System, Block, Context, UnsignedValidator, AllPalletsWithSystem, COnRuntimeUpgrade&gt;<span class=\"where fmt-newline\">where\n    Block::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Extrinsic\" title=\"type sp_runtime::traits::Block::Extrinsic\">Extrinsic</a>: <a class=\"trait\" href=\"sp_runtime/traits/trait.Checkable.html\" title=\"trait sp_runtime::traits::Checkable\">Checkable</a>&lt;Context&gt; + Codec,\n    <a class=\"type\" href=\"frame_executive/type.CheckedOf.html\" title=\"type frame_executive::CheckedOf\">CheckedOf</a>&lt;Block::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Extrinsic\" title=\"type sp_runtime::traits::Block::Extrinsic\">Extrinsic</a>, Context&gt;: <a class=\"trait\" href=\"sp_runtime/traits/trait.Applyable.html\" title=\"trait sp_runtime::traits::Applyable\">Applyable</a> + <a class=\"trait\" href=\"frame_support/dispatch/trait.GetDispatchInfo.html\" title=\"trait frame_support::dispatch::GetDispatchInfo\">GetDispatchInfo</a>,\n    <a class=\"type\" href=\"frame_executive/type.CallOf.html\" title=\"type frame_executive::CallOf\">CallOf</a>&lt;Block::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Extrinsic\" title=\"type sp_runtime::traits::Block::Extrinsic\">Extrinsic</a>, Context&gt;: <a class=\"trait\" href=\"sp_runtime/traits/trait.Dispatchable.html\" title=\"trait sp_runtime::traits::Dispatchable\">Dispatchable</a>&lt;Info = <a class=\"struct\" href=\"frame_support/dispatch/struct.DispatchInfo.html\" title=\"struct frame_support::dispatch::DispatchInfo\">DispatchInfo</a>, PostInfo = <a class=\"struct\" href=\"frame_support/dispatch/struct.PostDispatchInfo.html\" title=\"struct frame_support::dispatch::PostDispatchInfo\">PostDispatchInfo</a>&gt;,\n    <a class=\"type\" href=\"frame_executive/type.OriginOf.html\" title=\"type frame_executive::OriginOf\">OriginOf</a>&lt;Block::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Extrinsic\" title=\"type sp_runtime::traits::Block::Extrinsic\">Extrinsic</a>, Context&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.73.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;System::AccountId&gt;&gt;,\n    UnsignedValidator: <a class=\"trait\" href=\"sp_runtime/traits/trait.ValidateUnsigned.html\" title=\"trait sp_runtime::traits::ValidateUnsigned\">ValidateUnsigned</a>&lt;Call = <a class=\"type\" href=\"frame_executive/type.CallOf.html\" title=\"type frame_executive::CallOf\">CallOf</a>&lt;Block::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Extrinsic\" title=\"type sp_runtime::traits::Block::Extrinsic\">Extrinsic</a>, Context&gt;&gt;,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()